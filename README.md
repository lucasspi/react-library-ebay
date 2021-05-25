# ebayui-dc-react

> React Library of Digital Collections project for Front-end support

[![NPM](https://img.shields.io/npm/v/ebayui-dc-react.svg)](https://www.npmjs.com/package/ebayui-dc-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ebayui-dc-react
```

## Usage

```tsx
import React from 'react'
import { BulletPoint, MessageComponent } from 'ebayui-dc-react'

export const YourComponent: React.FC<any> = (data: any) => {

  return (
    <div>
      <BulletPoint {...data} />
      <MessageComponent {...data} />
    </div>
  )
  
}
```

## License

MIT © [lspirandeli](https://github.corp.ebay.com/lspirandeli)
