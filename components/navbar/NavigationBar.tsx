import Link from 'next/link'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/dist/client/router';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    
    const router: NextRouter = useRouter();

    return (
        <>
            <Navbar className="nav color-nav" collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='mr-5 pt-2'>
                        <Link href="/">
                            <a className="nav-link active" aria-current="page">
                                <Image id="ClaudioBizzoImg" src="/logo_full_2.png" alt="Claudio Bizzo Website Logo" width="52" height="52" />
                            </a>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100090776381452" aria-label="Facebook Link">
                                <i className="fa fa-facebook-square fa-2x logos" />
                            </a>
                        </div>  
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <div>
                            <a href="https://www.pinterest.it/claudiobizzo58" aria-label="Pinterest Link">
                                <i className="fa fa-pinterest fa-2x logos" />
                            </a>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                        <Nav className="ml-auto d-flex justify-content-end">
                            <Nav.Item className=" mx-4">
                                <Link href="/">
                                    <a className={"nav-link custom-link" 
                                        + (router.pathname === "/" ? " active" : "")}>HOMEPAGE</a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className=" mx-4">
                                <Link href="/artworks">
                                    <a className={"nav-link custom-link" 
                                        + (router.pathname === "/artworks" ? " active" : "")}>GALLERIA</a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className=" mx-4">
                                <Link href="/events">
                                    <a className={"nav-link custom-link" 
                                        + (router.pathname === "/events" ? " active" : "")}>EVENTI</a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className=" mx-4">
                                <Link href="/about">
                                    <a className={"nav-link custom-link" 
                                        + (router.pathname === "/about" ? " active" : "")}>CHI SONO</a>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className=" mx-4">
                                <Link href="/contact">
                                    <a className={"nav-link custom-link" 
                                        + (router.pathname === "/contact" ? " active" : "")}>CONTATTAMI</a>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;