const pool = require('../utils/db_pgsql');

const authorsQueries = require('../queries/author.queries')

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorsQueries.getAllAuthorsQuery)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorsQueries.getAuthorByEmailQuery , [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorsQueries.createAuthorQuery
            , [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE 
const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorsQueries.deleteAuthor,
            [email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

//UPDATE
const updateAuthor = async (author) => {
    const { name, surname, image, email } = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorsQueries.updateAuthor,
            [name, surname, image, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}


const authors = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    deleteAuthor,
    updateAuthor
}

module.exports = authors;