import React, { useState } from 'react'
import {Button, Form, Input,  Select, Modal} from "antd"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Userform =()=> {
    const [form] = Form.useForm()
    const [isModal, setIsModal]= useState(false);


    const formHandle = (values) =>{
            console.log( "User Data", values);     
            setIsModal(true);
            form.resetFields()
            
        }
        
        
        const onModal =()=>{
            setIsModal(false);
            toast.success('this is success')
           
    }

  return (
    <div style={{width:'100%', height:"100vh", display:'flex', justifyContent:'center', alignItems:'center'}}>
        
        <Form form={form} 
        style={{
            width:'300px',
            background: 'linear-gradient(45deg,rgba(42, 123, 155, 0.46) 0%, rgba(87, 199, 134, 0.4) 50%, rgba(237, 221, 83, 0.27) 100%)',
            }} 
            layout='vertical'onFinish={formHandle}>


            <h2 style={{display:"flex", justifyContent:'center'}}>Login User</h2>
            <Form.Item label="Email" name="email" rules={[
                {required:true, message:'Enter Valid Email'},
                {type:"email"}
            ]}>
                <Input  placeholder='Enter Your Email' />

            </Form.Item>

            <Form.Item label="Password" name="password" rules={[
                {required:true, message:'Enter Valid Password'},
                {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, message:'This password is not valid'}
            ]}>
                <Input.Password  placeholder='Enter Your password' />
            </Form.Item>
            <Form.Item label="Role" name="role" rules={[{required:true, message:'Select Role'}]}>
                <Select placeholder="Select Role">
                    <Option value="admin">Admin</Option>
                    <Option value="user">User</Option>
                    <Option value="manager">Manager</Option>
                </Select>
            </Form.Item>

            <Form.Item wrap gap="small"  >
                <Button type='primary' htmlType='submit' style={{outline:"none"}}>Register</Button>
            </Form.Item>


        </Form>

        <Modal title="Registraction Successfull" open={isModal} onOk={onModal} onCancel={()=>setIsModal(false)} >
            <p>User Registration is Successfull Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi magni odio cum quam ut, rem quisquam at omnis reiciendis?</p>
            
        </Modal>
         <ToastContainer />
    </div>
  )
}

export default Userform;
