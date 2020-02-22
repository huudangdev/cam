import React, { useState } from 'react'
import axios from 'axios'
import FormData from 'form-data'
import './App.css'

import UploadFile from './components/UploadFile'
import FileTable from './components/FileTable'

const HomePage = () => {
  const [files, setFiles] = useState([])

  const onChangeFile = (file) => {
  }

  const onAnalyticFile = (file) => {
    if (files.length === 0) file.id = 1
    else file.id = files.length + 1
    setFiles([...files, file])
  }

  const onSubmit = (file) => {
    const url = 'https://strapi-tungtung.herokuapp.com/questions/counter'
    const formData = new FormData()
    formData.append('files', file)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config)
  }

  const deleteRow = id => {
    setFiles(files.filter(file => file.id !== id))
  }

  return (
    <>
      <div className='container'>
        <div className='flex-row'>
          <div className='flex-large'>
            <UploadFile onChangeFile={onChangeFile} onSubmit={onSubmit} onAnalyticFile={onAnalyticFile} />
          </div>
          <div className='flex-large'>
            <label>ANALYTICS</label>
            <FileTable files={files} deleteRow={deleteRow} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
