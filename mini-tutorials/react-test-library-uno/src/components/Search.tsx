import React from 'react'

interface IProps {
    value : any,
    onChange:  any,
    children : any
}

export const Search = ({value, onChange, children}: IProps) => {
  return (
    <div>
    <label htmlFor="search">{children}</label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
    
  )
}

export default Search;
