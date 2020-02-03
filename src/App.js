import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import FormData from 'form-data'
import Swal from 'sweetalert2'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const audioList1 = [
  {
    name: '高尚',
    singer: '薛之谦',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: '//cdn.lijinke.cn/gaoshang.mp3'
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      )
    }
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3'
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3'
      )
    }
  },
  {
    name: '难得',
    singer: '安来宁',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: '//cdn.lijinke.cn/nande.mp3'
  }
]

const options = {
  // audio lists model
  audioLists: audioList1,
  theme: 'light',
  defaultPosition: {
    top: 500,
    left: 50
  }
}

function App () {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loaded, setLoaded] = useState(0)

  const onChangeHandler = (event) => {
    console.log(event.target.files[0])
    setSelectedFile(event.target.files[0])
    // setLoaded(1)
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

  const onClickHandler = () => {
    if (!selectedFile) {
      Swal.fire({
        title: '#ngungoc ?',
        text: 'Cam cần để file vào.',
        icon: 'error'
      })
      // return
    }

    setLoaded(1)

    onSubmit(selectedFile).then((res) => {
      Swal.fire({
        title: 'Đã ngồi đếm xong !',
        text: 'Số câu hỏi trong file là là là: ' + res.data,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#aaa',
        cancelButtonText: 'Ờ',
        confirmButtonText: 'Cảm ơn nha'
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: '',
            text: 'Tiền đếm tay của bé ba chăm',
            icon: 'success',
            timer: 3000
          })
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: 'Okay fine :)',
            text: ' ',
            icon: 'warning',
            timer: 3000
          })
        }
      }).catch((err) => {
        setLoaded(0)
        console.log(err)
      })
    })
  }

  return (
    <div className='container'>
      <h1>Đếm câu hỏi cho vui - chính xác 99%</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <form method='post' action='#' id='#'>

            <div className='form-group files'>
              <label>Upload Cam 's File </label>
              <input type='file' className='form-control' multiple='' onChange={onChangeHandler} />
              <button type='button' className='btn btn-success btn-block' onClick={onClickHandler} loading={loaded}>Upload</button>
            </div>

          </form>
        </div>
        <div className='flex-large'>
          <img src='wallLeft.jpg' width='500' height='600' alt='Wall' />
        </div>
        <ReactJkMusicPlayer {...options} />
      </div>
    </div>
  )
}

export default App
