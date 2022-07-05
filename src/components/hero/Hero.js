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
      margin:'auto',

    }}
     const classes = ' hero-section ' + props.className;

  return (
    <div style={style.heroStyle} className={classes}>{props.children}</div>
  )
}

export default Hero