import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '74df1e1b-6626-4dac-a4e5-df95f35dccb8';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={chatAppProps => (
        <ChatFeed
          {...chatAppProps}
          onNewMessage={() =>
            new Audio(
              'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
            ).play()
          }
        />
      )}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
