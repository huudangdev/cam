import React, { useState } from 'react'
import axios from 'axios'
import FormData from 'form-data'
import './App.css'

import MusicPlayer from './components/MusicPlayer'
import UploadFile from './components/UploadFile'
import FileTable from './components/FileTable'

function App () {
  const [files, setFiles] = useState([])

  // async function run () {
  //   // Load and plot the original input data that we are going to train on.
  //   const values = files.map(d => ({
  //     x: d.level,
  //     y: d.questions
  //   }))
  //   tfvis.render.scatterplot(
  //     { name: 'No.of level & questions' },
  //     { values },
  //     {
  //       xLabel: 'No. of Level',
  //       yLabel: 'Questions',
  //       height: 300
  //     }
  //   )
  //   // More code will be added below
  // }

  const onChangeFile = (file) => {
  }

  const onAnalyticFile = (file) => {
    // if (files.length > 0) files.pop()
    setFiles([...files, file])
    // const totalQuestions = files.reduce((accumulator, currentValue) => accumulator + currentValue.questions)
    // setFiles([...files, { name: 'Tổng cộng', questions: totalQuestions }])
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
  console.log(files)

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
          <MusicPlayer theme='light' top={500} left={50} auto={false} />
        </div>
      </div>
    </>
  )
}

export default App
