import './footer.css';

function Footer() {
    return (
        <>
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <img className="mb-2" src="/assets/favicon.png" alt="" width="24" />
                        <h4>PongSensei</h4>
                        <small className="d-block mb-3 text-muted">&copy; 2024</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Contacts</h5>
                        <ul className="list-unstyled text-small"><li className="text-muted"> <i className="fas fa-envelope"></i> <a className="u-email text-muted" href="mailto:info@pongsensei.com">info@pongsensei.com</a></li></ul>
                    </div>
                    <div className="col-18 col-md">
                        <h5>Links</h5>
                        <ul className="list-unstyled text-small">
                            <li>This site was made with: <a className="text-muted" target="_blank" href="http://jekyllrb.com"><i className="fas fa-vial"></i>Jekyll</a></li>
                            <li>Hosted with ❤ by : <a className="text-muted" target="_blank" href="http://github.com"> <i className="fab fa-github-square"></i> Github</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
