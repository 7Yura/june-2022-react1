import {Routes,Route} from "react-router-dom";

import {Header, Posts, Users} from "./components";
import {Home} from "./components/Home/Home";


const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'posts'} element={<Posts/>}/>
            </Routes>
            {/*<Users/>*/}
            {/*<Posts/>*/}

        </div>
    );
};

export {App};