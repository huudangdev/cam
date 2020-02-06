import React from 'react'
import { Train, Model, Dense } from 'tfjsx'

// Define a generator of train data
function * trainDataGenerator () {
  yield { x: 1, y: 100 }
  yield { x: 2, y: 41 }
  yield { x: 3, y: 165 }
}

const MyTrainedModel = () => {
  // Train the model with the training data generator defined above
  return (
    <Train
      trainData={trainDataGenerator}
      epochs={4}
      batchSize={3}
      samples={3}
      // onTrainEnd={model => model.describe()}
      train
      display
    >
      {/* Define the model architecture */}
      <Model optimizer='sgd' loss='meanSquaredError'>
        <Dense units={1} inputShape={[1]} />
      </Model>
    </Train>
  )
}

export default MyTrainedModel
