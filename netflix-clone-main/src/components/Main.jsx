import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../Requests";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);

  const truncateStr =(str,num) => {
    if(str?.length>num){
        return str.slice(0,num) +'...'
    }
    else{
        return str
    }
  }
  return (
    <div className="w-full h-[600px] text-white  ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img className="w-full h-full  object-cover" src={ `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={`${movie?.title}`} />
        <div className="absolute top-[20%] ml-6 p-4 w-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{movie?.title}</h2>
            <div className="mb-4">
                <button className="text-xl border px-5 py-2 bg-gray-300 border-gray-300  text-black font-normal mr-4">Play</button>
                <button className="border border-gray-300 px-5 py-2 font-normal">Watch later</button>

            </div>

            <p className="text-white text-gray-500">Released:{movie?.release_date}</p>

            <p className="w-full md:[70%] lg:[50%] xl:[30%] ">{truncateStr(movie?.overview,150)}</p>



        </div>
      </div>
    </div>
  );
}

export default Main;
