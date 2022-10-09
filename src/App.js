import {Header, Posts, Users} from "./components";

import {Home} from "./components/Home/Home";
import {Routes,Route} from "react-router-dom";

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