import { ChangeEvent, useState } from "react";
import { Button } from "./Button";

export function Input() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  function addTask() {
    console.log(inputValue);
    setInputValue("");
  }

  return (
    <div className="flex justify-center gap-2 -translate-y-1/2">
      <input
        className="w-[39.875rem] p-4 bg-base-500 border border-base-700 
        rounded-lg placeholder:text-base-300 focus:outline-none focus:border focus:border-product-200"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Button addTask={addTask} />
    </div>
  );
}
