import Link from 'next/link'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/dist/client/router';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    
    const router: NextRouter = useRouter();

    return (
        <>
            <Navbar className="color-nav" collapseOnSelect expand="lg" variant="light">
                <Container>
                <Navbar.Brand>
                    <Link href="/">
                        <a className="nav-link active" aria-current="page">
                            <Image id="VotingOnlineWebApplication" src="/voting-box.png" alt="Online Voting Web Application Logo" width="60" height="60" />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center pr-5 mr-5" id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Item className=" mx-4">
                            <Link href="/">
                                <a className="nav-link">Homepage</a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className=" mx-4">
                            <Link href="/user-dashboard">
                                <a className="nav-link">Galleria</a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className=" mx-4">
                            <Link href="/admin-dashboard">
                                <a className="nav-link">Chi Sono</a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className=" mx-4">
                            <Link href="/admin-dashboard">
                                <a className="nav-link">Contattami</a>
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