import {ADD, DELETE} from "./actions";
import {useReducer, useRef} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const cat = action.payload.cat;
            const [lastCat] = state.slice(-1);
            const newId = lastCat ? lastCat.id + 1 : 0;
            const newVar = [...state, {id:newId, name: cat}];
            console.log(newVar);
            return newVar

        case DELETE:
            const {id} = action.payload;
            const index = state.findIndex(cat => cat.id === id);
            state.splice(index, 1)
            return [...state]
    }
}

const useCatReducer = () => useReducer(reducer, []);

export {
    useCatReducer
}