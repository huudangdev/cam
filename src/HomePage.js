import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FormData from 'form-data'
import './App.css'
import Swal from 'sweetalert2'

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

  useEffect(() => {
    Swal.fire({
      title: 'Update lần này có gì ta ?',
      text: 'Tính năng editor convert docx to html. - Editor cải thiện tốc độ nhiều hơn. - Format text và edit trực tiếp trực quan.',
      icon: 'info',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Okay',
      timer: 10000
    })
  }, [])

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
