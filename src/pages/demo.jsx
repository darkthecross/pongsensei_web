import Navbar from "./navbar";
import MainVideo from "./main_video";

import Navbar from "./navbar";
import Footer from "./footer";

const Demo = ({ processed }) => {
    let original_style = processed ? "d-none" : "d-block";
    let demo_style = processed ? "d-block" : "d-none";
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    <div className="col-12">
                        <ReactPlayer className={`player player-orginal ${original_style}`} key={original_style} url={demo_original} playing={true} muted={true} loop={true} width="100%" height="auto" />
                    </div>
                    <div className="col-12">
                        <ReactPlayer className={`player player-demo ${demo_style}`} key={demo_style} url={demo_processed} playing={true} muted={true} loop={true} width="100%" height="auto" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Demo;
