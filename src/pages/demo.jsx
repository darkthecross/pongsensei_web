import player_stats_1 from '../assets/demo_1/player_stats.png';
import left_serve_1 from '../assets/demo_1/left_serve.png';
import right_serve_1 from '../assets/demo_1/right_serve.png';
import left_winning_1 from '../assets/demo_1/left_winning.png';
import right_winning_1 from '../assets/demo_1/right_winning.png';

import player_stats_2 from '../assets/demo_2/player_stats.png';
import left_serve_2 from '../assets/demo_2/left_serve.png';
import right_serve_2 from '../assets/demo_2/right_serve.png';
import left_winning_2 from '../assets/demo_2/left_winning.png';
import right_winning_2 from '../assets/demo_2/right_winning.png';

import Navbar from "./navbar";
import Footer from "./footer";

const Demo = ({ id }) => {
    var yt_link = ``;
    var player_stats, left_serve, right_serve, left_winning, right_winning;
    console.log(id);
    if (id === 1) {
        yt_link = `https://www.youtube.com/embed/bol3ocU27Vs?si=_uTPr-xFiwVR5np9`;
        player_stats = player_stats_1;
        left_serve = left_serve_1;
        right_serve = right_serve_1;
        left_winning = left_winning_1;
        right_winning = right_winning_1;
    } else if (id === 2) {
        yt_link = `https://www.youtube.com/embed/B_rhxbq6AUU?si=GzU_dHviYjBaiaxV`;
        player_stats = player_stats_2;
        left_serve = left_serve_2;
        right_serve = right_serve_2;
        left_winning = left_winning_2;
        right_winning = right_winning_2;
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    <div className="col-8 offset-2">
                        <iframe width="960" height="540" src={yt_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
