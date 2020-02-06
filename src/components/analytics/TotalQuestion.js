import React, { useEffect, useState } from 'react'

const TotalQuestion = ({ files, editRow, deleteRow }) => {
  const [totalQuestion, setTotalQuestion] = useState({})
  useEffect(() => {
    const calSum = (files) => {
      const total = files.reduce((accumulator, currentValue) => accumulator.questions + currentValue.questions)
      return total
    }
    if (files.length > 0) setTotalQuestion(calSum(files))
  }, [files])
  return (
    {(files.length > 0) ? () => (
    <tfoot>
      <tr key={files.length}>
        <td>Total Question</td>
        <td>{totalQuestion}</td>
      </tr>
    </tfoot>) : () => (<div></div>)
    })
}

export default TotalQuestion
