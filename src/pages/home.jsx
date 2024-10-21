import { useState } from 'react'
import Navbar from "./navbar";
import Demo from "./demo";
import './home.css';

function Home() {
    const [processed, setProcessed] = useState(false);

    return (
        <>
            <div className="container-fluid">
                <Navbar />
                <div className="row py-lg-4">
                    <div className="col-12">
                        <h1 className="fw-light px-lg-5">PongSensei</h1>
                        <p className="lead text-body-secondary px-lg-5">Revolutionizing table tennis video analysis.</p>
                    </div>
                </div>
                <div className="row py-lg-4">
                    <div className="col-2"/>
                    <div className="col-8">
                    <button className="btn btn-primary" onClick={() => setProcessed(!processed)}>Analyze the demo</button>
                    </div>
                    <div className="col-2"/>
                </div>
                <div className="row py-lg-4">
                    <div className="col-2" />
                    <div className="col-8">
                        <Demo processed={processed} />
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        </>
    );
};

export default Home;
