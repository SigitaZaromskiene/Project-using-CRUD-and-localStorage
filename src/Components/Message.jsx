function Message ({message}){

    return (<div className="messages">
        {message.map(m=><div className='message'>{m.text}</div>)}
    </div>)
}

export default Message