import Logo from '../img/logo.svg'
import Avatar from '../img/image-avatar.png'
import Burger from '../img/icon-menu.svg'
import { NavCarrito } from './navCarrito'
import { AppiCardMen } from './Filter'
import { AppiCardWomen } from './Filter'

export const Nav = () => {
    return (
        <>
            <main className="main-container">
                <header className="header">

                    <div className="nav-container">
                        <img src={Logo} alt="texto logo" className="nav-container__logoIcon" />

                        <input type="checkbox" id='check' />
                        <label for='check' className='check__checkBtn'>
                            <i className="burgerIcon"><img src={Burger} alt="menu hamburguesa" /></i>
                        </label>

                        <ul className="navbar">
                            <li><a className="navbar__link" href="#" >Collections</a></li>
                            <li><a className="navbar__link" href="#" onClick={() => AppiCardMen()}>Men</a></li>
                            <li><a className="navbar__link" href="#" onClick={() => AppiCardWomen()}>Women</a></li>
                            <li><a className="navbar__link" href="#">About</a></li>
                            <li><a className="navbar__link" href="#">Contact</a></li>
                        </ul>

                        <div className="logos">
                            <NavCarrito className="logos__cart" />
                            <img src={Avatar} className="logos__avatar" />
                        </div>
                    </div>
                </header>
                <hr />
            </main>

        </>

    )
}