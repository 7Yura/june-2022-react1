export default function Launch(props) {
    let {item: launch} = props;

    return (<div>

        <p>{launch.mission_name} <br/> {launch.launch_year} <br/> {launch.links.mission_patch_small}</p>


    </div>);
}