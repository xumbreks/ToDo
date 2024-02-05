import { PlusCircle } from "@phosphor-icons/react";

interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-auto flex items-center justify-center gap-2 p-4 mr-2
          bg-product-400 rounded-lg hover:bg-product-300 transition-colors"
    >
      <span className="text-sm font-bold">Criar</span>
      <PlusCircle size={16} />
    </button>
  );
}
