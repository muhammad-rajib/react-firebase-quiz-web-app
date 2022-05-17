export default function Checkbox({ text, className, ...restProps }) {
  return (
    <label className={className}>
      <input type="checkbox" {...restProps} />
      <span>{text}</span>
    </label>
  );
}
