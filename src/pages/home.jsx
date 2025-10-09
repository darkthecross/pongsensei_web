import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import home_bg_video from '../assets/home/home_bg_video_20251008.mp4';
import clip_img from '../assets/home/clip_img.png';
import enhancement_img from '../assets/home/enhancement_img.png';
import stats_img from '../assets/home/strike_stats.png';
import placement_img from '../assets/home/placement_img.png';

import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid main bg-dark">
                <div className="background-video-container">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="background-video"
                    >
                        <source src={home_bg_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="background-video-mask">
                </div>

                <div className="title-content" data-bs-theme="dark">
                    <div className="row py-4">
                        <div className="col-12">
                            <h1 className="display-1"><i className="pong">Pong</i><i className="sensei">Sensei</i></h1>
                            <p className="lead text-body-secondary display-5">Professional table tennis video analysis for all.</p>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="row py-2 g-3">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card home-cards h-100">
                                <img src={clip_img} className="card-img-top" alt="Auto-clipping illustration" style={{ backgroundColor: '#505050' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Auto-clipping</h5>
                                    <p className="card-text">Automatically cut the video to only save frames in which the game is being played. Reduces video length by up to 80%, and save you the space and time for warming ups, picking up the balls etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card home-cards h-100">
                                <img src={enhancement_img} className="card-img-top" alt="Auto-enhancing illustration" style={{ backgroundColor: '#505050' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Auto-enhancing</h5>
                                    <p className="card-text">Automatically detects the best rallies in your game, and applies visual effects to show off your impactful strikes!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card home-cards h-100">
                                <img src={stats_img} className="card-img-top" alt="Strike skill statistics illustration" style={{ backgroundColor: '#505050' }} />
                                <div className="card-body">
                                    <h5 className="card-title">AI powered technique statistics</h5>
                                    <p className="card-text">Analyze the player's skills and provide detailed statistics on usage of different strikes, average strike speeds, forehands and backhands, and more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card home-cards h-100">
                                <img src={placement_img} className="card-img-top" alt="Ball placement statistics illustration" style={{ backgroundColor: '#505050' }} />
                                <div className="card-body">
                                    <h5 className="card-title">AI powered ball placement statistics</h5>
                                    <p className="card-text">Analyze the player's ball placement and provide detailed statistics on placement patterns, in guidance of shot selection and tactical improvements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content ml-5">
                    <div className="col-12">
                        <p className="alert alert-secondary">We are still under development, you may poke into the demos to see whatwe have today.<br />
                            <Link to="demo_1">demo_1</Link><br />
                            <Link to="demo_2">demo_2</Link><br />
                            <Link to="demo_3">demo_3</Link><br />
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
