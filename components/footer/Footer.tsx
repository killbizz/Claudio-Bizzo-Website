const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <span className="text-muted copyright" >&copy; 2022 Gabriel Bizzo</span>
                    </div>
                    <div className="col-6">
                        <a href="https://github.com/killbizz/Online-Voting-React-FE">
                            <i className="fa fa-github fa-3x github-logo copyright" />
                        </a>
                    </div>    
                </div>
            </div>
        </footer>
    );
};

export default Footer