import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Space } from 'antd';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FetchUserData = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const fetchUser = async ()=>{
        try{
          const response = await axios.get("https://jsonplaceholder.typicode.com/users")
          setUsers(response.data)
          
        }catch(error){
            console.error(error) ;
          toast.error("Failed data ")
        }
  };

  useEffect(()=>{

    fetchUser();
    
  }, [])


  const handleFormSubmit = async (values) => {
    console.log(values);
    
    try {
      if (editingUser) {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, values);
        toast.success('User updated');
        setUsers(
          users.map(user =>
            user.id === editingUser.id ? { ...user, ...values } : user
          )
        );
      } else {
         await axios.post('https://jsonplaceholder.typicode.com/users',values );
        toast.success('User added');
        const newUser = { ...values, id: Date.now() }; 
        setUsers([...users, newUser]);
      }

      setModalOpen(false);
      form.resetFields();
      setEditingUser(null);
    } catch {
      toast.error('Operation Failed');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      toast.success('User deleted');
      setUsers(users.filter(user => user.id !== id));
    } catch {
        
      toast.error('Delete failed');
    }
  };

  const showEditModal = (user) => {
    setEditingUser(user);
    form.setFieldsValue({ name: user.name, email: user.email, phone: user.phone });
    setModalOpen(true);
  };

  return (
    <div style={{ padding: 24 }}>
        <h3 style={{display:'flex', justifyContent:'center'}}>CRUD with Dummy API </h3>
      <h2>User List</h2>
      <Button
        type="primary"
        onClick={() => {
          setEditingUser(null);
          form.resetFields();
          setModalOpen(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add User
      </Button>
      <Table
        dataSource={users}
        // rowKey="id"
        pagination={{ pageSize: 20 }}
        columns={[
          { title: 'Id', dataIndex: 'id' },
          { title: 'Name', dataIndex: 'name' },
          { title: 'Email', dataIndex: 'email' },
          { title: 'Phone', dataIndex: 'phone' },
          {
            title: 'Actions',
            render: (_, record) => (
              <Space>
                <Button onClick={() => showEditModal(record)}>Edit</Button>
                <Button danger onClick={() => deleteUser(record.id)}>
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
           />  
      <Modal
        title={editingUser ? 'Edit User' : 'Add User'}
        open={isModalOpen}
        onCancel={() => {
          setModalOpen(false);
          setEditingUser(null);
          form.resetFields();
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleFormSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter email' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please enter phone' }]}
          >
            <Input type="phone" />
          </Form.Item>
        </Form>
      </Modal>

      <ToastContainer  autoClose={3000} />
    </div>
  );
};

export default FetchUserData;