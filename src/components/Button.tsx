import React, { MouseEventHandler } from 'react';
import '../css/Button.css';
type buttonProps = {
  onClick: MouseEventHandler<HTMLDivElement>, 
  disabled?: boolean, 
  children?: React.ReactNode, 
  className?: string
}

const Button: React.FC<buttonProps> = ({onClick, disabled, children, className}) =>
    <div 
      className={disabled?'DisabledSelect ':'ClassSelect ' + className} 
      onClick={disabled?()=>{}:onClick}
    >
      {children}
    </div>

export default Button;