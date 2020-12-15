const path = require('path')
const express = require("express");
const app = express(); // creating new instance of express

// middleware for express
app.use(express.urlencoded({ extended: false })); // thos is global level middleware we can also use route level
app.use(express.static(path.join(__dirname,"public"))) //

app.set("view engine" , "ejs"); // HTML template engine using ejs
app.set("views", path.join(__dirname,"views"))

// middle ware function
// after done with this function express automatically ruun the next function if define
function getWeather(req, res, next) {
  req.visitorWeather = false;
  if (req.visitorWeather) {
    res.send("Please come back when it is not raining !");
  } else {
    next();
  }
}

// Making the route for our app
app.get("/", getWeather, (req, res) => {
  // res.send("Hello from Home express");

//   You can pass an ibject which will have the request data
  res.render("home",{
      isRaining : req.visitorWeather,
      pets : [{name : "Hangy" , species : "Cat"},{name : "Very Fat" , species : "Dog"}]
  }); 
});

app.post("/result", (req, res) => {
  // Hoe to get data from request!!
  if (req.body.color.trim().toUpperCase() == "BLUE") {
    res.send("Congrats... that is correct.");
  } else {
    res.send("Oops... that is not correct.");
  }
});

app.get("/result", (req, res) => {
  res.send("Why are you visiting this URL!.");
});

app.get("/about", (req, res) => {
  res.send("Thanks for learning about");
});


//we can also send json data from express like we send html
app.get("/api/pets",(req,res)=>{
    res.json([{name : "Hangy" , species : "Cat"},{name : "Very Fat" , species : "Dog"}])
})


// making the localHost evironment
app.listen( process.env.PORT || 3000); // used heroku port or local 
