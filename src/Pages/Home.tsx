import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import placeHolder from '../assets/images/placeholder.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <Header subHeader={"Popular Titles"}/>
            <div className="card-holder">
                <div style={{margin: "0 20px"}} onClick={() => navigate('/series')}>
                    <div className="popular-card">SERIES</div>
                    <div>Popular Series</div>
                </div>
                <div style={{margin: "0 20px"}} onClick={() => navigate('/movies')}>
                    <div className="popular-card">MOVIES</div>
                    <div>Popular Movies</div>
                </div>
            </div>
        </div>
    )
}

export default Home;