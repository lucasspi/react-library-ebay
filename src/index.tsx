import * as React from 'react'
import { BulletPointModule } from './BulletPointModule'
import { MessageModule } from './MessageModule'

export const BulletPoint = (data: any) => {
  return <BulletPointModule data={data} />
}

export const MessageComponent = (data: any) => {
  return <MessageModule data={data} />
}
