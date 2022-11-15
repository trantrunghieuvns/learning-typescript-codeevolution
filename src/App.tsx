
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './components/Input';
import Container from './components/Container';
import Login from './state/Login';
import User from './state/User';
import { ReducerCounter } from './state/useReducer_Example/DispatchReducerAction';
import { ThemeContextProvider } from './state/useContext/ThemeContextExample';
import Box from './state/useContext/Box';
import { UserA } from './state/useContext/secondExample/UserA';
import { UserContextProvider } from './state/useContext/secondExample/UserContext';
import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generic/List';

function App() {
  const personName = {
    first: ' Buookc',
    last: 'Be scook'
  }

  const nameList = [
    {
      first: ' Buookc',
      last: 'Be zsook'
    },
    {
      first: ' Buookc',
      last: 'Be xsook'
    },
    {
      first: ' Buookc',
      last: 'Be qsook'
    },

  ]

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <div className="App grid grid-cols-12 items-center justify-center h-screen">
          <div>
            <Box />
          </div>
          <Status status='success' />
          <Greet messageCount={20} name='Hieu' isLoggedIn={true} />
          <Person name={personName} />
          <PersonList names={nameList} />
          <Private isLoggedinAuth={false} Component={Profile} />
          <Login />
          <User email={''} />
          <ReducerCounter />

          <List items={['Batman', 'sip', 'heroic']} onClick={(event) => console.log(event)} />

          <Oscar>

            <Heading children={''} />
          </Oscar>
          <Button />
          <Greet name='Vishmax' isLoggedIn={true} />
          <div className='shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <Input className="" value="Type here" handleChange={(event) => console.log(event)} />
          </div>
          <Container styles={{ backgroundColor: 'red', padding: '10px', margin: '10px' }} />
          <UserA />
        </div>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
