import React from "react";
import style from "@/app/style/style.module.css";
import Link from "next/link";
export default function Signin(){
    // const [username, setUsername]=useState("");
    // const [password, setPassword]=useState("");


    return(
        <>
            <form>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <h1>Login</h1>
                    <div style={{display:"flex",flexDirection:"column",width:"500px",rowGap:"20px"}}>
                    <label htmlFor="username">Username</label>
                    <input placeholder="username" name="username" type="text" style={{borderRadius:"1rem",height:"30px"}}/>
                    <label htmlFor="password">Password</label>
                    <input placeholder="password" name="password" type="text" style={{borderRadius:"1rem",height:"30px"}}/>
                    <button type="submit" className={style.button} style={{border:"1px solid silver"}}>Login</button>
                    </div>
                    <p>Are you new ?</p>
                    <Link href={'../SignUp'}>
                    <button className={style.button} style={{border:"1px solid silver", width:"500px"}} >Sign Up</button>
                    </Link>
                </div>
            </form>
            <div style={{height:"120px"}}></div>
        </>
    )
}