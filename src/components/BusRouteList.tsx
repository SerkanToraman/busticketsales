import React from "react";
import { useRouter } from "next/navigation";
import { useJourneyContext } from "@/context/JourneyContext";

interface Route {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  emptySeatCount: number;
  price: number;
}

function BusRouteList({ filteredData }: { filteredData: Route[] }) {
  const router = useRouter();
  const { journeyData,updateCurrentJourney } = useJourneyContext();

  const handleBuyClick = (route:Route) => {
    updateCurrentJourney(route);
    router.push("/ticketsales");
  };
  return (
    <div className="sm:w-full md:w-[42rem] flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 ">
                    From
                  </th>
                  <th scope="col" className="px-6 py-4">
                    To
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Seat Count
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Seat Price
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((route, index) => (
                  <tr
                    key={route.id}
                    className="border-b dark:border-neutral-500"
                  >
                    <td className="whitespace-nowrap px-6 py-4">
                      {route.from}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {route.to}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {route.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {route.time}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {route.emptySeatCount}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {route.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <button
                        className="inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={() => {
                          handleBuyClick(route);
                        }}
                      >
                        Buy
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusRouteList;
