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
                        <MainVideo className="main_content" />
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        </>
    );
};

export default Demo;
