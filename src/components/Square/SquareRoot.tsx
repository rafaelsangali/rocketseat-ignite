import { ReactNode } from "react";

interface ISquareRoot {
  children: ReactNode;
  quanityCreated: number;
  quanityConclude: number;
}

export default function SquareRoot(props: ISquareRoot) {
  const { children, quanityCreated, quanityConclude } = props;

  const textHeader = [
    {
      className: "text-blue-neutral",
      text: "Tarefas criadas",
      quantity: quanityCreated,
    },
    {
      className: "text-purple-dark",
      text: "Concluídas",
      quantity: quanityConclude,
    },
  ];

  return (
    <section className="flex flex-col gap-3 w-full pr-4 max-h-[60vh] overflow-y-auto">
      <div className="flex justify-between w-full">
        {textHeader.map(({ text, quantity, className }) => (
          <div className="flex items-center gap-4" key={text}>
            <span className={`font-bold ${className}`}>{text}</span>
            <span className="px-2 font-bold text-white bg-gray-400 rounded-full">
              {quantity}
            </span>
          </div>
        ))}
      </div>
      {children}
    </section>
  );
}
