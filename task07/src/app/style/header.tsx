import Link from "next/link";
import Image from "next/image";
import style from '@/app/style/style.module.css';

export default function header(){
    return(
        <div>
            <header style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent:"space-around",
        }}>
            <div style={{
                width:"100%",
            }}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
            }}>
          <div>
            <h1 style={{
              fontSize:"50px"
            }}>LETTERBOX</h1>
          </div>
          <div style={{width:"75%",}}></div>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", columnGap:"30px" }}>
          <Link href={"../Search"}>
          <button className={style.headerbutton}>search</button></Link>
          <Link href={"../SignIn"}>
          <button className={style.headerbutton}>SignIn</button>
          </Link>
          <button style={{backgroundColor:"black",border:"solid black",}}>
            <Link href={"../Profile"}>
            <Image src="/image/pic 1.jpg" alt="profile" width={30} height={30} style={{
              border:"solid white",
              borderRadius:"1em 1em 1em 1em"
            }}/>
            </Link>
          </button>
          </div>
          </div>
          <div style={{
            fontSize:"30px",borderTop :"solid grey"
        }}>
            <div style={{display:"flex",
                flexDirection:"row",
                columnGap:"20px",}}>
                <Link href="/">
                <button className={style.headerbutton}>Home</button></Link>
                <Link href="/watchlist">
                <button className={style.headerbutton}>watchlist</button></Link>
            </div>
        </div>
          </div>
        </header>
        </div>
    )
}