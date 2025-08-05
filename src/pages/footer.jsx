import './footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import swanpng from "../assets/swan.png";

function Footer() {
    return (
        <>
            <div className="pt-4 my-md-5 pt-md-5 border-top container-fluid">
                <div className="row">
                    <div className="col col-md">
                        <img className="mb-2" src="/assets/favicon.png" alt="" width="24" />
                        <h4>PongSensei</h4>
                        <small className="d-block mb-3 text-muted">&copy; 2024</small>
                    </div>
                    <div className="col col-md">
                        <h5>Contacts</h5>
                        <ul className="list-unstyled text-small"><li className="text-muted"> <i className="bi bi-envelope"></i> <a className="u-email text-muted" href="mailto:info@pongsensei.com">info@pongsensei.com</a></li></ul>
                    </div>
                    <div className="col col-md">
                        <h5>Links</h5>
                        <ul className="list-unstyled text-small">
                            <li>Hosted with ❤ by : <a className="text-muted" target="_blank" href="http://github.com"> <i className="bi bi-github"></i> Github</a></li>
                            <li>Data Collected at: <a className="text-muted" target="_blank" href="http://www.swanpp.com"> <img src={swanpng} width="19" height="19" /> Swan Ping Pong</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
