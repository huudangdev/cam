import React from 'react'
// display
const FileTable = ({ files, editRow, deleteRow }) => {
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
            files.map((file, index) => (
              <tr key={index}>
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
                    onClick={() => deleteRow(file.id)}
                  >
                                Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No files</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default FileTable
