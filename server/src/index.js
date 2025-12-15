/*----------------------------------
Boilerplate Code to Set Up Server
----------------------------------*/
//WHEN YOU ARE RUNNING THINGS IN THINGS IN CONSOLE MAKE SURE YOU ARE IN SRC FOLDER THEN DO NODE INDEX.JS

//THE ONLY THING THAT WILL BE DIFFERENT WHEN WE CREATED DATA WILL BE DATABASE URL BUT THE BOILERPLATE BELOW WILL BE EXACTLY THE SAME
//importing Node Modules
import express from "express";
import pg from "pg"; //pg stands for PostgreSQL, which we need to connect to the database

// new pg.Pool() is connecting to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL, //credentials to access the database
  ssl: true, // use SSL encryption when connecting to the database to keep data safe
});

const app = express(); //create an instance of the Express module, which gives access to Express in its entirety.

app.use(express.json()); //This server will receive and respond to requests with JSON data

const port = 3000; //Setting which port for app to listen to and receive requests

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});

/*----------------------------------
Helper Functions
----------------------------------*/
//1. getAllSuggestions()
//will show all current users in database
async function getAllSuggestions() {
  //db query() lets us query the SQL database and takes in one parameter: a SQL query

  const data = await db.query("SELECT * FROM suggestions");
  console.log(data.rows);
  return data.rows; //we have to use dot notation to get the value of the rows property from the data object
}

//2.) getSuggestionsByCategory
async function getSuggestionsByCategory(category) {
  const data = await db.query("SELECT * FROM suggestions WHERE category = $1", [
    category,
  ]);
  return data.rows;
}

//3.) addOneSuggestion
async function addOneSuggestion(title, description, category) {
  await db.query(
    "INSERT INTO suggestions (title, description, category) VALUES ($1, $2, $3)",
    [title, description, category]
  );
}

/*----------------------------------
API Endpoints
----------------------------------*/
//1. GET /get-all-suggestions

//get method retrieves data from endpoint, we then use async await to wait for request to process data and then we get our response
app.get("/get-all-suggestions", async (req, res) => {
  const userSuggestions = await getAllSuggestions(); //call helper function to get all users back from database

  res.json(userSuggestions); //send data back as JSON
});

//2. GET /get-all-suggestions-by-category/${category}

//get method retrieves data from endpoint, we then use async await to wait for request to process data and then we get our response
app.get("/get-all-suggestions-by-category/:category", async (req, res) => {
  const category = req.params.category;
  const suggestions = await getSuggestionsByCategory(category);

  res.json(suggestions);
});

//3. POST /add-one-suggestion

app.post("/add-one-suggestion", async (req, res) => {
  const { title, description, category } = req.body;
  await addOneSuggestion(title, description, category);
  res.send("Success! Suggestion was added.");
});
