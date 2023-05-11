import {Link} from "react-router-dom";

const Header = () => {

    return (
            <nav className="py-2 bg-dark text-white sticky-top">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto fw-bold my-0 justify-content-center text-small">
                            <li>
                                <Link to={"/"} className="nav-link text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={"/best-combination"} className="nav-link text-white">
                                    Best Combination
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;