import Button from "./../Main/Button"
import  "./HeroSection.css"
import Hero from "./Hero"
 
 const HeroSection =(props) => {
    return (
      <Hero>
      <div className='hero-text'>
        <span>The Best</span>
        <span>Custormer</span>
        <span>Experiences</span>
        <p>Are you?</p>
        </div>
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

      </Hero>
      
    )
 }

 export default HeroSection