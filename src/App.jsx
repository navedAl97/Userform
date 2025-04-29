// import { useState } from 'react'
import './App.css'
import User from './User';
import Userform from './Userform';


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
      
    </>
  )
}

export default App;
