// import player_stats from '../assets/demo_1/player_stats.png';
// import left_serve from '../assets/demo_1/left_serve.png';
// import right_serve from '../assets/demo_1/right_serve.png';
// import left_winning from '../assets/demo_1/left_winning.png';
// import right_winning from '../assets/demo_1/right_winning.png';
import Navbar from "./navbar";
import Footer from "./footer";

const Demo = ({ id }) => {
    var yt_link = ``;
    console.log(id);
    if (id === 1) {
        yt_link = `https://www.youtube.com/embed/bol3ocU27Vs?si=_uTPr-xFiwVR5np9`;
    } else if (id === 2) {
        yt_link = `https://www.youtube.com/embed/B_rhxbq6AUU?si=GzU_dHviYjBaiaxV`;
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
                        <img className="img-fluid" src={`src/assets/demo_${id}/player_stats.png`} alt="Player Stats" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Left player serve placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={`src/assets/demo_${id}/left_serve.png`} alt="Left player serve placements" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Right player serve placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={`src/assets/demo_${id}/right_serve.png`} alt="Right player serve placements" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Left player winning placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={`src/assets/demo_${id}/left_winning.png`} alt="Left player winning placements" />
                    </div>
                </div>
                <div className="row py-lg-4">
                    <h1 className="fw-light px-lg-5 main_content">Right player winning placements</h1>
                    <div className="col-8 offset-2">
                        <img className="img-fluid" src={`src/assets/demo_${id}/right_winning.png`} alt="Right player winning placements" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Demo;
