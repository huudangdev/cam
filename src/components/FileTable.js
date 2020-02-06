import React, { useState, useEffect } from 'react'
// display
const FileTable = ({ files, editRow, deleteRow }) => {
  const [totalQuestion, setTotalQuestion] = useState(0)
  useEffect(() => {
    const calSum = (files) => {
      let total = 0
      files.map((value) => {
        total += value.questions
      })
      return total
    }
    if (files.length > 0) setTotalQuestion(calSum(files)); else setTotalQuestion(0)
  }, [files])
  return (
    <table>
      <thead>
        <tr>
          <th>FILENAME</th>
          <th>TOTAL</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          (files.length > 0) ? (
            files.map((file, index) => {
              return (
                <tr key={file.id}>
                  <td>{file.name}</td>
                  <td>{file.questions}</td>
                  <td>
                    <button
                      className='button muted-button'
                      onClick={() => {
                        editRow(file)
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className='button muted-button'
                      onClick={() => { deleteRow(file.id) }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan={3}>No files</td>
            </tr>
          )
        }
      </tbody>
      <tfoot>
        <tr>
          <td><strong>Total Question</strong></td>
          <td>{totalQuestion}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default FileTable
