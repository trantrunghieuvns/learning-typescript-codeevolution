import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import { Oscar } from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './components/Input';
import Login from './state/Login';
import User from './state/User';
import { ReducerCounter } from './state/useReducer_Example/DispatchReducerAction';
import { ThemeContextProvider } from './state/useContext/ThemeContextExample';
import Box from './state/useContext/Box';
import { UserA } from './state/useContext/secondExample/UserA';
import { UserContextProvider } from './state/useContext/secondExample/UserContext';
import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/useState&MapArray/List';
import './App.css';
import Test from './components/useState&MapArray/BestTestSolution';
import LessonOne from './components/IndianFriend/LessonOne-PassingArray';
import LessonTwoMain from './components/IndianFriend/LessonTwo-PassingOnClickFunctionValueIndex';
import { LessonThree } from './components/IndianFriend/LessonThree';
import { UseEffectBasic } from './components/IndianFriend/Lesson4-Tut13';
import { UseEffectFetchAxiosX } from './components/IndianFriend/Lesson5-Tut14-FetchAxios';
import UseReducerEx from './components/IndianFriend/Lesson6-tut16-useReducer';
import ComponentA from './components/IndianFriend/RTK-Context&Reducer/RTK-Test';
import { useEffect, useReducer } from 'react';
import React from 'react';

//-----------rtk
import { useAppDispatch, useAppSelector } from './state/rtk/hooks/useTypedSelector';
import { getPosts, removePost } from './state/rtk/posts/postSlice';
import Loader from './state/RTK Components/Loader';
import PostCard from './state/RTK Components/PostCard';
import { useDispatch, useSelector } from 'react-redux';

type backUp = {
  resultArray: string[]
  people: string[]
  splice: any
  json: string
}

const initColor: string = '#000000'

const reducerMain = (state: string, action: string) => {
  switch (action) {
    case 'red': return state = '#ff0000';
    case 'green': return state = '00ff00';
    case 'blue': return state = '#0000ff';
    default: return state;
  }
};

type contextType = {
  color: string;
  action: React.Dispatch<string>;
}

const contextValue = {
  color: '#000000',
  action: (value: string) => value,
}
export const colorContext = React.createContext<contextType>(contextValue);
// * -----------------------------
const App = () => {

  const personName = {
    first: ' Buookc',
    last: 'Be scook'
  }
  const nameList = [
    {
      first: ' Brooke',
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
  const [color, dispatchColor] = useReducer(reducerMain, initColor);


  //-----------------------------------------------------------------
  //redux toolkit section

  //5. useAppDispatch():fire an action; useAppSelector(): take value out of state

  const dispatch = useAppDispatch(); //of thunk
  const actionDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const { data, error, loading } = useAppSelector(state => state);
  // >>>>>>get data here, pass loading, data by props > to components
  console.log('data', data)
  //redux toolkit section
  //-----------------------------------------------------------------
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
          <List items={['Batman', 'sip', 'heroic']} />
          <Oscar>
            <Heading children={''} />
          </Oscar>
          <Button />
          <Test
          />
          <Greet name='Vishmax' isLoggedIn={true} />
          <div className='shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <Input className="" value="Type here" handleChange={(event) => console.log(event)} />
          </div>
          <UserA />
          <LessonOne lang={nameList as []} />
          <LessonTwoMain />
          <LessonThree id={0} count={0} minus={0} />
          <UseEffectBasic />
          <UseEffectFetchAxiosX id={0} login={''} avatar_url={''} node_id={undefined} />
          <UseReducerEx />
          <ComponentA data={data} userId={0} id={0} title={''} body={''} loading={loading} />
        </div>

        <div className='rtk_Section'>
          <div className="container py-5">
            <div className="row">
              {loading ? (
                <Loader />
              ) : (
                data &&
                data.map((post) => (
                  <>
                    <div className="col-md-6 col-lg-4" key={post.id} onClick={() => actionDispatch(removePost(post.id))}>
                      <PostCard post={post} />
                    </div>
                  </>
                ))
              )}

            </div>
          </div>
        </div>

      </ThemeContextProvider >
    </UserContextProvider >
  );
}

export default App;
