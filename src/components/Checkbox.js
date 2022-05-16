export default function Checkbox({ text, ...restProps }) {
  return (
    <label>
      <input type="checkbox" {...restProps} />
      <span>{text}</span>
    </label>
  );
}
