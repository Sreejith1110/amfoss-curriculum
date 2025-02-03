import Moviecard from '@/app/Moviecard/Moviecard';
import Info from "@/app/movie.json";

interface Movie{
    id:number;
    name:string;
    img:string;
    author:string;
    year:number;
}

export default function WatchList(){
    const movies:Movie[]=Info;
    return(
        <>
            <div>
            <div>
                <h1>Watchlist</h1>
            </div>
            <div style={{display:"flex",
                    columnGap:"70px",
                    rowGap:"40px",
                    flexFlow:"wrap row",
                    width:"100%",
                }}>
                    {movies.map((movie) =>(
                        <Moviecard key={movie.id} name={movie.name} img={movie.img} author={movie.author} year={movie.year} id={movie.id} description={""}/>
                    ))}
            </div>
            </div>
        </>
    );
}