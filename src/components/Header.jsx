import logo from "../assets/Saltedcreek-Marketplace.svg";
import shoppingBag from "../assets/shopping-bag.svg";
import user from "../assets/user-check.svg";

function Header() {
   return (
      <header className="header">
         <img className="logo" src={logo} alt="logo" />{" "}
         <ul className="nav__lists">
            <li className="nav__list">watches</li>
            <li className="nav__list">straps</li>
            <li className="nav__list">Glasses</li>
            <li className="nav__list">about us</li>
         </ul>
         <ul className="cta__lists">
            <li>
               <input className="cta__search" type="text" placeholder="search" />
            </li>
            <li>
               <img className="cta__image" src={shoppingBag} alt="shopping bag icon" />
            </li>
            <li>
               <img className="cta__image" src={user} alt="user icon" />
            </li>
         </ul>
      </header>
   );
}

export default Header;
