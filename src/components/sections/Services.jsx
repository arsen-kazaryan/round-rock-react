import './Services.css'
import img1 from "../../assets/images/Services-post1.png";
import img2 from "../../assets/images/Services-post2.png";
import img3 from "../../assets/images/Services-post3.png";
import { Button } from '../Button/Button';



const Services = () => {
  
  return (
      <section className="services">
      <div className="container services__container">
        <h2 className="services__title">Services</h2>
        <div className="services__item">
          <div className="servisec__poster">
            <div className="services__wrapper-img">
              <img src={img1} className="services__img" />
            </div>
            <div className="servisec__wrapper-desc">
            <h4 className="services__item-title">Lorem Ipsum</h4>
            <p className="services__item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
          </div>
          <div className="servisec__poster">
            <div className="services__wrapper-img">
              <img src={img2} className="services__img" />
            </div>
            <div className="servisec__wrapper-desc">
            <h4 className="services__item-title">Lorem Ipsum</h4>
            <p className="services__item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
          </div>
          <div className="servisec__poster">
            <div className="services__wrapper-img">
              <img src={img3} className="services__img" />
            </div>
            <div className="servisec__wrapper-desc">
            <h4 className="services__item-title">Lorem Ipsum</h4>
            <p className="services__item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
          </div>
        </div>
        <Button name='Help me'/>
      </div>
      <h2 className="about-us__title" style={{padding: '70px'}}>About Us</h2>
    </section>
  )
} 
export default Services 