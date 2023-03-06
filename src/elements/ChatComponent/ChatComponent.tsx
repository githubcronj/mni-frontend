import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from '../../Assets/image/forwardArrow.svg';
import ChatButton from './ChatButton';
import "./ChatComponent.css"

function ChatComponent() {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div>
        {/* <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        /> */}
<ChatButton/>
      </div>
    );
}

export default ChatComponent;