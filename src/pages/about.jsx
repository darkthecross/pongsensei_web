import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid main">
                <div className="row py-lg-4">
                    <div className="col-12">
                        <h1>About</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
