import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "@/app/style/style.module.css";

type PropsType= {
    id:number;
    name:string;
    img:string;
    author:string;
    year:number;
    description:string;  
}

const Moviecard = ({id,name,img}:PropsType)=>{
    return(
        <div className={style.img} style={{display:"flex",
            columnGap:"20px",
            flexDirection:"column",
        }}>
            <Link
            href={`./Moviecard/${id}`} >
            <Image
            src={img} alt={name}
            width={200}
            height={200}            
            />
            <div style={{width:"200px",
            }}>
                <h4 className={style.h1} style={{
                    height:"30px",
                    overflow:"scroll",
                }}>{name}</h4>
            </div>
            </Link>
        </div>
    );
}

export default Moviecard;