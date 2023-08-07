import React, { useState } from 'react'
import './login.css'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const history=useNavigate();

    const[name,setName] = useState(null);
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);
   
async function submit(e){
            e.preventDefault();
        try{
        await axios
        .post("http://localhost:4000/Signup",{
            name,email,Password:password
        })
        .then(res=>{
            console.log(res)
            if(res.data.token){
                history("/Form",{state:{id:email}})
            }
            else {
                alert("User already exists")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    }
    catch(e){
        console.log(e);
    }
}

    return (
         <div className= "signup-container">
           <form class="form" 
           onSubmit={(e)=>{
            submit(e)}}
            >
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        
        <label>
            <input 
            required
            placeholder="" 
            type="text" 
            class="input" 
            id="name" onChange={(e) => { setName(e.target.value) }}
            />
            <span>Name</span>
        </label>
    
        
    <label>
        <input 
        required={true}
        type="email" 
        class="input" 
        id="email"  
        onChange={(e) => { setEmail(e.target.value) }}
        />
        <span>Email</span>
    </label> 
    
    <label>
        <input 
        required={true}
        type="password" 
        class="input" 
        id="Password"  onChange={(e) => { setPassword(e.target.value) }}
        />
        <span>Password</span>
    </label>
   
    <button type="submit" class="submit">Submit</button>
    <Link  to='/Login'  className='submitt'> Login </Link>
</form>
        </div>
       
    )       

}

export default Signup