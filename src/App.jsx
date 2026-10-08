import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Assignments from './pages/Assignments'  
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase/config'
import { doc, getDoc } from 'firebase/firestore'
function App() {
  const [user,setUser]=useState(null)
  const  [role,setRole]=useState(null)
   
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,async (currentUser)=>{
      if(currentUser){
        setUser(currentUser)

        const userDocRef=doc(db,"users",currentUser.uid)
        try{
          const userDocSnap=await getDoc(userDocRef)
          if (userDocSnap.exists()){
            setRole(userDocSnap.data().role)
          } else {
            console.log("User's document does not exist.")}

        } catch{
            console.log(console.error())
        }

      }
      else{console.log ("No current user!")}
    })
    return unsubscribe
    },[])
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/assignments' element={<Assignments user={user} role={role}/>} />

        
    </Routes>
  )
}

export default App