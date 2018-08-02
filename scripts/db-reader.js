class DBReader {
  constructor(documents) {
    this.documents = documents;
    this.idToDocuments = {};

    for (let doc of documents) {
      if (!this.idToDocuments[doc.id]) { //if don't exist
        this.idToDocuments[doc.id] = doc;
      } else {
        console.log('[DEBUG]', 'duplicate id:', doc.id);
      }
    }
  }

  getAll() {
    return this.documents;
  }
  getById(id) {
    return this.idToDocuments[id];
  }
  getByCategory(category) {
    let returnDocs = [];
    for (let doc of this.documents) {
      if (doc.category && doc.category === category) {
        returnDocs.push(doc);
      }
    }
    return returnDocs;
  }
}