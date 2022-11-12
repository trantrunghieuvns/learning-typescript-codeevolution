import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';


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
    <div className="App flex flex-col items-center justify-center h-screen">
      <Status status='success' />
      <Greet messageCount={20} name='Hieu' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Oscar>
        <Heading children={''} />
      </Oscar>
    </div>
  );
}

export default App;
