import ReactPlayer from 'react-player/file';
import demo_original from '../assets/demo_original.mp4';
import demo_processed from '../assets/demo_processed.mp4';
import './main_video.css';

const MainVideo = ({ processed }) => {
    let original_style = processed ? "d-none" : "d-block";
    let demo_style = processed ? "d-block" : "d-none";
    return (
        <>
            <ReactPlayer className={`player player-orginal ${original_style}`} key={original_style} url={demo_original} playing={true} muted={true} loop={true} width="100%" height="auto" />
            <ReactPlayer className={`player player-demo ${demo_style}`} key={demo_style} url={demo_processed} playing={true} muted={true} loop={true} width="100%" height="auto" />
        </>
    );
};

export default MainVideo;
