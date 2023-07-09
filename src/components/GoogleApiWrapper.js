import React from 'react'

function MyComponent() {
  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d563.7118405094749!2d13.02263426971507!3d55.58726499831398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTXCsDM1JzE0LjIiTiAxM8KwMDEnMjMuOCJF!5e0!3m2!1sen!2sse!4v1688901396594!5m2!1sen!2sse"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  />
  )
}

export default React.memo(MyComponent)