import React, { useState } from 'react';
import {
  GiftedChat,
  IMessage,
  Bubble,
  BubbleProps,
  Time,
  TimeProps,
  InputToolbar,
  InputToolbarProps,
  Composer,
  ComposerProps,
} from 'react-native-gifted-chat'
import DarkThemeColors from '../../config/themes/DarkThemeColors'

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
  };

  const renderTime = (props: TimeProps<IMessage>) => {
    return (
      <Time
        {...props}
        timeTextStyle={
          {
            left: { color: 'white' },
            right: { color: DarkThemeColors.onPrimary }
          }
        }
      />
    );
  };

  const renderBubble = (props: BubbleProps<IMessage>) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={
          {
            left: { backgroundColor: 'darkgrey' },
            right: { backgroundColor: DarkThemeColors.primary }
          }
        }
        textStyle={
          {
            left: { color: 'white' },
            right: { color: DarkThemeColors.onPrimary }
          }
        }
      />
    )
  };

  const renderInputToolbar = (props: InputToolbarProps) => {
    return(
      <InputToolbar
        {...props}
        primaryStyle={{ backgroundColor: DarkThemeColors.surface }}
        renderComposer={props => (
          <Composer
            {...props}
            textInputStyle={{color: DarkThemeColors.onSurface}}
          />
        )}
      />
    )
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{ _id: 'User' }}
      renderBubble={renderBubble}
      renderTime={renderTime}
      renderInputToolbar={renderInputToolbar}
    />
  );
};

export default Message;