import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid main pt-4">
                <div className="row py-lg-4">
                    <div className="col-12">
                        <h1 className="fw-light px-lg-5 main_content">PongSensei</h1>
                        <p className="lead text-body-secondary px-lg-5 main_content">Affordable professional table tennis video analysis for all.</p>
                    </div>
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <Link to="demo_1">
                            <button className="btn btn-primary">demo 1</button>
                        </Link>
                    </div>
                    <div className="col-2" />
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <Link to="demo_2">
                            <button className="btn btn-primary">demo 2</button>
                        </Link>
                    </div>
                    <div className="col-2" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
