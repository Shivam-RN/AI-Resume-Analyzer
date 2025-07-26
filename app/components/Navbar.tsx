import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">ResumeMentor</p>
            </Link>
            <div className="flex gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
                <Link to="/auth" className="primary-button w-fit">
                    Logout
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
