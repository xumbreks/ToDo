import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { ListEmpty } from "./components/ListEmpty";
import { ChangeEvent, useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { HeaderTask } from "./components/HeaderTask";

export interface ITask {
  content: string;
  isChecked: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const [inputValue, setInputValue] = useState("");

  const finishedTasks = taskList.filter(
    (taskList) => taskList.isChecked
  ).length;

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleAddTask() {
    setTaskList((state) => [
      ...state,
      { content: inputValue, isChecked: false },
    ]);
    setInputValue("");
  }

  function removeTask(contentToDelete: string) {
    const tasksWithoutDeletedOne = taskList.filter(
      (task) => task.content !== contentToDelete
    );
    setTaskList(tasksWithoutDeletedOne);
  }

  function toggleTaskStatus(index: number) {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].isChecked = !updatedTaskList[index].isChecked;
    setTaskList(updatedTaskList);
  }

  return (
    <main>
      <Header />
      <section className="max-w[46rem] w-full mx-auto">
        <div className="flex flex-1 justify-center -translate-y-1/2 gap-2">
          <Input onChange={onChangeInput} value={inputValue} />
          <Button onClick={handleAddTask} />
        </div>
        <div className="flex flex-col gap-2">
          <HeaderTask
            counterTask={taskList.length}
            finishedTasks={finishedTasks}
          />
          {taskList.length === 0 ? (
            <ListEmpty />
          ) : (
            taskList.map((task, index) => (
              <ListTasks
                data={task}
                key={index}
                titleTask={task.content}
                onRemoveTask={removeTask}
                onToggleTaskStatus={() => toggleTaskStatus(index)}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
