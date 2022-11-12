import './App.css';
import UserCard from './components/user-card/UserCard';
import Comment from './components/comment/Comment';
import data from './dummy-data.json';

function App() {
  // filter

  return (
    <div>
      {
          data.filter(i => i.networth >= 200).map(({firstName, avatar, networth, cars}, index) => 
            <UserCard 
              key={index}
              firstName={firstName} 
              avatar={avatar} 
              networth={networth}
              mashinalar={cars}
            />  
          )
      }
      <Comment />
    </div>
  );
}

export default App;
