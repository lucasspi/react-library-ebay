import React from 'react'
import { EbayDataItem, EbayTextualDisplay } from 'ebayui-app-react'
import * as XS from 'digital-collections-types'
import './styles.less'
 
type BulletPointModuleProps = Omit<React.HTMLProps<HTMLDivElement>, 'data'> & {
  data: XS.StepsModule
}
export const BulletPointModule: React.FC<BulletPointModuleProps> = ({
  data
}: BulletPointModuleProps) => {
  console.log('data ss', data)

  if (data && data?.steps) {
    const { title, steps } = data

    return (
      <div className='bullet-steps'>
        {title && (
          <h2>
            <EbayTextualDisplay data={title} />
          </h2>
        )}
        <div className='step-list'>
          {steps?.map(({ icon, body, heading }, i: number) => (
            <div className='step' key={i}>
              <div>
                <div className={`${(!icon && 'bullet-point') || ''}`}>
                  {icon ? <EbayDataItem data={icon} /> : i + 1}
                </div>
              </div>
              <div className='text-step'>
                <h3>
                  <EbayDataItem data={heading} />
                </h3>
                <EbayDataItem data={body} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else return null
}
export default BulletPointModule
