import hero from "./../image/animalBackground.jpg"
import Button from "./../Main/Button"
import  "./HeroSection.css"
 const HeroSection = () => {
    const heroStyle = {
      backgroundImage: `url(${hero})`,
      width: '100vw',
      height: '70vh'
    }

    const btnStyle = {
      backgroundColor: 'red',
      padding: '15px 20px'
    }
    return (
      <div  className={heroStyle}>
      <div className='hero-text'>
        <span>The Best</span>
        <span>Custormer</span>
        <span>Experiences</span>
        <p>Are you?</p>
        <div className='hero-btns'>
          <Button 
          text= 'Buyer'
          className='hero-btn'
          />
          <Button 
          text= 'Seller'
          className='hero-btn'
          />
        </div>
      </div>
      </div>
      
    )
 }

 export default HeroSection