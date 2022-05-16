import classes from "../styles/TextInput.module.css";

export default function TextInput({ icon, ...restProps }) {
  return (
    <div className={classes.textInput}>
      <input {...restProps} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}
