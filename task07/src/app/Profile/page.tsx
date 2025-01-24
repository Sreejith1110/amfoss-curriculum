import Image from "next/image";
import style from "@/app/style/style.module.css";
import Link from "next/link";
export default function Profile(){
    return(
        <>
            <div style={{backgroundColor:'grey', width:'500px',marginLeft:"35%",borderRadius:"1rem",marginBottom:"100px"}}>
            <h1 style={{textAlign:"center",fontSize:"40px"}} className={style.h1}>Profile</h1>
            <div style={{display:"flex",justifyContent:"center"}}>
            <Image src="/image/pic 1.jpg" alt="profile" width={300} height={300} className={style.profile} />
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",marginRight:"70px"}}>
            {/* <button className={style.changebutton} style={{marginBottom:"30px"}}>change pic</button> */}
            </div>

            <div style={{display:"flex",flexDirection:"row",margin:"20px", borderTop:'2px solid silver',columnGap:"50%" }}>
            <h2 style={{ fontSize:"30px",}}>Details</h2>
            <Link href="../ProfileEdit">
            <button className={style.changebutton} style={{width:"60px",height:"30px",margin:"30px"}}>Edit</button>
            </Link>
            </div>

            <div style={{display:'flex',flexDirection:"column", margin:"20px"}}>
            <div style={{display:"flex",flexDirection:"row",columnGap:"40px"}}>
                <p style={{fontSize:"17px",fontStyle:"oblique"}}>Name:</p>
                <p style={{fontSize:"22px",fontFamily:"cursive",}}>Sreejith M</p>
            </div>
            <div style={{display:"flex",flexDirection:"row",columnGap:"40px"}}>
                <p style={{fontSize:"17px",fontStyle:"oblique"}}>E-mail:</p>
                <p style={{fontSize:"22px",fontFamily:'cursive'}}>Sreejith@gmail.com</p>
            </div>
            </div>
            </div>
        </>
    );
}