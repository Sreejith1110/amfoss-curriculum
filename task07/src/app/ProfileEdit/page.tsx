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
            <button className={style.changebutton} style={{marginBottom:"30px"}}>change pic</button>
            </div>

            <div style={{display:"flex",flexDirection:"row",margin:"20px", borderTop:'2px solid silver',columnGap:"50%" }}>
            <h2 style={{ fontSize:"30px",}}>Details</h2>
            </div>

            <div style={{display:'flex',flexDirection:"column", margin:"20px"}}>
            <div style={{display:"flex",flexDirection:"row",columnGap:"40px",alignItems:"baseline"}}>
                <p style={{fontSize:"17px",fontStyle:"oblique"}}>Name:</p>
                <input placeholder="type name" type="text"  style={{fontSize:"20px",fontFamily:"cursive",borderRadius:"1rem",height:"30px",width:"75%"}}/>
            </div>
            <div style={{display:"flex",flexDirection:"row",columnGap:"40px",alignItems:"baseline"}}>
                <p style={{fontSize:"17px",fontStyle:"oblique"}}>E-mail:</p>
                <input placeholder="type email" type="e-mail" style={{fontSize:"20px",fontFamily:'cursive',borderRadius:"1rem",height:"30px", width:"75%"}}/>
            </div>
            </div>
            <Link href="../Profile">
                <button className={style.changebutton} style={{width:"80px",marginLeft:"40%",borderRadius:"1rem"}}>save</button>
            </Link>
            </div>
        </>
    );
}