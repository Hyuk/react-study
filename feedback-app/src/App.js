import React from 'react'

function App() {
  // return React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My App'))
  const title = 'Blog Post'
  const body = 'This is my blog post'

  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default App
