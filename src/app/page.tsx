"use client";

import { FormEvent } from "react";
import logoIcon from "./icon.svg";
import Image from "next/image";
import Task from "@/components/Task/index,";
import Square from "@/components/Square";
import useTaskController from "@/hooks/useTaskController";

export default function Home() {
  const {
    totalTaskCreate,
    taskArry,
    handleSubmit,
    changeStatus,
    totalTaskDone,
    removeTask,
  } = useTaskController();
  return (
    <>
      <main className="w-screen h-screen bg-gray-600">
        <div className="flex justify-center gap-4 items-center h-[12.5rem] bg-gray-700">
          <Image
            src={logoIcon}
            alt={"Logo Rocketseat todo list"}
            className="h-[2.25rem] w-[1.375rem]"
          />
          <div className="flex text-4xl font-bold">
            <span className="text-blue-neutral">to</span>
            <span className="text-purple-dark">do</span>
          </div>
        </div>
        <div className="flex flex-col max-w-2xl mx-auto -mt-6 gap-14">
          <form onSubmit={handleSubmit} className="flex w-full gap-4 ">
            <input
              type="text"
              name="task"
              placeholder="Adicione uma nova tarefa"
              className="w-full p-4 text-white bg-gray-500 border border-gray-700 rounded-lg -300"
            />
            <button type="submit" className="button-create">
              Criar
            </button>
          </form>
          <Square.Root
            quanityCreated={totalTaskCreate}
            quanityConclude={totalTaskDone}
          >
            {totalTaskCreate === 0 ? (
              <Task.Empty />
            ) : (
              taskArry.map(({ id, completed, task }) => (
                <Task.Root key={id}>
                  <Task.Check
                    checked={completed}
                    onClick={() => changeStatus(id)}
                  />
                  <Task.Content checked={completed} content={task} />
                  <Task.Delete onClick={() => removeTask(id)} />
                </Task.Root>
              ))
            )}
          </Square.Root>
        </div>
      </main>
    </>
  );
}
