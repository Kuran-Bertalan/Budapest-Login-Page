export default function CheckboxInput({ label }) {
  return (
    <div className="flex items-center mt-5">
      <input type="checkbox" />
      <span className="pl-2 font-light">{label}</span>
    </div>
  );
}
