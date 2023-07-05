import { ReactNode, useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

interface ITaskRootProps {
  children: ReactNode;
}

export default function TaskRoot(props: ITaskRootProps) {
  const { children } = props;

  const transitions = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="flex items-center w-full p-3 bg-gray-500 border border-gray-400 rounded-md"
            >
              {children}
            </animated.div>
          )
      )}
    </>
  );
}
