"use client";
import React,{useState} from "react";
import Link from 'next/link';


const Search = () => {
    const [input, setInput] = useState("");
    return(
        <>
        <div style={{width:"80%"}}>
            <div style={{backgroundColor: "white", color: "GrayText", width: "100%", height: "40px", borderRadius:"5em 5em 5em 5em", display: 'flex', alignItems: "center",}} >
                <input style={{borderRadius: "3em 3em 3em 3em",height:"80%", width: "100%", color:"black", fontSize:"15px",marginLeft:"10px"}}
                name="search" 
                placeholder="Movie name ..." 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}/>
                <div style={{display: "flex", justifyContent:"flex-end",}}>
                <Link href={"../Search"}><button style={{
                    backgroundColor: "white", fontWeight:'700', border:"solid white", borderRadius: "5em 5em 5em 5em",
                }} >search</button></Link>
                </div>
            </div>
        </div>
        </>
    )
};

export default Search;