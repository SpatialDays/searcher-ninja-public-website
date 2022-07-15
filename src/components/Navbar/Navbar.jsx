import './Navbar.scss'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />
            </div>
            <div className="navbar__items">
                <div className="navbar__item">
                    <a href="#">Home</a>
                </div>
                <div className="navbar__item">
                    <a href="#">About</a>
                </div>
                <div className="navbar__item">
                    <a href="#">Contact</a>
                </div>
            </div>
        </div> 
    )
}


export default Navbar;