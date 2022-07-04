import Button from "./../Main/Button"
import  "./HeroSection.css"
import Hero from "./Hero"
 
 const HeroSection =(props) => {
   const style = {
     btn: {
       backgroundColor:'red',
       padding:'15px 10px',
     }}
    return (
      <Hero className='hero-section'>
      <div className='hero-text'>
        <span>The Best</span>
        <span>Custormer</span>
        <span>Experiences</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
        <div className='hero-btns'>
          <Button 
          text= 'Buyer'
          newStyle= {{backgroundColor: 'red'}}
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