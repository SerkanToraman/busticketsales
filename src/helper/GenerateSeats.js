// seatGenerator.js
 const generateSeats = (numSeats, totalSeats) =>{
  const seats = {};

  for (let i = 1; i <= totalSeats; i++) {
    seats[i] = 1;
  }

  for (let i = 0; i < numSeats; i++) {
    let index = Math.floor(Math.random() * totalSeats) + 1;
    while (seats[index] === 0) {
      index = Math.floor(Math.random() * totalSeats) + 1;
    }
    seats[index] = 0;
  }

  for (let i = 1; i <= totalSeats; i++) {
    if (seats[i] !== 0) {
      seats[i] = Math.floor(Math.random() * 2) + 1;
    }
  }

  return seats;
}
export default generateSeats;
