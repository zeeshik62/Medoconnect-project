import { useState } from "react"

const Login=()=>{

    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');


    const handleEmail= (event)=>
    {
        setEmail(event.target.value)
    }
    const handlePassword= (event)=>
    {
        setPass(event.target.value)
    }
    const handleSubmit= (event)=>
    {
        event.preventDefault();
        alert(`Email: ${email} \nPassword: ${pass}`);
        <h1>{email}</h1>
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" onChange={handleEmail} className="form-control" id="inputEmail3"/>
      
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" onChange={handlePassword} className="form-control" id="inputPassword3"/>
    </div>
  </div>
  
 
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

        </div>
    )
}
export default Login;