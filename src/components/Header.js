import '../css/Header.css'
const Header = () => {
    return (
        <>
            {/* <div className='header_div'> */}
                <nav class="navbar navbar-expand-lg navbar-light" style={{background: '#e3f2fd'}}>
                    <div className="container-fluid">
                        <img src="images/logo.png" className="img_div" alt="logo" />
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#sd" role="button" aria-haspopup="true" aria-expanded="false">Pool Emp Status Tracker</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#sds">Action</a>
                                        <a className="dropdown-item" href="#sd">Another action</a>
                                        <a className="dropdown-item" href="#sd">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#d">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <img src='images/profile.jpeg' className='profile_img mx-4' alt="profile" />
                                <button className='btn btn-primary logout'>Log Out</button>
                            </form>
                        </div>
                    </div>
                </nav>
            {/* </div> */}
        </>
    )
};

export default Header;