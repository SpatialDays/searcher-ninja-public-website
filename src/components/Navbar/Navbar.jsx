import './Navbar.scss'

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <img src="./Logo.png"/>
                </div>
                <div className="navbar__items">
                    <div className="navbar__item">
                        <a href="#">Pricing</a>
                    </div>
                    <div className="navbar__item">
                        <a href="#">Dojo</a>
                    </div>
                    <div className="navbar__item">
                        <a href="#">About</a>
                    </div>
                </div>
            </div> 
        </>
    )
}


export default Navbar;