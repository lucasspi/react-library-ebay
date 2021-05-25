import * as React from 'react'
import { SectionNotice } from 'skin-react'
import { EbayDataItem } from 'ebayui-app-react'

export const mapMessageType: Record<any, string> = {
  INFO: `information`,
  ERROR: `attention`,
  SUCCESS: `confirmation`,
  WARNING: ``
}
type MessageModuleProps = Omit<React.HTMLProps<HTMLElement>, 'data'> & {
  data: any
}
export const MessageModule: React.FC<any> = ({
  children,
  data,
  ...props
}: MessageModuleProps) => {
  if (!data.title?.textSpans?.length) {
    return null
  }
  const {
    title,
    footer,
    messageType,
    displayIcon,
    additionalText = [],
    accessibilityText
  } = data

  const mapMessageTypeElement: string = messageType
    ? mapMessageType[messageType]
    : ''
  return (
    <SectionNotice
      status={mapMessageTypeElement}
      a11yText={accessibilityText}
      icon={displayIcon}
      title={title && <EbayDataItem data={title} />}
      footer={footer && <EbayDataItem data={footer} />}
      {...props}
    >
      {additionalText.map((x: any, i: number) => (
        <EbayDataItem key={i} data={x} />
      ))}
      {children}
    </SectionNotice>
  )
}
export default MessageModule
