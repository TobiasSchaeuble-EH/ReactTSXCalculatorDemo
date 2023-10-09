import React, { FunctionComponent } from 'react'
import "./Display.scss"

interface DisplayProps {
  hasMemory: boolean
  expression: string
  value: string
}

export const Screen: FunctionComponent<DisplayProps> = ({ value, hasMemory, expression }) => {
  return (
    <div className="display">
    <div className="top-section">
      {hasMemory && <span className="memory-indicator">M</span>}
      <span className="expression">{expression}</span>
    </div>
    <div className="value">
      {value}
    </div>
</div>
  )
}

export default Screen
