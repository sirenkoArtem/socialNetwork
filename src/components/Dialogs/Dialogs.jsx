import React from 'react'
import './Dialogs.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {

    let path = "/dialogs/" + props.id;

    return (
        <div className="dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = props => {

    let message = props.text

    return <div className="message">{message}</div>
}

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">

                <DialogItem name="Denis" id="1" />
                <DialogItem name="Artem" id="2" />
                <DialogItem name="Tanya" id="3" />
                <DialogItem name="Yaroslav" id="4" />
                <DialogItem name="Rostyslav" id="5" />
                <DialogItem name="Sveta" id="6" />

            </div>
            <div className="dialogs-messages">
                <Message text="Hi" />
                <Message text="How R U?" />
                <Message text="Yeah" />
            </div>
        </div>
    )
}

export default Dialogs