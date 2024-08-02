import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { MdChevronLeft,MdChevronRight } from 'react-icons/md'

import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  const slideLeft =  ()=>{
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  return (
    <>
      <h2 className="text-white py-4 px-4 text-xl font-bold group ">{title} </h2>
      <div className="relative group flex items-center">
      <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div id={'slider' + rowID } className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth  ">
          {movies.map((movie, id) => (
             <Movie movie={movie} key={id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
