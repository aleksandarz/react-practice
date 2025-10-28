import { useSetRecoilState } from "recoil";
import { tasksState } from "../States/tasksState";
import { useForm } from "react-hook-form";

type TasksInput = {
  taskName: string;
}

const CreateTasks = () => {

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<TasksInput>();
  const taskName = watch("taskName", "");

  const setTasks = useSetRecoilState(tasksState);

  const createTask = () => {
    setTasks(currTask => [...currTask, taskName]);
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
          className="w-80 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
          placeholder="Enter task title" />
        {errors.taskName && (
          <p className="text-red-500">{errors.taskName.message}</p>
        )}

        <button
          className="w-80 h-10 rounded bg-blue-400 text-white"
          type="submit">Add task
        </button>

      </form>
    </>
  );
}

export default CreateTasks;