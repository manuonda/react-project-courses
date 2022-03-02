import { memo } from 'react';

const Title = ({ children }) => {
  console.log('rendering title', children)
  return (
    <h1>
      {children}
    </h1>
  )
}

export default memo(Title)
