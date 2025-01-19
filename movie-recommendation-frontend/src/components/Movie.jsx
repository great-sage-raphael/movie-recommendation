import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Movie = ({search_query}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if(search_query){
            axios.get(`http://localhost:3000/api/movies?search=${search_query}`)
        .then((response) => {
          setMovies(response.data);
          console.log(response.data); 
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
        }
        else{
            axios.get(`http://localhost:3000/api/movies?search=dune`)
        .then((response) => {
          setMovies(response.data);
          console.log(response.data); 
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });

        }
        
        
    }, [search_query]);
  return (
    <>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-transparent dark:border-gray-700 flex flex-col">
             
              <a href="#" className="flex-shrink-0">
                <img
                  className="rounded-t-lg w-full object-cover"
                  src={`${movie?.Poster}`}
                  alt="movie poster"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </a>

              
              <div className="flex flex-col p-5 flex-grow">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {movie?.Title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                  {movie?.Year}
                  <br />
                  {movie?.Type}
                </p>

               
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-slate-500 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-offset-white dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 mt-auto"
                >
                  Rate it
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  )
}

export default Movie