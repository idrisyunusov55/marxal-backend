import mongoose from "mongoose";


const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "İstifadəçi ID-si tələb olunur!"],
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room", 
      required: [true, "Otaq ID-si tələb olunur!"],
    },
    checkIn: {
      type: Date,
      required: [true, "Giriş tarixi tələb olunur!"],
    },
    checkOut: {
      type: Date,
      required: [true, "Çıxış tarixi tələb olunur!"],
    },
    totalGuests: {
      type: Number,
      required: [true, "Qonaq sayı tələb olunur!"],
      min: [1, "Qonaq sayı ən azı 1 olmalıdır!"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Ümumi qiymət tələb olunur!"],
      min: [0, "Qiymət mənfi ola bilməz!"],
    },
  },
  { timestamps: true }
);


const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;