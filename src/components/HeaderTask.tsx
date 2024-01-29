export function HeaderTask() {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-[46rem] h-min flex justify-between">
        <span className="text-product-300 font-bold">
          Tarefas criadas
          <span className="text-base-200 bg-base-400 ml-2 px-2 rounded-full">
            0
          </span>
        </span>
        <span className="text-product-100 font-bold">
          Concluídas
          <span className="text-base-200 bg-base-400 ml-2 px-2 rounded-full">
            0
          </span>
        </span>
      </div>
    </div>
  );
}
