import React, { MouseEventHandler } from 'react';
import '../css/Button.css';

const Button: React.FC<{onClick: MouseEventHandler<HTMLDivElement>, disabled?: boolean, children?: React.ReactNode, className?: string}> = 
  ({onClick, disabled, children, className}) => !disabled 
    ? <div className={'ClassSelect ' + className} onClick={onClick}>{children}</div>
    : <div className={'DisabledSelect ' + className}>{children}</div>

export default Button;