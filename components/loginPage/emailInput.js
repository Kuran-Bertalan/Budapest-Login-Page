export default function EmailInput(props) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-bold leading-6 text-[--color-main]"
      >
        E-mail cím:
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={props.value}
          onChange={props.onChange}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
