import './App.css';
// import Users from "./components/users/Users";
// import UserChoser from "./components/user-choser/UserChoser";
import {
    Route,
    Routes,
    Link
} from "react-router-dom";

import {Home} from "./components/home/Home";
// import Users from "./components/users/Users";
import {Todos} from "./components/todos/Todos";

function App() {


  return (<div>

    <ul>
      <li><Link to={'/'}>Home page</Link></li>
      <li><Link to={'/todos page'}>todos page</Link></li>
      <li><Link to={'/albums page'}>albums page</Link></li>
    </ul>
<hr/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      {/*<Route index element={<Home/>}/>*/}
      <Route path={'todos page'} element={<Todos/>}/>
      {/*<Route path={'/albums page'} element={}/>*/}
    </Routes>
  </div>);
}

export default App;