const author = require('../models/authors');

const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con las entries encontradas
}

// Crear author por email
const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {title,content,email,category}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({ message: `usuario creado: ${newAuthor.email}` });
}

// Borrar author por email
const deleteAuthor = async (req, res) => {
    if (req.query.email) {
        await author.deleteAuthor(req.query.email);
        res.status(200).json({ message: `usuario borrado "${req.query.email}"` });
    } else {
        res.status(400).json({ message: `Introduce un email válido` })
    }

}

// Modificar author por título
const updateAuthor = async (req, res) => {
    const newAuthor = req.body;
    const response = await author.updateAuthor(newAuthor);
    res.status(201).json({
        message: `usuario borrado "${newAuthor.email}"`,
        data: response
    });
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}