import "./Button.module.css";
const Button = (props) => {
  const { title } = props;

  return <button>{title}</button>;
};

export default Button;
