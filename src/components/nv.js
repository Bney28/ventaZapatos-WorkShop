import Logo from '../img/logo.svg'
import Avatar from '../img/image-avatar.png'
import Burger from '../img/icon-menu.svg'
import { NavCarrito } from './navCarrito'

export const Nav = () => {
    return (
        <>
            <main className="main-container">
                <header className="header">

                    <div className="nav-burger">
                        <div className="nav-burger__burger">
                            <img src={Burger} alt="menu hamburguesa" className="nav-burger__burgerIcon" />
                            <img src={Logo} alt="texto logo" />
                        </div>
                        <div className='nav-burger__divBurger'>
                            <nav className="navbar">
                                <ul className="navbar__items">
                                    <li><a className="navbar_link" href="#"></a>Collections</li>
                                    <li><a className="navbar_link" href="#"></a>Men</li>
                                    <li><a className="navbar_link" href="#"></a>Women</li>
                                    <li><a className="navbar_link" href="#"></a>About</li>
                                    <li><a className="navbar_link" href="#"></a>Contact</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="nav-container">
                        <img src={Logo} alt="texto logo" className="nav-container__logoIcon" />
                        <nav className="navbar">
                            <ul className="navbar__items">
                                <li><a className="navbar_link" href="#"></a>Collections</li>
                                <li><a className="navbar_link" href="#"></a>Men</li>
                                <li><a className="navbar_link" href="#"></a>Women</li>
                                <li><a className="navbar_link" href="#"></a>About</li>
                                <li><a className="navbar_link" href="#"></a>Contact</li>
                            </ul>
                        </nav>
                        <NavCarrito/>
                        <div className="logos">
                            <img src={Avatar} className="logos__avatar" />
                        </div>
                    </div>
                </header>
                <hr />
            </main>

        </>

    )
}