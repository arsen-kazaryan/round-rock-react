import { Button } from '../Button/Button'
import './Footer.css'

 const  Footer =()=>{
  return(
    <footer className="footer">
      <h2 className="footer__title">Contact Us</h2>
      <div className="container footer__container">
        <div className='footer__input-container'>
          <input type="email" name="mail" id="mail"  placeholder='Your Email' className='footer__input'/>
          <input type="tel" name='tel' id='tel' placeholder='Type your Number' className='footer__input'/>
          <input type="text" name='addres' placeholder='Type your addres'className='footer__input'/>
          <Button  name='Sumbit'  />
        </div>
        <div className="footer__contacts">
          <ul>
            <li><a className='footer__link footer__link-mail' href="#!">test@gmail.com</a></li>
            <li><a className='footer__link footer__link-tel' href="tel:+799999999">(303) 555-0105</a></li>
            <li><a className='footer__link footer__link-ad' href='https://maps.app.goo.gl/idjHoDpfc2W2rtNHA' >2715 Ash Dr. San Jose, South Dakota 83475</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__end">
        <p>®By Arsen Kazaryan</p>
      </div>
    </footer>
  )
}
export default Footer