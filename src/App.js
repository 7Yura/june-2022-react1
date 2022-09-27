import './App.css';
import {
    Route,
    Routes,
    Link
} from "react-router-dom";

import {Home} from "./components/home/Home";
import {Todos} from "./components/todos/Todos";
import {Comments} from "./components/comments/Comments";
import PostDetails from "./components/postDetails/PostDetails";

function App() {


  return (<div>
<h3>Menu</h3>
    <ul>
      <li><Link to={'/'}>Home page</Link></li>
      <li><Link to={'/todos'}>todos page</Link></li>
      <li><Link to={'/comments'}>comments page</Link></li>
    </ul>
<hr/>
      <h3> Content</h3>
    <Routes>

      <Route path={'/'} element={<Home/>}/>
      {/*<Route index element={<Home/>}/>*/}
      <Route path={'todos'} element={<Todos/>}/>
      {/*<Route path={'/albums'} element={}/>*/}
      <Route path={'comments'} element={<Comments/>}>
        <Route path={':id'} element={<PostDetails/>}/>
    </Route>
    </Routes>
  </div>);
}

export default App;