import CheckBox from "../components/Checkbox";
import classes from "../styles/Answers.module.css";

export default function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <CheckBox className={classes.answer} text="test answer" />
      </div>
    </>
  );
}
