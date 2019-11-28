import React from 'react'

const Message = props => {

    let message = props.text

    return <div className="message">{message}</div>
}

export default Message