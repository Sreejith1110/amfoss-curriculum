import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from '@/app/style/style.module.css';

type PropsType= {
    id:number;
    name:string;
    img:string;
    author:string;
    year:number;
    description:string;

}

const Moviecard = ({id,name,img,author,year}:PropsType)=>{
    return(
        <div style={{display:"flex",
            columnGap:"20px",
            flexFlow:"wrap row",
        }}>
            <Link
            href={`/Moviecard/${id}`}>
            <Image
            src={img} alt={name}
            width={300}
            height={400}            
            />
            <div style={{width:"300px",
            }}>
                <h1 className={style.h1} style={{
                    height:"60px",
                    overflow:"scroll",
                }}>{name}</h1>
                <p>{year}</p>
                <p>Directed by : {author}</p>
            </div>
            </Link>
        </div>
    );
}

export default Moviecard;