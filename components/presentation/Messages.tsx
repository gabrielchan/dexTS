import React, { useState } from 'react';
import { 
  GiftedChat, 
  IMessage 
} from 'react-native-gifted-chat'

const Message: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[] | undefined>([]);

  const onSend = (newMessage: IMessage[] = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
  }
  
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{_id: 1}}
    />
  );
};

export default Message;