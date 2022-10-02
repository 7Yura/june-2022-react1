import {ADD1, DELETE1} from "./actions";
import {useReducer, useRef} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD1:
            const dog = action.payload.dog;
            const [lastDog] = state.slice(-1);
            const newId = lastDog ? lastDog.id + 1 : 0;
            const newVar = [...state, {id:newId, name: dog}];
            console.log(newVar);
            return newVar

        case DELETE1:
            const {id} = action.payload;
            const index = state.findIndex(dog => dog.id === id);
            state.splice(index, 1)
            return [...state]
    }
}

const useDogReducer = () => useReducer(reducer, []);

export {
    useDogReducer
}