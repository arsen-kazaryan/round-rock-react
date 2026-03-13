import './Testymonials.css'
import portrait from "../../assets/images/Testymonials-portreit.png"
import star from "../../assets/icons/star.svg"

const Testymonials =()=>{
  return (
    <section className="testymonials">
      <div className="container testymonials__container">
      <h2 className="testymonials__title">Testymonials</h2>
      <div className='testymonials__content'>
        <div className="testymonials__item">
          <div className="testymonials__img-wrapper">
            <img src={portrait}  className='testymonials__portrait'/>
          </div>
          <div className="testymonials__desc">
            <h4 className="testymonials__desc-title">Courtney Henry</h4>
            <p className='testymonials__p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className="testymonials__stars-container">
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
            </div>
            </div>
          </div>
        <div className="testymonials__item">
          <div className="testymonials__img-wrapper">
            <img src={portrait}  className='testymonials__portrait'/>
          </div>
          <div className="testymonials__desc">
            <h4 className="testymonials__desc-title">Courtney Henry</h4>
            <p className='testymonials__p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className="testymonials__stars-container">
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
            </div>
            </div>
          </div>
        <div className="testymonials__item">
          <div className="testymonials__img-wrapper">
            <img src={portrait}  className='testymonials__portrait'/>
          </div>
          <div className="testymonials__desc">
            <h4 className="testymonials__desc-title">Courtney Henry</h4>
            <p className='testymonials__p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className="testymonials__stars-container">
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
            </div>
            </div>
          </div>
        <div className="testymonials__item">
          <div className="testymonials__img-wrapper">
            <img src={portrait}  className='testymonials__portrait'/>
          </div>
          <div className="testymonials__desc">
            <h4 className="testymonials__desc-title">Courtney Henry</h4>
            <p className='testymonials__p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className="testymonials__stars-container">
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
              <img src={star} alt="star" className='testymonials__star'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testymonials