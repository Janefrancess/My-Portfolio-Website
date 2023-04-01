import React from 'react';

const Card = ({children, className, onClick}) => {
  return (
    <div>
        <article className={'card ${className}'} onClick={onClick}>
          {children}
        </article>
    </div>
  )
}

export default Card;
