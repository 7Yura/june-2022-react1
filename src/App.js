import {useRef} from "react";
import {ADD, DELETE,ADD1,DELETE1, useCatReducer, useDogReducer} from "./reducers";
import css from "./reducers/hi.module.css"
const App = () => {
    const catRef = useRef();
    const [state, dispatch] = useCatReducer();

    const addCat = () => {
        const newCat = catRef.current.value;
        dispatch({type: ADD, payload: {cat: newCat}})
    }
    const dogRef = useRef();
    const [state1, dispatch1] = useDogReducer();

    const addDog = () => {
        const newDog = dogRef.current.value;
        dispatch1({type: ADD1, payload: {dog: newDog}})
    }
    return (
        <div className={css.hi}>
            <div>
               <h2> Add cat:  <input type="text" ref={catRef} placeholder={'cat name'}/>
                <button onClick={addCat}>Add</button></h2>

                {state.map(cat => <div key={cat.id}>
                    {cat.name}
                    <button onClick={()=>dispatch({type:DELETE, payload: {id:cat.id}})}>Delete</button>
                </div>)}
            </div>
            <div>
                <h2> Add dog:  <input type="text" ref={dogRef} placeholder={'dog name'}/>
                <button onClick={addDog}>Add</button></h2>

                {state1.map(dog => <div key={dog.id}>
                    {dog.name}
                    <button onClick={()=>dispatch1({type:DELETE1, payload: {id:dog.id}})}>Delete</button>
                </div>)}
            </div>
        </div>
    );
};

export {App};