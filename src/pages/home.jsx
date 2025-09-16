import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import home_bg_video from '../assets/home/home_bg_video_20250915.mp4';
import clip_img from '../assets/home/clip_img.png';
import enhancement_img from '../assets/home/enhancement_img.png';
import stats_img from '../assets/demo_1/player_stats.png';
import placement_img from '../assets/demo_2/left_serve.png';

import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid main bg-dark" style={{ overflow: 'hidden', minHeight: '100vh' }}>
                <div className="background-video-container">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
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
                            <h1 className="display-1">PongSensei</h1>
                            <p className="lead text-body-secondary display-5">Professional table tennis video analysis for all.</p>
                        </div>
                    </div>
                </div>
                <div className="main-content ml-5">
                    <div className="row py-2">
                        <div className="col-7">
                            <h2 className="py-2">Auto-clipping</h2>
                            <p className="py-2">Automatically cut the video to only save frames in which the game is being played. Reduces video length by up to 80%, and save you the space and time for warming ups, picking up the balls etc.</p>
                        </div>
                        <div className="col-5">
                            <img className="img-fluid" src={clip_img} alt="Auto-clipping illustration" />
                        </div>
                    </div>

                    <div className="row py-2">
                        <div className="col-5">
                            <img className="img-fluid" src={enhancement_img} alt="Auto-clipping illustration" />
                        </div>
                        <div className="col-7">
                            <h2 className="py-2">Auto-enhancing</h2>
                            <p className="py-2">Automatically detects the best rallies in your game, and applies visual effects to show off your impactful strikes!</p>
                        </div>
                    </div>

                    <div className="row py-2">
                        <div className="col-7">
                            <h2 className="py-2">AI powered technique statistics</h2>
                            <p className="py-2">Analyze the player's technique and provide detailed statistics on usage of different techniques, average strike speeds, forehands and backhands, and more.</p>
                        </div>
                        <div className="col-5">
                            <img className="img-fluid" src={stats_img} alt="Auto-clipping illustration" />
                        </div>
                    </div>

                    <div className="row py-2">
                        <div className="col-5">
                            <img className="img-fluid" src={placement_img} alt="Auto-clipping illustration" />
                        </div>
                        <div className="col-7">
                            <h2 className="py-2">Ball placement statistics</h2>
                            <p className="py-2">Detect the ball's placement to guide you how to win the game at the strategical level.</p>
                        </div>
                    </div>

                </div>
                <div className="main-content ml-5" data-bs-theme="dark">
                    <div className="row py-2">
                        <div className="col-7">
                            <h2 className="py-2 display-5">Demo</h2>
                            <p className="py-2">We are still under development, you may poke into the demo to see whatwe have today.</p>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-2" />
                        <div className="col-8">
                            <Link to="demo">
                                <button className="btn btn-primary">demo</button>
                            </Link>
                        </div>
                        <div className="col-2" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
