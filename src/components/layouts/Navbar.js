

const Navbar = () => {


    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-right">
                            <p className="site">Bigbyte.com</p>
                            <p className="num">Call: +01 123 456 7890</p>
                            <ul className="fh5co-social">
                                <li><a href="#"><i className="icon-facebook2"></i></a></li>
                                <li><a href="#"><i className="icon-twitter2"></i></a></li>
                                <li><a href="#"><i className="icon-dribbble2"></i></a></li>
                                <li><a href="#"><i className="icon-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2">
                            <div id="fh5co-logo">
                                <a href="index.html">
                                    <img src="images/logo.png" alt="CBS Group of Institutions Logo" style={{ width: '150px' }} />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="courses.html">Courses</a></li>
                                <li><a href="teacher.html">Teacher</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li className="has-dropdown">
                                    <a href="blog.html">Blog</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">API</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                                <li className="btn-cta"><a href="#"><span>Login</span></a></li>
                                <li className="btn-cta"><a href="#"><span>Curriculum Activity</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
