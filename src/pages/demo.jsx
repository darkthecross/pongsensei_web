import player_stats from '../assets/player_stats.png';
import left_serve from '../assets/left_serve.png';
import right_serve from '../assets/right_serve.png';
import left_winning from '../assets/left_winning.png';
import right_winning from '../assets/right_winning.png';
import Navbar from "./navbar";
import Footer from "./footer";

const Demo = ({ processed }) => {
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    <div className="col-8 offset-2">
                        <iframe width="960" height="540" src="https://www.youtube.com/embed/bol3ocU27Vs?si=_uTPr-xFiwVR5np9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Player Stats</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={player_stats} alt="Player Stats" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Left player serve placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={left_serve} alt="Left player serve placements" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Right player serve placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={right_serve} alt="Right player serve placements" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Left player winning placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={left_winning} alt="Left player winning placements" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Right player winning placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={right_winning} alt="Right player winning placements" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Demo;
