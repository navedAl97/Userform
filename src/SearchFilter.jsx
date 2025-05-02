import React, { useEffect, useState } from 'react';
import { Table, Input, Select } from 'antd';
import {toast, ToastContainer} from 'react-toastify'
import axios from 'axios';

const { Search } = Input;
const { Option } = Select;

const SearchFilter = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([])


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      setFilterData(response.data)
      console.log(response);
    } catch (error) {
      toast.error("Somthing went wrong", error)
    }
  };

    const handleSearch = (value)=>{
        
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
            

        );
        setFilterData(filtered);
    }

    const categorySearch = (value)=>{
            if(!value){
              setFilterData(data)
                return;
            }
          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            const filterData = data.filter(item =>
              item.category.toLowerCase() === value.toLowerCase()
            )
              setFilterData(filterData)
    }

useEffect(()=>{
  fetchProducts()
}, [])



  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Category', dataIndex: 'category' },
    { title: 'Price', dataIndex: 'price', render: (price) => `₹${price}`},
  ]

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{marginBottom:'20px'}}>Product Table (API Data)</h2>
    <div style={{display:"flex", gap:"20px", marginBottom:'20px'}}>
    <Search
     style={{width:"300px"}}
     placeholder='Search By Name'
     onChange={(event) => handleSearch(event.target.value)}
    />

        <Select
  placeholder="Filter by Category" 
  style={{ width: "200px" }}
  onChange={categorySearch}
>
  <Select.Option value="all">All Categories</Select.Option>
  <Select.Option value="men's clothing">Men's Clothing</Select.Option>
  <Select.Option value="jewelery">Jewelery</Select.Option>
  <Select.Option value="electronics">Electronics</Select.Option>
  <Select.Option value="women's clothing">Women's Clothing</Select.Option>
</Select>
    </div>

      <Table
        dataSource={filterData}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SearchFilter;
