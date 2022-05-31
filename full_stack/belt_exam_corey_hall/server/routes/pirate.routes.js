const PirateController = require("../controllers/pirate.controller")

module.exports = app => {
    //Test
    app.get("/api/pirate/test", PirateController.test);
    //Create
    app.post("/api/pirates/new", PirateController.create);
    //Read all
    app.get("/api/pirates", PirateController.get);
    //Read one
    app.get("/api/pirates/:pirate_id", PirateController.onePirate);
    //Delete
    app.delete('/api/pirates/:pirate_id', PirateController.deletePirate);
}