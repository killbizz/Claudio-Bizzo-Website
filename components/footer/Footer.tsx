const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <span className="copyright" >&copy; 2022 Gabriel Bizzo</span>
                    </div>
                    <div className="col-3">
                        <a href="https://www.facebook.com/profile.php?id=100009326235389">
                            <i className="fa fa-facebook fa-2x github-logo copyright" />
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="https://www.instagram.com/claudiobizzo/">
                            <i className="fa fa-instagram fa-2x github-logo copyright" />
                        </a>
                    </div>   
                </div>
            </div>
        </footer>
    );
};

export default Footer