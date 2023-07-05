import { twMerge } from "tailwind-merge";

interface ITaskContentProps extends React.HTMLProps<HTMLParagraphElement> {
  checked: boolean;
  content: string;
}
export default function TaskContent(props: ITaskContentProps) {
  const { checked, content, className } = props;

  return (
    <p
      {...props}
      className={twMerge(
        `w-full h-12 overflow-y-auto  flex items-center text-justify text-white ${
          checked ? "line-through text-gray-300 overflow-hidden" : ""
        }`,
        className
      )}
    >
      {content}
    </p>
  );
}
