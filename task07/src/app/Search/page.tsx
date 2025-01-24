"use client";
import React,{useState} from "react";
import HomeMovie from '@/app/Moviecard/Moviecard';
import Data from "@/app/movie.json";
import style from "@/app/style/style.module.css";

export default function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(Data);
  
  
    const handleInputChange = (event: { target: { value: string; }; }) => {
      const { value } = event.target;
      setSearchTerm(value);
      filterData(value);
    };
  
  
    const filterData = (searchTerm: string) => {
      const filteredData = Data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredData);
    };
    return(
        <>
            <div style={{
                margin:"40px",
                display:"flex",
                flexDirection:"row",
            }}>

            <div style={{width:"80%",}}>
                <div style={{width:"80%"}}>
                    <div style={{backgroundColor: "white", color: "GrayText", width: "100%", height: "40px", borderRadius:"5em 5em 5em 5em", display: 'flex', alignItems: "center",}} >
                        <input style={{borderRadius: "3em 3em 3em 3em",height:"80%", width: "100%", color:"black", fontSize:"15px",marginLeft:"10px"}}
                        name="search" 
                        placeholder="Movie name ..." 
                        type="text" 
                        value={searchTerm} 
                        onChange={handleInputChange}/>
                    </div>
                </div>
                <h1>Related Movies</h1>
                <div style={{
                    maxHeight:"1000px",
                    display:"flex",
                    columnGap:"50px",
                    rowGap:"30px",
                    flexFlow:"wrap row",
                    overflow:"scroll",
                }}>
                    {filteredData.map((item) => (
                        <HomeMovie key={item.id} name={item.name} img={item.img} author={item.author} year={item.year} id={item.id} description={""}/>
                    ))}
                </div>
            </div>

            <div style={{
                width:"20%",
                textAlign:"center",
            }}>
                <h2 style={{
                    border:"solid grey",
                    borderRadius:"0.5em 0.5em 0.5em 0.5em",
                }}>Filter</h2>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    border:"solid grey",
                    borderRadius:"1em 1em 1em 1em",
                    rowGap:"10px",
                }}>
                    <button className={style.button}>All</button>
                    <button className={style.button}>release date</button>
                    <button className={style.button}>Author</button>
                </div>
            </div>

            </div>
        </>
    );
}
