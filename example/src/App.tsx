import React from 'react'

import { BulletPoint } from 'ebayui-dc-react'
import 'ebayui-dc-react/dist/index.css'
import mocks from './mocks.json'

const App = () => {
  return <BulletPoint {...mocks.modules.BULLET_POINT_SUMMARY} />
}

export default App
