class DBReader {
  constructor(documents) {
    this.documents = documents;
    this.idToDocuments = {};
    this.categoryToDocumentList = {};

    for (let doc of documents) {
      this.idToDocuments[doc.id] = doc;
      
      if (!this.categoryToDocumentList[doc.category])
        this.categoryToDocumentList[doc.category] = [];
      this.categoryToDocumentList[doc.category].push(doc);
    }
  }

  getAll() {
    return this.documents;
  }
  getById(id) {
    return this.idToDocuments[id];
  }
  getByCategory(category) {
    return this.categoryToDocumentList[category];
  }
}