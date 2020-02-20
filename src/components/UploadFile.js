import React, { useState } from 'react'
import Swal from 'sweetalert2'
import ReactLoading from 'react-loading'

const optionsLoading = {
  type: 'cylon',
  color: '#000000',
  height: 200,
  width: 100
}

const UploadFile = ({ onChangeFile, onSubmit, onAnalyticFile }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(0)

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    onChangeFile(event.target.files[0])
  }

  const onClickHandler = () => {
    if (!selectedFile) {
      Swal.fire({
        title: 'Wrong!',
        text: 'Cần để file vào.',
        icon: 'error'
      })
    } else { setLoading(1) }

    onSubmit(selectedFile).then((res) => {
      setLoading(0)
      Swal.fire({
        title: 'Success',
        text: 'Số câu hỏi trong file là: ' + res.data,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#aaa',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Cập nhật'
      }).then((result) => {
        if (result.value) {
          onAnalyticFile({ name: selectedFile.name, questions: res.data })
          Swal.fire({
            title: '',
            text: 'Done',
            icon: 'success',
            timer: 3000
          })
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: 'Đã huỷ',
            text: ' ',
            icon: 'warning',
            timer: 3000
          })
        }
      }).catch((err) => {
        setLoading(0)
        console.log(err)
      })
    })
  }
  if (loading) {
    return (
      <>
        <form method='post' action='#' id='#'>
          <div className='form-group files'>
            <label>UPLOAD YOUR FILE</label>
            <ReactLoading {...optionsLoading} />
          </div>
        </form>
      </>
    )
  } else {
    return (
      <>
        <form method='post' action='#' id='#'>
          <div className='form-group files'>
            <label>UPLOAD YOUR FILE</label>
            <input type='file' className='form-control' multiple='' accept='.docx' onChange={onChangeHandler} />
            <button type='button' className='btn btn-success btn-block' onClick={onClickHandler}>Upload</button>
          </div>
        </form>
      </>
    )
  }
}

export default UploadFile
