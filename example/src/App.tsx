import React from 'react'

import { BulletPoint, MessageComponent } from 'ebayui-dc-react'
import 'ebayui-dc-react/dist/index.css'
import mocks from './mocks.json'

const App = () => {
  return (
    <div>
      <BulletPoint {...mocks.modules.BULLET_POINT_SUMMARY} />
      <MessageComponent {...mocks.modules.NOTIFICATION} />
    </div>
  )
}

export default App
