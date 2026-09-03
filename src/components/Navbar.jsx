import logo from '../assets/H45-Logo-White-BG.jpg'

function Navbar() {
    return (
        <header>
            <img src={logo} alt="brand-logo"/>

            <button>menu</button>

            <nav>
                <a href="#">Home</a>
                <a href="#">Atelier</a>
                <a href="#">Contact</a>
            </nav>

            <button>Cart(0)</button>
        </header>
    )
}

export default Navbar