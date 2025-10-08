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

import player_stats_3 from '../assets/demo_3/player_stats.png';
import left_serve_3 from '../assets/demo_3/left_serve.png';
import right_serve_3 from '../assets/demo_3/right_serve.png';
import left_winning_3 from '../assets/demo_3/left_winning.png';
import right_winning_3 from '../assets/demo_3/right_winning.png';

import Navbar from "./navbar";
import Footer from "./footer";

import './demo.css';

const Demo = ({ id }) => {
    var yt_link = ``;
    var player_stats, left_serve, right_serve, left_winning, right_winning, highlight_video;
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
    } else if (id === 3) {
        yt_link = `https://www.youtube.com/embed/0MeQ5U92W1w?si=Pnq_0Jz1S1yiZbZW`;
        player_stats = player_stats_3;
        left_serve = left_serve_3;
        right_serve = right_serve_3;
        left_winning = left_winning_3;
        right_winning = right_winning_3;
        highlight_video = `https://www.youtube.com/embed/madjriBCKcw?si=5xC5zlQL0LhGn_6l`;
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    <div className="col-10 offset-1">
                        <div className="ratio ratio-16x9">
                            <iframe src={yt_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="row py-lg-4">
                    <div className="col-10 offset-1">
                        <div className="card demo-cards h-100">
                            <img src={player_stats} className="card-img-top" alt="Player Stats" />
                            <div className="card-body">
                                <h5 className="card-title">Player Stats</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 offset-1">
                        <div className="card demo-cards h-100">
                            <img src={left_serve} className="card-img-top" alt="Left Serve Placements" />
                            <div className="card-body">
                                <h5 className="card-title">Left Serve Placements</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 offset-1">
                        <div className="card demo-cards h-100">
                            <img src={right_serve} className="card-img-top" alt="Right Serve Placements" />
                            <div className="card-body">
                                <h5 className="card-title">Right Serve Placements</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 offset-1">
                        <div className="card demo-cards h-100">
                            <img src={left_winning} className="card-img-top" alt="Left Winning Placements" />
                            <div className="card-body">
                                <h5 className="card-title">Left Winning Placements</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 offset-1">
                        <div className="card demo-cards h-100">
                            <img src={right_winning} className="card-img-top" alt="Right Winning Placements" />
                            <div className="card-body">
                                <h5 className="card-title">Right Winning Placements</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {highlight_video && <div className="row py-lg-4">
                    <div className="col-10 offset-1">
                        <div className="ratio ratio-16x9">
                            <iframe src={highlight_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>}
                {id === 3 &&
                    <div className="row py-lg-4">
                        <div className="col-10 offset-1">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Statistic</th>
                                        <th scope="col">Left Player</th>
                                        <th scope="col">Right Player</th>
                                        <th scope="col">Key Finding</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Total Wins</td>
                                        <td>7</td>
                                        <td>11</td>
                                        <td>Right Player Dominates (11-7).</td>
                                    </tr>
                                    <tr>
                                        <td>Serve Wins (SR%)</td>
                                        <td>2 wins (22%)</td>
                                        <td>6 wins (67%)</td>
                                        <td>Right's serve is a major weapon.</td>
                                    </tr>
                                    <tr>
                                        <td>Receive Wins (Rtn%)</td>
                                        <td>5 wins (56%)</td>
                                        <td>5 wins (56%)</td>
                                        <td>Both players are excellent receivers.</td>
                                    </tr>
                                    <tr>
                                        <td>Direct Point Wins (Aces/Errors)</td>
                                        <td>1 (Segment 13)</td>
                                        <td>5 (Segments 2, 7, 8, 15, 16)</td>
                                        <td>Right relies on fast, well-placed serves.</td>
                                    </tr>
                                    <tr>
                                        <td>Rally Wins (Shots ≥2)</td>
                                        <td>6 wins</td>
                                        <td>6 wins</td>
                                        <td>Equal skill in sustained rallies.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>}
            </div>
            <Footer />
        </>
    );
};

export default Demo;
