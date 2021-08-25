import React,{useState} from 'react'

function SignIn() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState({value:""});

    // const handleInputChange=(e)=>{
        
    // }
    const handleSubmit=(e)=>{
        console.log("hello");
        e.preventDefault();
        if(name==="" || pass===""){
            setError((prevState)=>({
                value:"please enter the field",
            }));
            console.log(error.value)
        }
        else if (
            name === "nk" &&
            pass === "123"
          ) {
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname="/";
            console.log("isauth");
          } 
          else {
            setError((prevState) => ({ value: "Invalid username/password" }));
            return;
          }
    }
    return (
        <div
             style={{
                display:"flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems: "center"
             }}
        >
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" name="username" class="form-control" placeholder="Enter username" id="username" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" name="password" class="form-control" placeholder="Enter password" id="pwd" onChange={(e)=>setPass(e.target.value)}/>
                </div>
                <button class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default SignIn
