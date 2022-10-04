import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_COMMENTS, loadCommnets,LOAD_USERS} from "./index";
import {type} from "@testing-library/user-event/dist/type";

function App() {


    let state = useSelector(state => state.userReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
          dispatch(LOAD_COMMENTS(value));
        });

  }, []);

    return (<div>



  </div>);
}

export default App;