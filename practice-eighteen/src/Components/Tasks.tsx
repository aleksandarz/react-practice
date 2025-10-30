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
          } : task
      )
    );
  };

  const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});
  const addCommentToTask = (taskId: string, comment: string) => {
    setTasksData(prevTasks =>
      prevTasks.map(task =>
        task.taskId === taskId
          ? { ...task, comments: [...(task.comments || []), comment] }
          : task
      )
    );
  };

  return (
    <>
      {userData.loggedIn && (
        <div className="flex flex-col min-w-full">
          <div className="flex flex-col gap-5 justify-center items-center mt-5">
            <h2 className="text-2xl font-bold">Create task</h2>
            <CreateTasks />
            <hr className="my-3 border-t-2 border-gray-300 w-full" />
          </div>
          <div className="flex flex-wrap m-8 gap-8">
            {tasks.map((task) => {
              return (
                <div
                  key={task.taskId}
                  className="flex flex-col gap-2 my-3">
                  <p className="font-bold text-xl mb-1.5">{task.taskName}</p>
                  <p>Category: {task.category}</p>
                  {task.comments && task.comments.length > 0 ? (
                    <ul>
                      {task.comments.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  ) : (
                    <p>No comments yet</p>
                  )}

                  <input
                    onChange={(e) => setEditedName(e.target.value)}
                    type="text"
                    className="w-64 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
                    placeholder="Enter new task name"/>

                  <select
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="w-64 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400">
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>

                  <textarea
                    value={commentInputs[task.taskId] || ""}
                    onChange={(e) =>
                      setCommentInputs(prev => ({
                        ...prev,
                        [task.taskId]: e.target.value,
                      }))
                    }
                    className="w-64 h-32 rounded border border-gray-400 pl-1.5 outline-gray-400 resize-none"
                    placeholder="New comment"/>

                  <button
                    onClick={() => {
                      addCommentToTask(task.taskId, commentInputs[task.taskId] || "");
                      setCommentInputs(prev => ({...prev, [task.taskId]: ""}));
                    }}
                    className="w-64 h-10 rounded bg-blue-300 text-white hover:bg-blue-500 transition duration-500"
                    type="button">
                    Add comment
                  </button>

                  <button
                    onClick={() => editTask(task.taskId)}
                    className="w-64 h-10 rounded bg-blue-300 text-white hover:bg-blue-500 transition duration-500"
                    type="button">Edit task
                  </button>

                  <button
                    onClick={() => deleteTask(task.taskName)}
                    className="w-64 h-10 rounded bg-blue-300 text-white hover:bg-blue-500 transition duration-500"
                    type="button">Delete task
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Tasks;