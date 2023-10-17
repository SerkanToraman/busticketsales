import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useJourneyContext } from "@/context/JourneyContext";
import { useUserContext } from "@/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tiro_Telugu } from "next/font/google";

function BusTicketPurchase(): JSX.Element {
  const router = useRouter();
  const { bookedSeatCount, currentJourney } = useJourneyContext();
  const { user } = useUserContext();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorDisplayed, setErrorDisplayed] = useState(false);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    // Check if user is null when the page is mounted
    if (user === null) {
      router.push("/login"); // Redirect to the login page if user is null
    }
    
  }, []);

  useEffect(() => {
    if (bookedSeatCount > 5) {
      if (!errorDisplayed) {
        const notify = () =>
          toast.warn("You can buy maximum 5 tickets", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        notify();
        setErrorDisplayed(true);
      }

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        setIsButtonDisabled(true);
      }, 500); 
    } else {
      setIsButtonDisabled(false);
      setErrorDisplayed(false);
    }
  }, [bookedSeatCount]);

  const handleBuyClick = () => {
    if (bookedSeatCount === 0) {
      const notify = () =>
        toast.warn("No seat is reserved", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      notify();
    } else {
      router.push("/payment");
    }
  };

  return (
    <div className="sticky top-0 z-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
      <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
        <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
          <span className="mr-2">{user?.name}</span>
        </h5>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-xs sm:txt-sm font-light">
                    <tbody>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-2">From</td>
                        <td className="whitespace-nowrap px-6 py-2">
                          {currentJourney?.from}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-2">To</td>
                        <td className="whitespace-nowrap px-6 py-2">
                          {currentJourney?.to}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-2">Date</td>
                        <td className="whitespace-nowrap px-6 py-2">
                          {currentJourney?.date}
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-2">Time</td>
                        <td className="whitespace-nowrap px-6 py-2">
                          {currentJourney?.time}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-xs sm:txt-sm  font-light">
                    <tbody>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-2">-</td>
                        <td className="whitespace-nowrap px-6 py-2">-</td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-2">
                          Single Ticket
                        </td>
                        <td className="whitespace-nowrap px-6 py-2">
                          ₺{currentJourney?.price}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-2">
                          Reserved Seat
                        </td>
                        <td className="whitespace-nowrap px-6 py-2">
                          {bookedSeatCount}
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-2">
                          Total Price
                        </td>
                        <td className="whitespace-nowrap px-6 py-2">
                          ₺
                          {bookedSeatCount === 0
                            ? 0
                            : bookedSeatCount * currentJourney?.price}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={handleBuyClick}
          className=" w-[6rem] mb-2 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          disabled={isButtonDisabled}
        >
          Buy
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BusTicketPurchase;
