const express             = require('express'),
      app                 = express(),
      mongoose            = require('mongoose'),
      body                = require('body-parser'),
      expressSession      = require('express-session'),
      expressSanitizer    = require("express-sanitizer"),
      methodOverride      = require("method-override"),
      flash               = require("connect-flash"),
      HealthData          = require("./models/HealthData"),
      CrimeData           = require("./models/CrimeData"),
      BeneficationData    = require("./models/BeneficationData"),
      DrugData            = require("./models/DrugData"),
      ElectricityData     = require("./models/ElectricityData"),
      FireData            = require("./models/FireData"),
      NaturalCalamityData = require("./models/NaturalCalamityData"),
      NeighBourData       = require("./models/NeighBourData"),
      RoadConditionData   = require("./models/RoadConditionData"),
      WasteData           = require("./models/WasteData"),
      WaterData           = require("./models/WaterData"),
      cors                = require("cors");

// EXPRESS CONFIG
app.use(expressSession({
    secret: "we are going to mt fuji for eating curry.",
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());
app.use(cors());
app.use(express.json());

// middleware
// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

// APP CONFIG
mongoose.connect("mongodb://JaspreetSingh:jaspreet1999@ds215219.mlab.com:15219/rsmrt");
//mongoose.connect("mongodb://localhost/TheSoloTraveler");

app.set("view engine", "ejs");
app.use(body.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


// Index route 
app.get('/', (req, res) => {
    res.send('Index Page');
})

// Health route 
app.post('/healthData', (req, res) => {

    var name = req.body.name;
    var healthIssue = req.body.healthIssue;
    var beatRate = req.body.beatRate;
    var bodyTemp = req.body.bodyTemp;
    var serviceAvail = req.body.serviceAvail;

    var newHealthData = {name : name, healthIssue:healthIssue, beatRate : beatRate, bodyTemp: bodyTemp, serviceAvail: serviceAvail};
    
    HealthData.create(newHealthData, function(err, newHealthData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newHealthData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

// Crime route 
app.post('/crimeData', (req, res) => {

    var name = req.body.name;
    var area = req.body.area;
    var type = req.body.type;
    var rating = req.body.rating;

    var newCrimeData = {name : name, area:area, type : type, rating: rating};
    
    CrimeData.create(newCrimeData, function(err, newCrimeData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newCrimeData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

//Drug Data Route
app.post('/drugData', (req, res) => {

    var name = req.body.name;
    var area = req.body.area;
    var rating = req.body.rating;

    var newDrugData = {name : name, area: area, rating : rating};
    
    DrugData.create(newDrugData, function(err, newDrugData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newDrugData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

//Electricity Data Route
app.post('/electricityData', (req, res) => {

    var name = req.body.name;
    var cutDuration = req.body.cutDuration;
    var area = req.body.area;

    var newElectricityData = {name : name, cutDuration: cutDuration,area: area};
    
    ElectricityData.create(newElectricityData, function(err, newElectricityData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newElectricityData);
            res.redirect("http://localhost:3000/");
        }    
    });
});


app.post('/neighBourData', (req, res) => {

    var name = req.body.name;
    var area = req.body.area;
    var rating = req.body.rating;

    var newNeighBourData = {name : name, area: area, rating : rating};
    
    NeighBourData.create(newNeighBourData, function(err, newNeighBourData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newNeighBourData);
            res.redirect("http://localhost:3000/");
        }    
    });
});
//Road Conditions Route
app.post('/roadConditionData', (req, res) => {

    var name = req.body.name;
    var area = req.body.area;
    var type = req.body.type;
    var rating = req.body.rating;

    var newRoadConditionData = {name : name, area: area, type: type,rating : rating};
    
    RoadConditionData.create(newRoadConditionData, function(err, newRoadConditionData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newRoadConditionData);
            res.redirect("http://localhost:3000/");
        }    
    });
});
//Fire Data Route
app.post('/fireData', (req, res) => {

    var name = req.body.name;
    var location = req.body.location;
    var area = req.body.area;
    var rating = req.body.rating;


    var newFireData = {name : name, location: location,area: area, rating: rating};
    
    FireData.create(newFireData, function(err, newFireData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newFireData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

//Waste Data Route
app.post('/wasteData', (req, res) => {

    var name = req.body.name;
    var location = req.body.location;
    var area = req.body.area;
    var rating = req.body.rating;


    var newWasteData = {name : name, location: location,area: area, rating: rating};
    
    WasteData.create(newWasteData, function(err, newWasteData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newWasteData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

//Water Data
app.post('/waterData', (req, res) => {

    var name = req.body.name;
    var area = req.body.area;
    var condition = req.body.condition;
    var availibility = req.body.availibility;


    var newWaterData = {name : name, area: area, condition: condition, availibility: availibility};
    
    WaterData.create(newWaterData, function(err, newWaterData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newWaterData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

// Natural Calamity Route
app.post('/naturalCalamityData', (req, res) => {

    var name = req.body.name;
    var type = req.body.type;
    var area = req.body.area;
    var rating = req.body.rating;


    var newNaturalCalamityData = {name : name, type: type,area: area, rating: rating};
    
    NaturalCalamityData.create(newNaturalCalamityData, function(err, newNaturalCalamityData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newNaturalCalamityData);
            res.redirect("http://localhost:3000/");
        }    
    });
});


// Benefaction route 
app.post('/benefactionData', (req, res) => {

    var name = req.body.name;
    var location = req.body.location;
    var product = req.body.product;
    var contact = req.body.contact;
    var type = req.body.type;

    var newBenefactionData = {name : name, location:location, product : product, contact: contact, type: type};
    
    BeneficationData.create(newBenefactionData, function(err, newBenefactionData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newBenefactionData);
            res.redirect("http://localhost:3000/");
        }    
    });
});

app.get('/userDashboard', (req, res) => {
    res.render('./Dashboard/examples/dashboard');
})

app.listen('5000', () => {
    console.log('IGP server started.');
})