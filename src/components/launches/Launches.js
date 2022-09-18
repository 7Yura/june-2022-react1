import {useEffect, useState} from "@types/react";
import {getLaunchesAxios} from "../../services/user.api.axios.service";
// import User from "../user/User";
import Launch from "../lauch/Launch";

export default function Launches() {
    let [launches, setLaunches] = useState([]); // [[],set()]
    // let [launch, setLaunch] = useState(null);
    //
    // const lift = (obj) => {
    //     setLaunch(obj);
    // }


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value);
    //             console.log(value);
    //         });
    // }, []);


    useEffect(() => {
        // getUsers().then(value => setUsers(value));
        getLaunchesAxios().then(value => setLaunches(value))
    }, []);


    return (<div>
            {/*<hr/>*/}
            {/*{user &&  <div>{JSON.stringify(user)}</div> }*/}
            {/*{user? <div>asdfyagsd</div>:<div>qwuyeqywteu</div>}*/}
            {(launch && (launch.launch_year !== 2020))?
                 launches.map((launch, index) => ((<Launch
                    item={launch}
                    key={index}/>
                 ))
            }


            {/*((user, index) => (<User*/}
            {/*item={user}*/}
            {/*key={index}*/}
            {/*lift={lift}/>))}*/}
            {/*<hr/>*/}

            {/*{launches*/}
            {/*    .map((launch, index) => (<Launch*/}
            {/*        item={launch}*/}
            {/*        key={index}*/}
            {/*         />))}*/}


    </div>);
}