module.exports = (app) => {
    const document = require('./document.controller.js');

    // Create a new Document
    app.post('/document', document.create);

    // Retrieve all Document
    app.get('/document', document.findAll);

    // Retrieve a single Document with documentId
    app.get('/document/:documentId', document.findOne);

    // Update a Document with documentId
    app.put('/document/:documentId', document.update);

    // Delete a Document with documentId
    app.delete('/document/:documentId', document.delete);
}