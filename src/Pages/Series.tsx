import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import seriesImg from '../assets/images/movie-2.png'

const Series = () => {
    const [series, setSeries] = useState<any>([]);
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async() => {
        let tempData = require('../sample.json');
        setSeries(tempData?.entries.filter((x: any) => x.programType == "series"));
    }
    return (
        <div>
            <Header subHeader={"Popular Movies"}/>
            <div className="movies-card-container">
                {
                    series.map((movie: any) => (
                        <div className="movies-card">
                            <div className="popular-card" style={{backgroundImage: `url(${seriesImg})`}}></div>
                            <div className="card-text">{movie.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Series