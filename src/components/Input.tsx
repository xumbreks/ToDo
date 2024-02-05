export function Input({ ...rest }) {
  return (
    <input
      className="w-[39.875rem] p-4 bg-base-500 border border-base-700 ml-2
        rounded-lg placeholder:text-base-300 focus:outline-none focus:border focus:border-product-200"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}
