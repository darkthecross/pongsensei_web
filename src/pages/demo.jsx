import ReactPlayer from 'react-player/file';
import demo_original from '../assets/demo_original.mp4';
import demo_processed from '../assets/demo_processed.mp4';

import Navbar from "./navbar";
import Footer from "./footer";

const Demo = ({ processed }) => {
    // let original_style = processed ? "d-none" : "d-block";
    // let demo_style = processed ? "d-block" : "d-none";
    let original_style = "d-none";
    let demo_style = "d-block";
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    {/* <div className="col-12">
                        <ReactPlayer className={`player player-orginal ${original_style}`} key={original_style} url={demo_original} playing={true} muted={true} loop={true} width="100%" height="auto" />
                    </div>
                    <div className="col-12">
                        <ReactPlayer className={`player player-demo ${demo_style}`} key={demo_style} url={demo_processed} playing={true} muted={true} loop={true} width="100%" height="auto" />
                    </div> */}
                    <div className="col-12">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RU4qSbICbzs?si=oXdmRsbjgJGG7qXR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Demo;
