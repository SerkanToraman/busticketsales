import React from "react";
import { useRouter } from "next/navigation";

function BusRouteList({ filteredData }) {
  const router = useRouter();
  return (
    <div className="w-[42rem] flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
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
                    <td className="whitespace-nowrap px-6 py-4">{route.to}</td>
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
                    <td className="whitespace-nowrap px-6 py-4">
                      <button onClick={()=>{
                        router.push("/ticketsales");
                      }}>Buy</button>
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

// <section className="relative w-[32rem]">
//     {filteredData.map((route) => (
//       <div className="min-h-fit p-3 md:p-6  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 " key={route.id}>
//         <h5>Route Details:</h5>
//         <div><p>From:</p><p><p>From: {route.from}</p></p></div>

//         <p>To: {route.to}</p>
//         <p>Date: {route.date}</p>
//         <p>Empty Seat Count: {route.emptySeatCount}</p>
//         <p>Price: {route.Price}</p>
//       </div>
//     ))}
//   </section>

// <div>BusRouteList</div>
