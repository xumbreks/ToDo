export interface HeaderTaskProps {
  counterTask: number;
  finishedTasks: number;
}

export function HeaderTask({ counterTask, finishedTasks }: HeaderTaskProps) {
  return (
    <div className="flex justify-center my-16 mx-2">
      <div className="w-[46rem] h-min flex justify-between">
        <span className="text-product-300 font-bold">
          Tarefas criadas
          <span className="text-base-200 bg-base-400 ml-2 px-2 rounded-full">
            {counterTask}
          </span>
        </span>
        <span className="text-product-100 font-bold">
          Concluídas
          <span className="text-base-200 bg-base-400 ml-2 px-2 rounded-full">
            {counterTask === 0
              ? counterTask
              : `${finishedTasks} de ${counterTask}`}
          </span>
        </span>
      </div>
    </div>
  );
}
