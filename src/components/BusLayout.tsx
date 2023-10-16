import React, { useEffect, useState } from "react";
import bus_data from "../data/bus_data.json";
import generateSeats from "@/helper/GenerateSeats";
import { useUserContext } from "@/context/UserContext";
import { useJourneyContext } from "@/context/JourneyContext";

interface SeatStatus {
  [seatNumber: string]: number;
}

function BusLayout() {
  const { user } = useUserContext();
  const { bookedSeatCount, updateBookedSeatCount, currentJourney } =
    useJourneyContext();
  //const seatStatus: SeatStatus = bus_data.bus;
  const [seatStatus, setSeatStatus] = useState<SeatStatus>({});

  useEffect(() => {
    const generatedSeats = generateSeats(currentJourney?.emptySeatCount, 54);
    setSeatStatus(generatedSeats);
  }, [currentJourney]);

  //Increase or decrease the count with checkbox
  const handleCheckboxChange = (seatNumber: number, checked: boolean) => {
    if (checked) {
      updateBookedSeatCount(bookedSeatCount + 1);
    } else {
      updateBookedSeatCount(bookedSeatCount - 1);
    } 
  };
  useEffect(() => {

  }, [bookedSeatCount]);

  // this is for avoiding repetitive coding
  const renderSeats = (start: number, end: number) => {
    const seats: JSX.Element[] = [];

    for (let seatNumber = start; seatNumber <= end; seatNumber++) {
      const isMale = user?.gender === 1;
      const isFemale = user?.gender === 2;
      const seatIsMale = seatStatus[seatNumber.toString()] === 1;
      const seatIsFemale = seatStatus[seatNumber.toString()] === 2;

      // Check if the next seat is available
      const nextSeatNumber =
        seatNumber % 2 === 0 ? seatNumber - 1 : seatNumber + 1;
      const nextSeatIsMale = seatStatus[nextSeatNumber.toString()] === 1;
      const nextSeatIsFemale = seatStatus[nextSeatNumber.toString()] === 2;

      // If the next seat has a different gender, disable it
      const isNextSeatDisabled =
        (isMale && nextSeatIsFemale) || (isFemale && nextSeatIsMale);

      seats.push(
        <li className="seat" key={seatNumber}>
          <input
            type="checkbox"
            id={seatNumber.toString()}
            onChange={(e) => handleCheckboxChange(seatNumber, e.target.checked)}
            disabled={
              isNextSeatDisabled ||
              seatStatus[seatNumber.toString()] !== 0
            }
          />
          <label htmlFor={seatNumber.toString()}>{seatNumber}</label>
          {seatStatus[seatNumber.toString()] === 1 && (
            <img className="seat-image" src="/male.png" alt="Male" />
          )}
          {seatStatus[seatNumber.toString()] === 2 && (
            <img className="seat-image" src="/female.png" alt="Female" />
          )}
        </li>
      );
    }

    return seats;
  };

  // this is for seats nexto to middledoor
  const disableForMiddleDoor = (seatNumber: number) => {
    const isMale = user?.gender === 1;
    const isFemale = user?.gender === 2;
    const seatIsMale = seatStatus[seatNumber.toString()] === 1;
    const seatIsFemale = seatStatus[seatNumber.toString()] === 2;

    const nextSeatNumber =
      seatNumber % 2 === 0 ? seatNumber - 1 : seatNumber + 1;
    const nextSeatIsMale = seatStatus[nextSeatNumber.toString()] === 1;
    const nextSeatIsFemale = seatStatus[nextSeatNumber.toString()] === 2;

    const isNextSeatDisabled =
      (isMale && nextSeatIsFemale) || (isFemale && nextSeatIsMale);

    return isNextSeatDisabled;
  };

  return (
    <div className="bus">
      <div className="cockpit">
        <div className="steeringclass">
          <img
            className="steering"
            src="https://cdn4.iconfinder.com/data/icons/automotive-glyph/64/automotive_vehicle-18-512.png"
          />
        </div>
        <div className="exit_front"></div>
      </div>

      <ol className="cabin fuselage">
        <li className="row row--1">
          <ol className="seats" type="A">
            {renderSeats(1, 4)}
          </ol>
        </li>
        <li className="row row--2">
          <ol className="seats" type="A">
            {renderSeats(5, 8)}
          </ol>
        </li>
        <li className="row row--3">
          <ol className="seats" type="A">
            {renderSeats(9, 12)}
          </ol>
        </li>
        <li className="row row--4">
          <ol className="seats" type="A">
            {renderSeats(13, 16)}
          </ol>
        </li>
        <li className="row row--5">
          <ol className="seats" type="A">
            {renderSeats(17, 20)}
          </ol>
        </li>
        <li className="row row--6">
          <ol className="seats" type="A">
            {renderSeats(21, 24)}
          </ol>
        </li>
        <li className="row row--7">
          <ol className="seats" type="A">
            <li className="seat">
              <input
                type="checkbox"
                id="25"
                onChange={(e) => handleCheckboxChange(25, e.target.checked)}
                disabled={disableForMiddleDoor(25) || seatStatus[25] !== 0}
              />
              <label htmlFor="25">25</label>
              {seatStatus["25"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["25"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <li className="seat">
              <input
                type="checkbox"
                id="26"
                onChange={(e) => handleCheckboxChange(26, e.target.checked)}
                disabled={disableForMiddleDoor(26) || seatStatus[26] !== 0}
              />
              <label htmlFor="26">26</label>
              {seatStatus["26"] === 1 && (
                <img className="seat-image" src="/male.png" alt="Male" />
              )}
              {seatStatus["26"] === 2 && (
                <img className="seat-image" src="/female.png" alt="Female" />
              )}
            </li>
            <div className="exit_middle"></div>
          </ol>
        </li>
        <li className="row row--8">
          <ol className="seats" type="A">
            {renderSeats(27, 30)}
          </ol>
        </li>
        <li className="row row--9">
          <ol className="seats" type="A">
            {renderSeats(31, 34)}
          </ol>
        </li>
        <li className="row row--10">
          <ol className="seats" type="A">
            {renderSeats(35, 38)}
          </ol>
        </li>
        <li className="row row--11">
          <ol className="seats" type="A">
            {renderSeats(39, 42)}
          </ol>
        </li>
        <li className="row row--12">
          <ol className="seats" type="A">
            {renderSeats(43, 46)}
          </ol>
        </li>
        <li className="row row--13">
          <ol className="seats" type="A">
            {renderSeats(47, 50)}
          </ol>
        </li>
        <li className="row row--14">
          <ol className="seats" type="A">
            {renderSeats(51, 54)}
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default BusLayout;
