import React, { ReactNode } from 'react'

const Container: React.FC<{children: ReactNode}> = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>{props.children}</div>
  )
}

export default Container