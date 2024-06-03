const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const ouvrierRoutes = require("./routes/ouvrier.routes");
const produitRoutes = require("./routes/produit.routes");
const statistiqueRoutes = require("./routes/statistique.routes");
const chatRoutes = require("./routes/chat.routes");
const cors = require("cors");
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders' : ['sessionId', 'Content-Type'],
  'exposedHeaders' : ['sessionId'],
  'methods' : 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue' : false
}
app.use(cors({corsOptions}));

//Express Session
app.use(session({
    secret: process.env.TOKEN_SECRET,
    resave: false,
    saveUninitialized: true
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//routes
app.use("/api/user", userRoutes);
app.use("/api/ouvrier", ouvrierRoutes);
app.use("/api/produit", produitRoutes);
app.use("/api/statistique", statistiqueRoutes);
app.use("/api/chat", chatRoutes);

//Port
app.listen(process.env.PORT, function(){
    console.log(`Listening on port ${process.env.PORT}`);
});