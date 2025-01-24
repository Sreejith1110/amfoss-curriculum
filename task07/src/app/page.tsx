import HomeMovie from '@/app/Moviecard/Homecard';
import Info from "@/app/movie.json";
import style from "@/app/style/style.module.css";

interface Movie{
    id:number;
    name:string;
    img:string;
    author:string;
    year:number;
}

export default function Homepage(){
    const movies:Movie[]=Info;
    return(
        <>
            <h1 className={style.h1}>Recommended</h1>
            <div style={{display:"flex",flexDirection:"row", overflow:"scroll", columnGap:"30px"}}>
            {movies.map((movie) =>(
                <HomeMovie key={movie.id} name={movie.name} img={movie.img} author={movie.author} year={movie.year} id={movie.id} description={""}/>
            ))}
            </div>
            <div style={{margin:"40px",}}>
            <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1 className={style.h1}>Top Movies</h1>
            <div style={{display:"flex",
                    columnGap:"20px",
                    rowGap:"20px",
                    flexFlow:"wrap row",
                    width:"90%",
                    height:"500px",
                    overflow:"scroll",
                }}>
                    {movies.map((movie) =>(
                        <HomeMovie key={movie.id} name={movie.name} img={movie.img} author={movie.author} year={movie.year} id={movie.id} description={""}/>
                    ))}
            </div>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h1 className={style.h1}>New Movies</h1>
            <div style={{display:"flex",
                    columnGap:"20px",
                    rowGap:"20px",
                    flexFlow:"wrap row",
                    width:"90%",
                    height:"500px",
                    overflow:"scroll",
                }}>
                    {movies.map((movie) =>(
                        <HomeMovie key={movie.id} name={movie.name} img={movie.img} author={movie.author} year={movie.year} id={movie.id} description={""}/>
                    ))}
            </div>
            </div>
            </div>
            </div>
        </>
    );
}