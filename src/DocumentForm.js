import React from 'react'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react'
import { Formik } from 'formik'
import { addDocument, APIURL } from './request'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Swal from 'sweetalert2'

const schema = yup.object({
  name: yup.string().required('Name is required')
})

function DocumentForm ({ documentStore, edit, onSave, doc, onSubmit, onEdit }) {
  const [content, setContent] = React.useState('')
  const [dirty, setDirty] = React.useState(false)
  const handleSubmit = async evt => {
    const isValid = await schema.validate(evt)
    if (!isValid || !content) {
      return
    }
    const contentSubmit = { text: content }
    if (!edit) {
      const { data } = await addDocument(contentSubmit)
      const newDoc = {
        name: evt.name,
        data,
        content
      }
      onSubmit(newDoc)
      Swal.fire({
        title: 'Success',
        text: 'Số câu hỏi đọc được là: ' + data,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Okay',
        timer: 10000
      })
    } else {
      const { data } = await addDocument(contentSubmit)
      const newDoc = {
        name: evt.name,
        data,
        content
      }
      onEdit(doc.id, newDoc)
      Swal.fire({
        title: 'Success',
        text: 'Số câu hỏi ở bản này là: ' + data,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Okay',
        timer: 10000
      })
    }
  }
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={doc || {}}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInvalid,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md='12' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={values.name || ''}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md='12' controlId='content'>
                <Form.Label>Content</Form.Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={content || ''}
                  onInit={editor => {
                    if (edit) {
                      setContent(doc.content)
                    }
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setContent(data)
                    setDirty(true)
                  }}
                  config={{
                    ckfinder: {
                      uploadUrl:
                        `${APIURL}/document/uploadImage`
                    }
                  }}
                />
                <div className='content-invalid-feedback'>
                  {dirty && !content ? 'Content is required' : null}
                </div>
              </Form.Group>
            </Form.Row>
            <Button type='submit' style={{ marginRight: 10 }}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
export default observer(DocumentForm)
