import app from "./config/app";
import database from "./config/database";

database.connect();
app.start();