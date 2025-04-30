// import { useState } from 'react'
import './App.css'
import Userform from './Userform';
import 'react-toastify/dist/ReactToastify.css';
import Toster from './Toster';
// import FetchUserData from './FetchUserData';
import { ToastContainer } from 'react-toastify';


function App() {
//   const userData  = [
//     {
//         id:'1',
//         name:'rhunder clint',
//         age:"22",
//         gender:"male",
//         address:'stret washingTon America 132230'
//   },
//     {
//         id:'2',
//         name:'tiger clint',
//         age:"32",
//         gender:"male",
//         address:'stret washingTon America 132230'
//   },
//     {
//         id:'3',
//         name:'rhunder clint',
//         age:"43",
//         gender:"male",
//         address:'stret washingTon America 132230'
//   },
//     {
//         id:'4',
//         name:'rhunder clint',
//         age:"43",
//         gender:"male",
//         address:'stret washingTon America 132230'
//   },
//     {
//         id:'5',
//         name:'rhunder clint',
//         age:"43",
//         gender:"male",
//         address:'stret washingTon America 132230'
//   },
// ]

return (
  <>
    
    {/* { 
      userData.map((user)=>
        
        (<div key={user.id}> 
           <User  user={user}/>
        </div>)
      )
      
      
    } */}

     <Userform/>
    <Toster></Toster>
    {/* <FetchUserData></FetchUserData> */}
    <ToastContainer ></ToastContainer>
  
      
    </>
  )
}

export default App;
