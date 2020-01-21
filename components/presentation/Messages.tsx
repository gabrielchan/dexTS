import React, { useState, useEffect } from 'react';
import { 
  GiftedChat, 
  IMessage,
  Bubble, 
} from 'react-native-gifted-chat'

const systemMessage = {
  _id: 'Default System Message',
  text: 'Hello!\nLooks like something is on your mind! Go ahead and tell me all about it, I\'m here to listen. I am a forgetful robot so I won\'t remember anyways!',
  createdAt: new Date(),
  user: {
    _id: 'System',
    name: 'Robot'
  }
}

const Message: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[] | undefined>([systemMessage]);

  const onSend = (newMessage: IMessage[] = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
  }
  
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{_id: 'User'}}
    />
  );
};

export default Message;