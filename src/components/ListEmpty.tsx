import clipboard from "../assets/clipboard.png";

export function ListEmpty() {
  return (
    <>
      <div className="flex justify-center mx-2">
        <div className="w-[46rem] flex flex-col px-6 py-16 mt-6 items-center border-t border-t-base-400 rounded-t-lg">
          <img className="mb-4" src={clipboard} />
          <span className="text-base-300 font-bold">
            Você ainda não tem tarefas cadastradas
          </span>
          <span className="text-base-300">
            Crie tarefas e organize seus itens a fazer.
          </span>
        </div>
      </div>
    </>
  );
}
