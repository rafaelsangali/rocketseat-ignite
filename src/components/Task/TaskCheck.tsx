import { twMerge } from "tailwind-merge";

interface ITaskCheckProps extends React.HTMLProps<HTMLButtonElement> {
  checked: boolean;
}

export default function TaskCheck(props: ITaskCheckProps) {
  const { checked, className } = props;
  const action = checked ? "checked" : "uncheck";
  const buttonClassName = {
    uncheck:
      "w-4 h-4 mr-2 transition-colors border-2 rounded-full border-blue-neutral hover:bg-blue-dark",
    checked:
      "w-4 h-4 mr-2 transition-colors bg-center dark:bg-purple-dark bg-no-repeat bg-contain border-2 rounded-full border-purple-dark hover:border-purple-neutral hover:bg-purple-neutral bg-purple-dark bg-icon-check",
  };

  return (
    <button
      {...props}
      type="button"
      className={twMerge(buttonClassName[action], className)}
    >
      &nbsp;
    </button>
  );
}
