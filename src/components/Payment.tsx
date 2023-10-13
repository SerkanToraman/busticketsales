import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/UserContext";
import { useJourneyContext } from "@/context/JourneyContext";

const Payment = () => {
  const router = useRouter();
  const { user } = useUserContext();
  const { currentJourney, bookedSeatCount } = useJourneyContext();
  const [cardholder, setCardholder] = useState(user?.name || "");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [ccv, setCcv] = useState("");
  const [inputError, setInputError] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\D/g, "");
    if (sanitizedValue.length > 16) {
      return;
    }
    const formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\D/g, "");
    if (sanitizedValue.length > 3) {
      return;
    }
    setCcv(sanitizedValue);
  };
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\D/g, "");
    if (sanitizedValue.length > 4) {
      return;
    }
    const formattedValue = sanitizedValue.replace(
      /(\d{2})(\d{0,2})/,
      (match, p1, p2) => (p2 ? `${p1}/${p2}` : p1)
    );
    setExpiry(formattedValue);
  };

  const handlePayClick = () => {
    let error = "";
    if (
      (cardholder && cardholder?.trim() === "") ||
      cardholder.trim().length < 3
    ) {
      error = "Please enter a valid cardholder name with at least 3 characters";
    } else if (cardNumber.replace(/\D/g, "").length !== 16) {
      error = "Please enter a valid 16-digit card number";
    } else if (expiry.replace(/\D/g, "").length !== 4) {
      error = "Please enter a valid expiry date";
    } else if (ccv.replace(/\D/g, "").length !== 3) {
      error = "Please enter a valid CCV";
    }
    if (error) {
      setInputError(error);
      setTimeout(() => {
        setInputError("");
      }, 2000);
    } else {
      router.push("/success");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="w-72">
            <p className="text-xl font-semibold">Payment Details</p>
            <div className="input_text mt-6 relative">
              {" "}
              <input
                type="text"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                placeholder="Serkan Toraman"
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
              />
              <span className="absolute left-0 text-sm -top-4">
                Card Holder
              </span>{" "}
              <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i>{" "}
            </div>
            <div className="input_text mt-8 relative">
              {" "}
              <input
                type="text"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                placeholder="0000 0000 0000 0000"
                data-slots="0"
                pattern="^\d{4}\s\d{4}\s\d{4}\s\d{4}$"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              <span className="absolute left-0 text-sm -top-4">
                Card Number
              </span>{" "}
              <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>{" "}
            </div>
            <div className="mt-8 flex gap-5 ">
              <div className="input_text relative w-full">
                {" "}
                <input
                  type="text"
                  className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                  placeholder="mm/yy"
                  value={expiry}
                  onChange={handleExpiryChange}
                />
                <span className="absolute left-0 text-sm -top-4">Expiry</span>{" "}
                <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>{" "}
              </div>
              <div className="input_text relative w-full">
                {" "}
                <input
                  type="text"
                  className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                  placeholder="000"
                  value={ccv}
                  onChange={handleCvvChange}
                />
                <span className="absolute left-0 text-sm -top-4">CVV</span>{" "}
                <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i>{" "}
              </div>
            </div>
            <p className="text-lg text-center mt-4 text-gray-600 font-semibold">
              Payment amount: ₺{bookedSeatCount * currentJourney.price}
            </p>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={handlePayClick}
              >
                Pay
              </button>
            </div>
            {inputError && (
              <p className="text-red-600 text-sm pt-4"> {inputError} </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
