var express = require("express");
//var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;


var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://carlos:carlos@ds161485.mlab.com:61485/zipsdb';

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(url, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");
  // Initialize the app.
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  }).on('error', function(err){
    console.log('on error handler');
    console.log(err);
  });
});

// API services below

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.use(express.static('views'));

/*  "/maindb"
 *    GET: finds all maindb
 *    POST: creates a new contact
 */
app.get("/maindb", function(req, res) {
  db.collection("maindb").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get maindb.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/etiquetasquerer"
 *    GET: finds all etiquetasquerer
 *    POST: creates a new contact
 */
app.get("/etiquetasquerer", function(req, res) {
  db.collection("etiquetas_querer").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get etiquetasquerer.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/etiquetassociales"
 *    GET: finds all etiquetassociales
 *    POST: creates a new contact
 */
app.get("/etiquetassociales", function(req, res) {
  db.collection("etiquetas_sociales").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get etiquetassociales.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/tarifarioitau"
 *    GET: finds all tarifarioitau
 *    POST: creates a new contact
 */
app.get("/tarifarioitau", function(req, res) {
  db.collection("tarifarioitau").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get tarifarioitau.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/quetiene"
 *    GET: finds all quetiene
 *    POST: creates a new contact
 */
app.get("/quetiene", function(req, res) {
  db.collection("que_tiene").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get quetiene.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/queofrecer"
 *    GET: finds all queofrecer
 *    POST: creates a new contact
 */
app.get("/queofrecer", function(req, res) {
  db.collection("que_ofrecer").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get queofrecer.");
    } else {
      res.status(200).json(docs);
    }
  });
});