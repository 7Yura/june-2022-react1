import {useEffect, useState} from "react";
import {getLaunchesAxios} from "../../services/user.api.axios.service";

import Launch from "../lauch/Launch";

export default function Launches() {
    let [launches, setLaunches] = useState([]); // [[],set()]


    useEffect(() => {

        getLaunchesAxios().then(({data}) =>{
            const filter = data.filter(launch =>launch.flight_number < 87 );
            setLaunches(filter)        }
        )
    }, []);


    return (<div>

            {launches.map((launch, index) => (<Launch item={launch} key={index}/>))}

    </div>);
}