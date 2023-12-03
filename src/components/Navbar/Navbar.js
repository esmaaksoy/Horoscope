import logo from "../../img/logo.png"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" />
      <ul>
        <li>HOROSCOPE</li>
        <li>DAILY</li>
        <li>TAROT</li>
        <li>ARTICLE</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
