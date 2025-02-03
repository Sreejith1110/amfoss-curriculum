"use client";
import React, { useState, useEffect } from 'react';
import movies from '../../movie.json';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Review from '../Review';
import style from '@/app/style/style.module.css';

export default function MovieDetail(){
  const use = useParams();
  const id = use.id;
  const movie = movies.find((m) => m.id.toString() === id);
  const [userReview, setUserReview] = useState('');
  const [updatedMovie, setUpdatedMovie] = useState(movie);
  useEffect(() => {
    const savedMovie = localStorage.getItem(id);
    if (savedMovie) {
      setUpdatedMovie(JSON.parse(savedMovie)); 
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setUserReview(e.target.value);
  };

  const handleSubmitchange = (e: React.FormEvent) =>{
    e.preventDefault();
    if (userReview.trim()) {
      const newReviewId = (Object.keys(updatedMovie.review).length + 1).toString();
      const updatedReviews = { ...updatedMovie.review, [newReviewId]: userReview };

     
      const updatedMovieData = { ...updatedMovie, review: updatedReviews };
      setUpdatedMovie(updatedMovieData);
      
      localStorage.setItem(id, JSON.stringify(updatedMovieData));

      setUserReview('');
    } else {
      alert("Please write a review before submitting!");
    }
  };


  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div style={{margin:"30px"}}>
      <h1 className={style.h1} style={{margin:"20px",fontSize:"50px"}}>{movie.name}</h1>
      <div style={{display:"flex",
            columnGap:"80px",
            flexFlow:"row",
        }}>
            <Image
            src={movie.img} alt={movie.name}
            width={500}
            height={400}            
            />
            <div style={{width:"50%",
            }}>
                <button className={style.headerbutton} style={{width:"150px",border:"1px solid silver"}}>Add to Watchlist</button>
                <h2 style={{fontSize:"30px"}}><strong>Release year : </strong></h2>
                <p>{movie.year}</p>
                <h2 style={{fontSize:"30px"}}><strong>Directed by : </strong></h2>
                <p>{movie.author}</p>
                <h2 style={{fontSize:"30px"}}><strong>Description : </strong></h2>
                <p style={{overflow:'scroll', height:"175px", }}>{movie.description}</p>
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{width:"50%",}}>
            <h1 className={style.h1}>Reviews</h1>
            <div style={{height:"500px", overflow:"scroll"}}>
            {Object.entries(updatedMovie.review).map(([key, value])=>(
              <Review key={key} review={value} id={movie.id} name={''} img={movie.img} author={''} year={0} description={''}/>
            ))}
            </div>
          </div>
          <div style={{width:"50%",display:"flex", flexDirection:"column", rowGap:"30px"}}>
            <h1 className={style.h1}>Comment</h1>
            <form onSubmit={handleSubmitchange}>
            <div style={{width:"90%"}}>
            <textarea placeholder='type your review here' name='review' value={userReview} onChange={handleInputChange} style={{width:"100%", height:"100px", borderRadius:"1em 1em 1em 1em", overflowY:"scroll",fontSize:"18px", fontFamily:'cursive'}}/>
            <div style={{display:'flex', justifyContent:"flex-end"}}>
            <button type="submit" style={{width:"50px",backgroundColor:"grey",color:"white",borderRadius:"0.3em 0.3em 0.3em 0.3em", margin:"20px"}}>Post</button>
            </div>
            </div>
            </form>
          </div>
        </div>
    </div>
  );
};