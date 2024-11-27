import Navbar from "./navbar";
import Footer from "./footer";
import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row py-lg-4">
                    <div className="col-12">
                        <h1 className="fw-light px-lg-5 main_content">PongSensei</h1>
                        <p className="lead text-body-secondary px-lg-5 main_content">Revolutionizing table tennis video analysis.</p>
                    </div>
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-2" />
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-2" />
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-2" />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
