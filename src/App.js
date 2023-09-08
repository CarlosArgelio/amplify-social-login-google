import logo from './logo.svg';
import './App.css';

import { Amplify, Auth } from 'aws-amplify';

import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
        >Sign in with google</button>
        <button
          onClick={() => Auth.federatedSignIn()}
        >Sign in</button>
      </header>
    </div>
  );
}

export default App;
