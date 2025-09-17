import Navbar from "./navbar";
import Footer from "./footer";

const Wiki = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    <div className="col-8 offset-2">
                        <h1>Wiki - Everything you want to know!</h1>
                    </div>
                    <div className="col-8 offset-2">
                        <p className="py-2 alert alert-secondary">Note: We aim to collaborate with table tennis clubs soon, so that individual players do not need to worry about hardware setups.</p>
                        <h2 className="fw-light py-2">Camera Parameters: </h2>
                        <p className="px-2">Resolution: &gt; 1080p</p>
                        <p className="px-2">Frame rate: 120fps</p>
                        <p className="px-2">Horizontal FOV: &gt; 100 degrees</p>
                    </div>
                    <div className="col-8 offset-2">
                        <h2 className="fw-light py-2">Environment Setup: </h2>
                        <p className="px-2">Camera placement: Center on the side of the table. Sorry no other angles are supported at the moment.</p>
                        <p className="px-2">Background color: Ideally solid dark color. Non-white static backgrounds are acceptable. May work poorly for white background / moving backgrounds.</p>
                    </div>
                    <div className="col-8 offset-2">
                        <h2 className="fw-light py-2">Accuracy</h2>
                        <p className="px-2">Ball placement accuracy: 0.1m </p>
                        <p className="px-2">Skill classification accuracy: 80%</p>
                        <p className="px-2">Technique understanding accuracy: 70%</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Wiki;
