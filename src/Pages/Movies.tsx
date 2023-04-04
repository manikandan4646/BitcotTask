import { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import movieImg from '../assets/images/movie-1.png'

const Movies = () => { 
    const [movies, setMovies] = useState<any>([]);
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async() => {
        let tempData = require('../sample.json');
        setMovies(tempData?.entries.filter((x: any) => x.programType == "movie"));
    }
    return (
        <div>
            <Header subHeader={"Popular Movies"}/>
            <div className="movies-card-container">
                {
                    movies.map((movie: any, index: any) => (
                        <div className="movies-card" key={index + movie.title}>
                            <div className="popular-card" style={{backgroundImage: `url(${movieImg})`}}></div>
                            <div className="card-text">{movie.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies