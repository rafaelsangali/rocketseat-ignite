import clipBoard from "../../../public/image/clipboard.png";
import Image from "next/image";

export default function TaskEmpty() {
  return (
    <div className="flex flex-col items-center justify-center w-full border-t-2 border-gray-400 rounded-lg h-60">
      <Image src={clipBoard} alt={"Icone Clipboard"} />
      <span className="mt-5 font-bold">
        Você ainda não tem tarefas cadastradas
      </span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
