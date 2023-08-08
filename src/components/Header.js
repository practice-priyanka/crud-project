import '../css/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navTo = useNavigate();
    const redirectToLogin = () => {
        navTo('/');
    }
    const handleLogOut = () => {
        localStorage.removeItem('email');
        navTo('/');
    }
    return (
        <>
            {/* <div className='header_div'> */}
            <nav className="navbar navbar-expand-lg header_div">
                <div className="container-fluid">
                    <img src="images/logo.png" className="img_div" onClick={redirectToLogin} alt="logo" />
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#sd" role="button" aria-haspopup="true" aria-expanded="false">Pool Emp Status Tracker</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#sds">In pool</a>
                                    <a className="dropdown-item" href="#sd">Assigned project</a>
                                    <a className="dropdown-item" href="#sd">Doing POC</a>
                                    <div className="dropdown-divider"></div>
                                    {/* <a className="dropdown-item" href="#d">Separated link</a> */}
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <img src='images/profile.jpeg' className='profile_img mx-2' alt="profile" />
                            <button className='btn btn-primary logout' onClick={handleLogOut}>Log Out</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* </div> */}
        </>
    )
};

export default Header;