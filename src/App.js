
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import './App.css'




function App() {
  return (
   <div>
       <div className={'users_posts'}>
           <Users/>
           <hr/>
           <Posts/>
       </div>
       <hr/>
       <div className={'comments'}>
           <Comments/>
       </div>

   </div>

  );
}

export default App;
