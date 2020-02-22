import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import EditorPage from './Editor'
import TopBar from './components/TopBar'
import './App.css'
import Swal from 'sweetalert2'

const root = '/cam'

const App = () => {
  const [status, setStatus] = useState('')

  const handleOnClickHome = () => {
    setStatus('home')
  }

  const handleOnClickEditor = () => {
    setStatus('editor')
  }

  useEffect(() => {
    Swal.fire({
      title: 'Update lần này có gì ta ?',
      text: 'Tính năng editor convert docx to html. - Editor cải thiện tốc độ nhiều hơn. - Format text và edit trực tiếp trực quan.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#B0E0E6',
      cancelButtonColor: '#F4A460',
      cancelButtonText: 'E d i t o r',
      confirmButtonText: 'U p l o a d'
    }).then((result) => {
      if (result.value) {
        setStatus('home')
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        setStatus('editor')
      }
    })
  }, [])
  if (status === 'home') {
    return (
      <>
        <div className='App'>
          <TopBar handleOnClickHome={handleOnClickHome} handleOnClickEditor={handleOnClickEditor} />
          <HomePage />
        </div>
      </>)
  } else {
    return (
      <>
        <div className='App'>
          <TopBar handleOnClickHome={handleOnClickHome} handleOnClickEditor={handleOnClickEditor} />
          <EditorPage />
        </div>
      </>
    )
  }
}
export default App
