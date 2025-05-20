import { useState } from "react";
import { Link } from "react-router-dom";

const BasicHooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="text-lg font-bold">Use State Hook</div>
      <p className="text-blue-900 text-xl">
        Count = <span className="font-bold">{count}</span>
      </p>
      <div className="flex flex-row items-center gap-4">
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded-3xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          className="bg-red-950 text-white px-4 py-2 rounded-3xl"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
      <Link to="/effect" className="bg-purple-500 px-4 py-2">
        useEffect
      </Link>
    </div>
  );
};

export default BasicHooks;
