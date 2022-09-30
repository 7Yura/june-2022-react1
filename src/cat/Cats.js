import {CatForm} from "../animals/CatForm";

function Cat(cat) {
    return null;
}


const Cats = () => {
    const [cats, setCats] = useState([]);


    return (
        <div>
            <div><CatForm setCats={setCats}/></div>
            <div>
                {
                    cats.map((cat, index )=> <Cat key=index cat={cat}/>)
                }
            </div>
        </div>
    )
}
export {Cats};