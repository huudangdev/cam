import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import DocumentForm from './DocumentForm'
import Modal from 'react-bootstrap/Modal'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { observer } from 'mobx-react'

function EditorPage ({ documentStore, history }) {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [doc, setDoc] = useState([])
  const [edit, setEdit] = useState(false)
  const [documents, setDocuments] = useState([])

  const onSubmit = (doc) => {
    if (documents.length === 0) doc.id = 1
    else doc.id = documents.length + 1
    setDocuments([...documents, doc])
    setOpenAddModal(false)
  }

  const onEdit = (id, newDoc) => {
    setDocuments(documents.filter(file => file.id !== id))
    getAllDocuments()
    if (documents.length === 0) newDoc.id = 1
    else newDoc.id = documents.length + 1
    setDocuments([...documents, newDoc])
    setOpenEditModal(false)
  }

  const openAddTemplateModal = () => {
    setOpenAddModal(true)
  }
  const closeAddModal = () => {
    setOpenAddModal(false)
    setOpenEditModal(false)
  }
  const cancelAddModal = () => {
    setOpenAddModal(false)
  }
  const cancelEditModal = () => {
    setOpenEditModal(false)
  }
  const getAllDocuments = async () => {
    setInitialized(true)
  }
  const editDocument = d => {
    setEdit(true)
    setDoc(d)
    setOpenEditModal(true)
  }
  const onSave = () => {
    cancelAddModal()
    cancelEditModal()
  }
  const deleteSingleDocument = id => {
    setDocuments(documents.filter(file => file.id !== id))
    getAllDocuments()
  }
  useEffect(() => {
    if (!initialized) {
      getAllDocuments()
    }
  })
  return (
    <div className='page'>
      <h1 className='text-center'>Documents</h1>
      <ButtonToolbar onClick={openAddTemplateModal}>
        <Button variant='primary'>Add Document</Button>
      </ButtonToolbar>
      <Modal show={openAddModal} onHide={closeAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DocumentForm
            onSave={onSave.bind(this)}
            cancelModal={cancelAddModal.bind(this)}
            documentStore={documentStore}
            onSubmit={onSubmit}
          />
        </Modal.Body>
      </Modal>
      <Modal show={openEditModal} onHide={cancelEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DocumentForm
            edit={edit}
            doc={doc}
            onSave={onSave.bind(this)}
            cancelModal={cancelEditModal.bind(this)}
            documentStore={documentStore}
            onEdit={onEdit}
          />
        </Modal.Body>
      </Modal>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Generate Question</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(d => {
            return (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>
                  <strong>{d.data}</strong>
                </td>
                <td>
                  <Button
                    variant='outline-primary'
                    onClick={editDocument.bind(this, d)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant='outline-primary'
                    onClick={deleteSingleDocument.bind(this, d.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
export default withRouter(observer(EditorPage))
