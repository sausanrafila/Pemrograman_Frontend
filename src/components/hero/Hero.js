/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero(){
    //membuat state movie
    const [movie,setMovie]  = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre)=> genre.name).join(", ");
    const trailer =movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

//mengambil data trending
    
    //mendapatkan 1 data dari trending movie
    async function getTrendingMovie(){
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios (URL);
        return response.data.results[0];
    }

    // membuat fungsi untuk mendapatkan detail movie
    async function getDetailMovie(){
        //ambil id dari trending movie
        const trendingMovie = await getTrendingMovie();
        const id = trendingMovie.id;

        //fetch detail movie by id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await axios (URL);
        

        setMovie(response.data);
    }


    useEffect(getDetailMovie ,[]);
    // console.log(movie);

    

    return(
        <StyledHero>
            <section>
                <div>
                    <h2>{movie.title}</h2>
                    <h4>{genres}</h4>
                    <p>{movie.overview}</p>
                    {/* <button className={styles.hero__button}>Watch</button> */}
                    <Button variant='secondary' size="md" as ="a" href={trailer} target="_blank">Watch</Button>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="placeholder" />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero;