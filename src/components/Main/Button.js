import "./Button.css";
const Button = ({text, newStyle}) => {

  return <button style={newStyle}>{text}</button>;
};                                         
export default Button;
