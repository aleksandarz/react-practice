import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../States/userState";
import CreateTasks from "./CreateTasks";
import { TaskInterface, tasksState } from "../States/tasksState";
import { useState } from "react";

const Tasks = () => {

  const categories: Array<string> = [
    "frontend",
    "backend",
    "design",
    "devops",
    "data science",
    "mobile development",
    "cybersecurity",
    "game development",
    "AI & machine learning",
    "cloud computing",
    "blockchain",
    "testing & QA",
    "project management",
  ];

  const userData = useRecoilValue(userState);
  const tasks = useRecoilValue(tasksState);
  const setTasksData = useSetRecoilState(tasksState);

  const deleteTask = (taskName: string) => {
    const filteredTasks: TaskInterface[] = tasks.filter((task) => task.taskName !== taskName);
    setTasksData(filteredTasks);
  }

  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const editTask = (taskId: string) => {
    setTasksData(currTasks =>
      currTasks.map(task =>
        task.taskId === taskId
          ? {
            ...task,
            taskName: editedName !== "" ? editedName : task.taskName,
            category: editedDescription !== "" ? editedDescription : task.category,
          }
          : task
      )
    );
  };

  return (
    <>
      {userData.loggedIn && (
        <div className="m-5">
          <CreateTasks/>
          <h2 className="text-2xl font-bold mt-3">All tasks</h2>
          <hr className="border border-gray-400 my-5 w-96"/>
          {tasks.map((task) => {
            return (
              <div
                key={task.taskId}
                className="flex flex-col gap-2 my-3">
                <p className="font-bold mb-1.5">{task.taskName}</p>
                <p>Category: {task.category}</p>

                <input
                  onChange={ (e) => setEditedName(e.target.value) }
                  type="text"
                  className="w-64 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
                  placeholder="Enter new task name"/>

                <select
                  onChange={ (e) => setEditedDescription(e.target.value) }
                  className="w-64 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400">
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <button
                  onClick={() => editTask(task.taskId)}
                  className="w-64 h-10 rounded bg-blue-300 text-white"
                  type="button">Edit task
                </button>

                <button
                  onClick={() => deleteTask(task.taskName)}
                  className="w-64 h-10 rounded bg-blue-300 text-white"
                  type="button">Delete task
                </button>

                <hr className="border border-gray-400 my-5 w-96"/>

              </div>
            )
          })}
        </div>
      )}
    </>
  );
}

export default Tasks;