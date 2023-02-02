const getAllAuthorsQuery = `SELECT * FROM authors;`;
const getAuthorByEmailQuery = `
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author=a.id_author
WHERE a.email=$1
ORDER BY a.name;`;
const createAuthorQuery = `INSERT INTO authors(name,surname,id_author,image) 
                                    VALUES ($1,$2,
                                    (SELECT id_author FROM authors WHERE email=$3),$4)`;
const deleteAuthor = `DELETE FROM authors
WHERE email=$1`;
const updateAuthor = `UPDATE entries SET title=$1, content=$2, category=$3 WHERE email=$4`;

module.exports = {
    getAllAuthorsQuery,
    getAuthorByEmailQuery,
    createAuthorQuery,
    deleteAuthor,
    updateAuthor
}