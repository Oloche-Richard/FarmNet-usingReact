import hero from "./../image/animalBackground.jpg"
import  "./HeroSection.css"
// import Button from "../Main/Button"
 const HeroSection = () => {
    const heroStyle = {
      backgroundImage: `url(${hero})`,
      width: '100vw',
      height: '70vh'

    }
    return (
      <div  className={heroStyle}>
      <div>
        <span>The Best</span>
        <span>Custormer</span>
        <span>Experiences</span>
        <p>lorem slnsldfns lsanlnasisfnas inlsan lnalsnas ionasdfnoin asfnasinkl c ljnASOInaf sj sajnsonsdfson onSOfdnonsfdnlsknf sdfnoissdf dlnsnsd l;knoidsn </p>
      </div>
      </div>
      
    )
 }

 export default HeroSection