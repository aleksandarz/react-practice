import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../States/userState";
import CreateTasks from "./CreateTasks";
import { tasksState } from "../States/tasksState";

const Tasks = () => {

  const userData = useRecoilValue(userState);
  const tasks = useRecoilValue(tasksState);
  const setTasksData = useSetRecoilState(tasksState);

  const deleteTask = (taskName: string) => {
    const filteredTasks: string[] = tasks.filter((task) => task !== taskName);
    setTasksData(filteredTasks);
  }

  return (
    <>
      {userData.loggedIn && (
        <div className="m-5">
          <CreateTasks/>
          <h2 className="text-xl mt-3">All tasks</h2>
          {tasks.map((task) => {
            return (
              <div
                key={task}
                className="mt-2 mb-2">
                <p>{task}</p>
                <button
                  onClick={ () => deleteTask(task) }
                  className="w-64 h-10 rounded bg-blue-300 text-white mt-2"
                  type="button">Delete task</button>
              </div>
            )
          })}
        </div>
      )}
    </>
  );
}

export default Tasks;