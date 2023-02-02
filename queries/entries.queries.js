const getAllEntriesQuery = `SELECT * FROM entries;`;
const getEntryByEmailQuery = `
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author=a.id_author
WHERE a.email=$1
ORDER BY e.title;`;
const createEntryQuery = `INSERT INTO entries(title,content,id_author,category) 
VALUES ($1,$2,
(SELECT id_author FROM authors WHERE email=$3),$4)`;
const deleteEntry = `DELETE FROM entries
WHERE title=$1`;
const updateEntry = `UPDATE entries SET title=$1, content=$2, category=$3 WHERE title=$4`;

module.exports = {
    getAllEntriesQuery,
    getEntryByEmailQuery,
    createEntryQuery,
    deleteEntry,
    updateEntry
}