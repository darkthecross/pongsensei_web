import Navbar from "./navbar";
import Footer from "./footer";
import {Link} from "react-router-dom";
import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid main pt-4">
                <div className="row py-lg-4">
                    <div className="col-12">
                        <h1 className="fw-light px-lg-5">PongSensei</h1>
                        <p className="lead text-body-secondary px-lg-5">Revolutionizing table tennis video analysis.</p>
                    </div>
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <Link to="demo">
                            <button className="btn btn-primary">Show me the demo</button>
                        </Link>
                    </div>
                    <div className="col-2" />
                </div>
                {/* <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <Demo processed={processed} />
                    </div>
                    <div className="col-2" />
                </div> */}
            </div>
            <Footer />
        </>
    );
};

export default Home;
