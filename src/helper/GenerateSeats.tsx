type SeatStatus = { [key: string]: number };

const generateSeats = (numSeats: number, totalSeats: number): SeatStatus => {
  const seats: SeatStatus = {};

  for (let i = 1; i <= totalSeats; i++) {
    seats[i.toString()] = 1;
  }

  for (let i = 0; i < numSeats; i++) {
    let index = Math.floor(Math.random() * totalSeats) + 1;
    while (seats[index.toString()] === 0) {
      index = Math.floor(Math.random() * totalSeats) + 1;
    }
    seats[index.toString()] = 0;
  }

  for (let i = 1; i <= totalSeats; i++) {
    if (seats[i.toString()] !== 0) {
      seats[i.toString()] = Math.floor(Math.random() * 2) + 1;
    }
  }

  return seats;
};
export default generateSeats;

