import { observable, action, decorate } from "mobx";
class DocumentStore {
  documents = [];
setDocuments(documents) {
    this.documents = documents;
  }
}
DocumentStore = decorate(DocumentStore, {
  documents: observable,
  setDocuments: action
});
export { DocumentStore };