import { useSetRecoilState } from "recoil";
import { TaskInterface, tasksState } from "../States/tasksState";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type TasksInput = {
  taskId: string;
  taskName: string;
  category: string,
}

const CreateTasks = () => {

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

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<TasksInput>();
  const taskName = watch("taskName", "");
  const category = watch("category", "");

  const setTasks = useSetRecoilState(tasksState);

  const createTask = () => {
    const newTask: TaskInterface = {
      taskId: uuidv4(),
      taskName: taskName,
      category: category,
    }
    setTasks(currTask => [...currTask, newTask]);
    reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(createTask)}
        action=""
        className="flex flex-col gap-3">

        <input
          {...register("taskName", {
            required: "Task name is required",
          })}
          type="text"
          value={ taskName }
          className="w-96 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
          placeholder="Enter task title" />
        {errors.taskName && (
          <p className="text-red-500">{errors.taskName.message}</p>
        )}

        <select {...register("category", {
          required: "Category is required",
        })} className="w-96 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button
          className="w-96 h-10 rounded bg-blue-400 text-white hover:bg-blue-500 transition duration-300"
          type="submit">Add task
        </button>

      </form>
    </>
  );
}

export default CreateTasks;