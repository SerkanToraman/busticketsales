import React, { useState, useEffect } from "react";
import BusRouteList from "./BusRouteList";

function BusRoute() {
  useEffect(() => {
    const init = async () => {
      const { Dropdown, Ripple, Datepicker, Input, Select, initTE } =
        await import("tw-elements");
      initTE({ Dropdown, Select, Ripple, Datepicker, Input });
    };
    init();
  }, []);
  const [busRouteData, setBusRouteData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const fetchDataAndFilter = async () => {
    try {
      const response = await fetch(
        "https://6451148ae1f6f1bb22a76d28.mockapi.io/api/v1/busroutes"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      const filtered = data.filter((route) => {
        return (
          (from === "" || route.from === from) &&
          (to === "" || route.to === to) &&
          (date === "" || route.date === date) &&
          (from !== "" || to !== "" || date !== "")
        );
      });
      setFilteredData(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataAndFilter();
  };

  return (
    //Double check with for responsiveness
    <div className="relative flex flex-col items-centre w-[42rem]">
      <form
        onSubmit={handleSubmit}
        className="min-h-fit p-3 md:p-6  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 "
      >
        <h5 className="mb-2 text-[2rem] font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Select Travel
        </h5>
        <div className="mb-4">
          <label>From</label>
          <select onChange={(e) => setFrom(e.target.value)} data-te-select-init>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Samsun">Samsun</option>
          </select>
        </div>
        <div className="mb-4">
          <label>To</label>
          <select onChange={(e) => setTo(e.target.value)} data-te-select-init>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
            <option value="Samsun">Samsun</option>
          </select>
        </div>
        <div className="mb-6">
          <label>Date</label>
          <div
            className="relative"
            data-te-datepicker-init
            data-te-input-wrapper-init
          >
            <input
              onChange={(e) => setDate(e.target.value)}
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Select a date"
              data-te-datepicker-toggle-ref
              data-te-datepicker-toggle-button-ref
            />
            <label
              for="floatingInput"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Select a date
            </label>
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
      {filteredData.length > 0 ? (
        <BusRouteList filteredData={filteredData} />
      ) : (
        <p>No journey found.</p>
      )}
    </div>
  );
}

export default BusRoute;
