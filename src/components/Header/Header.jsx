import { Button } from "../Button/Button"
import "./Header.css"
const Header = () => {
  return (
    <header className="header" >
      <div className="container header__container">
        <a href="#" className="header__logo">Round Rock <br /><span>Yard Maintenance</span></a>
        <a className="header__link">Lorem Ipsum is simply dummy</a>
        <h1 className="header__title">Lorem ipsum <br />Lorem</h1>
        <Button name='Help Me' className="Header__btn"/>
      </div>
    </header>
  )
} 

export default Header