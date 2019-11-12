import React from 'react'

const Title = (props) => {
  const level = props.level ? props.level : 1
  const style = {
    fontSize: 40,
    margin: '40px 0',
    padding: 0,
    lineHeight: 1,
    fontWeight: 300
  }

  return (
    <div className="container">
      { React.createElement(`h${level}`, { style: style }, props.children) }
    </div>
  )
} 

export default Title
