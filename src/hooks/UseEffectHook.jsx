import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function del() {
    setState((prev) => !prev);
  }

  useEffect(() => {
    console.log("Use Effect chla");
  });

  return (
    <div className="flex flex-col gap-8">
      {!state ? (
        <div>
          <div>{count}</div>
          <button
            onClick={() => {
              inc();
            }}
            className="bg-blue-500 px-4 py-2"
          >
            Click Me
          </button>
        </div>
      ) : (
        " "
      )}
      <button
        onClick={() => {
          del();
        }}
        className="bg-red-500 px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default UseEffectHook;
