import {useState} from 'react';

function MessageList ( messages ) {
  MessageList
  return (
    <div>
      <h1>MessageList</h1>
      {/* <p>{ JSON.stringify( messages ) }</p> */}

      { messages.messages.map( (message, index )=>(
        <li key={index}>{message.name}: {message.text}</li>
      ))}
    </div>
  );

}

export default MessageList
