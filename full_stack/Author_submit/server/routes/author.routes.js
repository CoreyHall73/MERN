const AuthorController = require("../controllers/author.controller")


module.exports = app => {
    //Test
    app.get("/api/authors/test", AuthorController.test);
    //Create
    app.post("/api/authors/new", AuthorController.create);
    //Read all
    app.get("/api/authors", AuthorController.get);
    //Read one
    app.get("/api/authors/:author_id", AuthorController.oneAuthor);
    //Update one
    app.put('/api/authors/:author_id', AuthorController.updateAuthor);
    //Delete
    app.delete('/api/authors/:author_id', AuthorController.deleteAuthor);
}