const Header = () => {
    return(
            <header>
                <div className="bar">
                    <span className="contact"><img src="./assets/telephone.png" alt="phone" /> 1337 1337 1337</span>
                    <span className="contact"><img src="./assets/flag.png" alt="flag" />Try another Castle</span>
                </div>
                <div className="logo">
                    <img src="./assets/logo.png" alt="logo" className="logo__img" />
                </div>
            </header>
    )
}

export default Header