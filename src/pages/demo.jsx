import Navbar from "./navbar";
import MainVideo from "./main_video";

const Demo = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <h3> Updated demo on 2025/08/04: </h3>
                    </div>
                    <div className="col-2" />
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RU4qSbICbzs?si=rIhyr4KNmlF0WyLr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="col-2" />
                </div>                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <h3> Old demo from 2024/10/23: </h3>
                    </div>
                    <div className="col-2" />
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <MainVideo className="main_content" />
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        </>
    );
};

export default Demo;
