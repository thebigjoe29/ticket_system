const express = require("express");
const mongoose = require("mongoose");
const siginroutes = require("./routes/signRoutes");
const ticketroutes = require("./routes/ticketRoutes");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://harishthangu:mern@cluster0.aql5fud.mongodb.net/signup"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database connected");
});
db.on("error", (err) => {
  console.log("Error while connecting to database", err);
});
app.use(express.json());

app.use(cors());
// cross origin resource sharing
app.use("/sign", siginroutes);
app.use("/ticketinfo", ticketroutes);

const port = 5056;
app.listen(port, () => {
  console.log("server started on " + port);
});

// const express = require("express");
// const mongoose = require("mongoose");
// const ticketroutes = require("./routes/ticketRoutes");
// const cors = require("cors");
// const app = express();

// mongoose.set("strictQuery", true);
// mongoose.connect(
//   "mongodb+srv://Admin:mernproject@cluster0.bkvqzqu.mongodb.net/Tickets"
// );
// const db = mongoose.connection;
// db.on("open", () => {
//   console.log("Database connected");
// });
// db.on("error", (err) => {
//   console.log("Error while connecting to database", err);
// });
// app.use(express.json());

// app.use(cors());
// // cross origin resource sharing
// app.use("/ticketinfo", ticketroutes);

// const port = 5055;
// app.listen(port, () => {
//   console.log("server started on " + port);
// });
