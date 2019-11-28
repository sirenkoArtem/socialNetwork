import React from 'react'
import './Dialogs.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messages
        .map(m => <Message text={m.message} />)

    return (
        <div className="dialogs">
            <div className="dialogs-items">

                {dialogsElements}

            </div>
            <div className="dialogs-messages">

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs