import React, { useState, useEffect } from "react";
import BusRouteList from "./BusRouteList";
import { useForm } from "react-hook-form";

function BusRoute() {
  useEffect(() => {
    const init = async () => {
      const { Dropdown, Ripple, Datepicker, Input, Select, initTE } =
        await import("tw-elements");
      initTE({ Dropdown, Ripple, Select, Datepicker, Input });
    };
    init();
  }, []);

  const [busRouteData, setBusRouteData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [showNoJourneyFound, setShowNoJourneyFound] = useState(false);
  const cities = ["-", "İstanbul", "Ankara", "İzmir", "Samsun"];

  const handleFromChange = (e) => {
    const selectedFrom = e.target.value;
    setFrom(selectedFrom);
  };

  const fetchDataAndFilter = async () => {
    try {
      const response = await fetch(
        "https://6451148ae1f6f1bb22a76d28.mockapi.io/api/v1/busroutes"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);
      const filtered = data?.filter((route) => {
        return route.from === from && route.to === to && route.date === date;
      });
      setFilteredData(filtered);
      setSubmitClicked(true);
      if (filtered.length === 0) {
        setShowNoJourneyFound(true);
        setTimeout(() => {
          setShowNoJourneyFound(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataAndFilter();
    console.log(date);
  };

  return (
    //Double check with for responsiveness
    <div className="busRoute relative flex flex-col items-centre">
      <form
        onSubmit={handleSubmit}
        className="min-h-fit p-3 md:p-6  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 "
      >
        <h5 className="mb-2 text-[2rem] font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Select Travel
        </h5>
        <div className="mb-4 w-full">
          <label>From</label>
          <select onChange={(e) => setFrom(e.target.value)} data-te-select-init>
            {cities.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label>To</label>
          <select onChange={(e) => setTo(e.target.value)} data-te-select-init>
            {cities.map((option) => (
              <option key={option} value={option} disabled={option === from}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label>Date</label>
          <div className="relative mb-3">
            <input
              type="date"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none "
              placeholder="Select a date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="relative">
          <button
            type="submit"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Find Your Journey
          </button>
        </div>
      </form>
      {submitClicked ? (
        filteredData.length > 0 ? (
          <BusRouteList filteredData={filteredData} />
        ) : showNoJourneyFound ? (
          <p className="flex items-center justify-center h-12 my-6 text-red-500 overflow-hidden block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            No journey found.
          </p>
        ) : null
      ) : null}
    </div>
  );
}

export default BusRoute;
