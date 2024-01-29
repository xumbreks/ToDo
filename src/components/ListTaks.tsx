import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import { Trash } from "@phosphor-icons/react";
import { HeaderTask } from "./HeaderTask";

export function ListTasks() {
  const [showCheckButton, setShowCheckButton] = useState(false);

  const toggleButton = () => {
    setShowCheckButton((prev) => !prev);
  };

  return (
    <>
      <HeaderTask />
      <div className="flex justify-center mt-16">
        <div className="w-[46rem] bg-base-500 p-4 flex gap-2">
          <div className="pt-1">
            {showCheckButton ? (
              <button
                type="button"
                className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full bg-product-200 hover:bg-product-100 transition-colors"
                onClick={toggleButton}
              >
                <Check className="text-white" size={14} />
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center justify-center w-[1.125rem] h-[1.125rem] rounded-full border border-product-300 hover:bg-product-400/90 transition-colors"
                onClick={toggleButton}
              />
            )}
          </div>
          {!showCheckButton ? (
            <span className="text-sm transition-colors">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              quos reprehenderit ullam quam consequatur blanditiis eligendi
              sapiente! Aut, amet. Ea eveniet illo quia dicta? Tempora eos fuga
              culpa adipisci numquam!
            </span>
          ) : (
            <span className="text-sm line-through text-base-300 transition-colors">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              quos reprehenderit ullam quam consequatur blanditiis eligendi
              sapiente! Aut, amet. Ea eveniet illo quia dicta? Tempora eos fuga
              culpa adipisci numquam!
            </span>
          )}
          <div className="pt-1">
            <button type="button">
              <Trash
                size={24}
                className="text-base-300 hover:text-feedback-500 transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
