import { useState } from "react";
import PropTypes from "prop-types";

const FinalInputCard = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [warning, setWarning] = useState(false);

  const handleSearch = () => {
    if (!city) {
      setWarning(true);
      return;
    }
    setWarning(false);
    onSearch(city);
  };

  return (
    <div className="md:h-[300px] md:w-[500px] w-full p-8 flex flex-col justify-center items-center rounded-3xl gap-3 bg-white border">
      <p className="md:text-4xl text-3xl">
        <span className="font-bold ">Weather APP</span>
      </p>
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <div className="flex flex-col justify-center items-center">
          <p className="">Get the weather details of any city, Right Now!</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <input
            id="cityInput"
            className="px-4 py-2 border rounded-xl md:rounded-s-2xl"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {warning && (
            <p className="text-red-500 text-sm px-4">
              City name cannot be empty 🌆❌
            </p>
          )}
          <button
            id="searchBtn"
            className="bg-[#1976D2] text-white px-4 py-2 md:rounded-e-2xl rounded-xl w-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

FinalInputCard.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default FinalInputCard;
