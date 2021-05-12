import logo from '../../logo.png';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <img className="Header__logo" src={logo}/>
        </div>
    );
}

export default Header;