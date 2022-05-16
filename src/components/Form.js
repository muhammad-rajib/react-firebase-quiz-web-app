import classes from "../styles/Form.module.css";

export default function Form({ children, className, ...restProps }) {
  return (
    <>
      <form
        className={`${className} ${classes.form}`}
        action="#"
        {...restProps}
      >
        {children}
      </form>
    </>
  );
}
