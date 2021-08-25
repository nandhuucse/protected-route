import React,{useEffect} from 'react'

function Home() {
    const handleLogout=()=>{
        localStorage.clear();
        window.location.pathname="/signin";
    }
   
    return (
        <div>
            <h1>Home Component</h1>
            <button class="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
