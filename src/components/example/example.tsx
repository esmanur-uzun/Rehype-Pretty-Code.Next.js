import React from 'react'
import Component1 from '../component1'
import { Code } from '@/rsc/code'

const Example = () => {
  return (
    <div>
      <Component1/>
    </div>
  )
}

const exampleCode = `
\`\`\`tsx
export function Component1Example(){
    return export function Component1Example(){
      return <Component1/>
  }
}
\`\`\`
`
export function ExampleCode(){
    return <Code code={exampleCode} />
}

export default Example



