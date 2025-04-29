import React from 'react'

const User = ({user}) => { 
  return (
    <div className='main' style={{}}>
    <div className='usedata' style={{widtg: "100%",  display:'flex', flexDirection:'column', border:'1px solid red',  padding:'20px', borderRadius:'20px'}} >
      {/* <h1>This is Rouse Cmponents</h1> */}
      <h5 > ID: {user.id}</h5>
      <h5 >Nmae: {user.name}</h5>
      <h5 >Age: {user.age}</h5>
      <h5 >Gander: {user.gander}</h5>
      
    </div>
    </div>
  )
}



export default User;
