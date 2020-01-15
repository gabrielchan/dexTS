import React, { useState } from 'react';
import { Input } from 'react-native-elements';

const MessageInputBox: React.FC = () => {
  const[input, setInput] = useState('');
  return(
    <Input
      placeholder="Aa"
      onChangeText={(text) => setInput(text)}
      value={input}
    />
  );
};

export default MessageInputBox;