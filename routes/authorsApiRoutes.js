const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsApiController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/',authorsApiController.getAuthors);
authorsApiRouter.post('/',authorsApiController.createAuthor);
authorsApiRouter.delete('/',authorsApiController.deleteAuthor);
authorsApiRouter.put('/',authorsApiController.updateAuthor);

module.exports = authorsApiRouter;