import { FormEvent, useState } from "react";

interface ITaskArry { id: number; completed: boolean; task: string; }[]
export default function useTaskController(){
  const [taskArry, setTaskArry] = useState<ITaskArry[] | never[]>([])

  const totalTaskCreate = taskArry.length
  const totalTaskDone = taskArry.filter(item => item.completed === true).length

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const inputValue = form.elements.namedItem("task") as HTMLInputElement;
    const task = inputValue.value?.trim();

    if(task.length === 0) {return}

    const addTask = {
      id: Math.random(),
      completed: false,
      task
    }
    setTaskArry([...taskArry, addTask])
    form.reset();
  }

  function changeStatus( id: number): void {
    const imutableArry = [...taskArry]
    const index = imutableArry.findIndex(item => item.id === id);

    if (index !== -1) {
      imutableArry[index].completed = !imutableArry[index].completed;
    }
    setTaskArry(imutableArry)
  }

  function removeTask( id: number): void {
    const imutableArry = [...taskArry]
    const arryFiltered = imutableArry.filter(item => item.id !== id);

    setTaskArry(arryFiltered)
  }

  return {
    taskArry, totalTaskCreate, totalTaskDone, handleSubmit,changeStatus,removeTask
  }
}