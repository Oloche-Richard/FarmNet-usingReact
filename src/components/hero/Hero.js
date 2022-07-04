import hero from "./../image/animalBackground.jpg"

const Hero = (props) => {
     const style = {
       heroStyle: {
      backgroundImage: `url(${hero})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
      width: '100vw',
      height: '90vh',
      margin:'auto'

    }}

  return (
    <div style={style.heroStyle}>{props.children}</div>
  )
}

export default Hero