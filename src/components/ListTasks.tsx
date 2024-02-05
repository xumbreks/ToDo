import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import { Trash } from "@phosphor-icons/react";
import { ITask } from "../App";

interface ListTasksProps {
  data: ITask;
  titleTask: string;
  onRemoveTask: (removeTask: string) => void;
  onToggleTaskStatus: () => void;
}

export function ListTasks({
  titleTask,
  onRemoveTask,
  onToggleTaskStatus,
  data,
}: ListTasksProps) {
  const [showCheckButton, setShowCheckButton] = useState(data.isChecked);

  const toggleButton = () => {
    setShowCheckButton((prev) => !prev);
    onToggleTaskStatus();
  };

  function handleRemoveTask() {
    if (!confirm("Deseja remover essa tarefa ?")) return;
    onRemoveTask(titleTask);
  }

  return (
    <>
      <div className="flex justify-center mx-2">
        <div className="w-[46rem] bg-base-500 p-4 flex justify-between gap-2 ">
          <div className="pt-1 ">
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
          <div className="w-full">
            {!showCheckButton ? (
              <span className="text-sm transition-colors">{titleTask}</span>
            ) : (
              <span className="text-sm line-through text-base-300 transition-colors">
                {titleTask}
              </span>
            )}
          </div>
          <div className="flex justify-end items-start">
            <button onClick={handleRemoveTask} type="button">
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
