import Button from "./../Main/Button"
import  "./HeroSection.css"
import Hero from "./Hero"
import Header from "./../Header/Header"
 
 const HeroSection =(props) => {

    return (
      <Hero className='hero-section'>
      <Header headerText='FarmNet'/>
      <div className='hero-text'>
        <span>The Best</span>
        <span>Custormer</span>
        <span>Experiences</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
        <div className='hero-btns'>
          <Button 
          text= 'Buyer'
          newStyle= {{
           backgroundColor: 'red',
           padding: '20px 40px',
           color: '#fff',
           }}
          />
          <Button 
          text= 'Seller'
          newStyle={{
            backgroundColor: 'yellow',
            padding: '20px 40px',
            color: '#fff',
            }}
          />
        </div>

      </Hero>
      
    )
 }

 export default HeroSection