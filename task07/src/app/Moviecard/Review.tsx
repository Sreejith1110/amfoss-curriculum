import React from "react";
import Image from 'next/image';


type PropsType= {
    id:number;
    name:string;
    img:string;
    author:string;
    year:number;
    description:string;
    review:string;
}

const Moviecard = ({review,img}:PropsType)=>{
    return(
        <div style={{width:"75%", height:"110px",display:"flex", flexDirection:"row", columnGap:"10px",}}>
            <div>
            <Image src={img} alt="profile" width={30} height={30} style={{borderRadius:"1em 1em 1em 1em"}}/>
            </div>
            <div style={{border:"solid black"}}>
            <span style={{height:"20px"}}>star</span>
            <p style={{width:"100%",height:"50px", overflow:"scroll",}}>{review}</p>
            </div>
        </div>
    );
}

export default Moviecard;