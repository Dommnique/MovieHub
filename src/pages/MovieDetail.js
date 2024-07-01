import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackUp from '../asset/Backup.jpg';
import { useTitle } from "../hooks";

export const MovieDetail = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : BackUp;

    useTitle(`${movie.title}`);

    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=85b4547cee9ac782e942bc6fab53151c`);
            const data = await response.json();
            setMovie(data);
        }
        fetchMovie();
    }, [params.id])

    return (
        <main>
            <section className="py-5 flex justify-around flex-wrap">
                <div className="max-w-sm">
                    <img className="rounded" src={image} alt={movie.title} />
                </div>

                <div className="my-4 text-lg dark:text-white text-bold text-slate-800 max-w-2xl ml-8">
                    <h1 className="my-3 text-4xl font-bold">{movie.title}</h1>
                    <p className="my-2">{movie.overview}</p>

                    {movie.genres ? (
                        <p className="py-4">
                            {movie.genres.map((genre) => (
                                <span className="my-4 mr-2 rounded py-1 px-2 border border-slate-400" key={genre.id}>{genre.name}</span>
                            )
                            )}
                        </p>
                    ) : ""}

                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="text-sm text-gray-900 dark:text-white">{movie.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <a href="#" className="text-sm font-medium text-gray-900 dark:text-white">{movie.vote_count}</a>
                    </div>

                    <div className="my-3">
                        <p className="font-bold">Release Date:
                        <span className="ml-2 font-light">{movie.release_date}</span>
                        </p>
                    </div>

                    <div className="my-3">
                        <p className="font-bold">Budget:
                        <span className="ml-2 font-light">{movie.budget}</span>
                        </p>
                    </div>

                    <div className="my-3">
                        <p className="font-bold">Runtime:
                        <span className="ml-2 font-light">{movie.runtime} mins.</span>
                        </p>
                    </div>

                    <div className="my-3">
                        <p className="font-bold">Revenue:
                        <span className="ml-2 font-light">{movie.revenue}</span>
                        </p>
                    </div>

                    <div className="my-3">
                        <p className="font-bold">IMDB Code:
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="ml-2 font-light">{movie.imdb_id}</a>
                        </p>
                    </div>

                </div>
            </section>
        </main>
    )
}
