import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from "../States/tasksState";

const CreateTasks = () => {

  const [taskName, setTaskName] = useState("");

  const setTasks = useSetRecoilState(tasksState);

  const createTask = () => {
    setTasks(currTask => [...currTask, taskName]);

    setTaskName("");
  }

  return (
    <>
      <form action="" className="flex flex-col gap-3">
        <input
          type="text"
          value={ taskName }
          onChange={ (e) => setTaskName(e.target.value) }
          className="w-80 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
          placeholder="Enter task title" />
        <button
          onClick={ () => createTask() }
          className="w-80 h-10 rounded bg-blue-400 text-white"
          type="button">Add task</button>
      </form>
    </>
  );
}

export default CreateTasks;