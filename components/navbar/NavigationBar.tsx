import Link from 'next/link'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/dist/client/router';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    
    const router: NextRouter = useRouter();

    let session: boolean = true;

    return (
        <>
            <Navbar className="color-nav" collapseOnSelect expand="lg" variant="light">
                <Container>
                <Navbar.Brand>
                    <Link href="/">
                        <a className="nav-link active" aria-current="page">
                            <Image id="VotingOnlineWebApplication" src="/images/voting-box.png" alt="Online Voting Web Application Logo" width="60" height="60" />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-md-center" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Item>
                    <Link href="/">
                        <a className="nav-link">Homepage</a>
                    </Link>
                    </Nav.Item>
                    {session &&
                    <Nav.Item>
                        <Link href="/user-dashboard">
                            <a className="nav-link">Personal Dashboard</a>
                        </Link>
                    </Nav.Item>
                    }
                    {session &&
                    <Nav.Item>
                        <Link href="/admin-dashboard">
                            <a className="nav-link">Admin Dashboard</a>
                        </Link>
                    </Nav.Item>
                    }
                    </Nav>
                    {session && !(router.pathname === "/login" || router.pathname === "/sign-up") &&
                    <ul className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <Link href="/login">
                            <a className="nav-link">Login</a>
                            </Link>
                        </div>
                    </ul>
                    }
                    {session && !(router.pathname === "/login" || router.pathname === "/sign-up") &&
                    <ul className="navbar-nav">
                        <div className="nav-item text-nowrap mt-3">
                            <p className="nav-link active">Hello</p>
                        </div>
                        <div className="nav-item text-nowrap mt-3">
                            <a className="nav-link" href="" >Logout </a>
                        </div>
                    </ul>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;