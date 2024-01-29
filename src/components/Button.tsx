import { PlusCircle } from "@phosphor-icons/react";

export interface ButtonProps {
  addTask: () => void;
}

export function Button({ addTask }: ButtonProps) {
  function handleAddTask() {
    addTask();
  }
  return (
    <button
      onClick={handleAddTask}
      type="button"
      className="w-auto flex items-center justify-center gap-2 p-4 
          bg-product-400 rounded-lg hover:bg-product-300 transition-colors"
    >
      <span className="text-sm font-bold">Criar</span>
      <PlusCircle size={16} />
    </button>
  );
}
