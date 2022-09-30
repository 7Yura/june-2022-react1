import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
const CatForm = () => {
    const cat = useRef()
        const {register, handleSubmit, formState: { isValid}} = useForm({// resolver: joiResolver(carValidator),
            mode: 'all'
        });
    const submit1 = (e) => {
        e.preventDefault()
        const data = {cat: cat.current.value}
        console.log(data)
    }

return (
        <div>

            <form onSubmit={(submit1)}>
                <input type="text" placeholder={'cat'} ref={cat}/>
                <button disabled={!isValid}>Save</button>
            </form>


        </div>

);
};

export
    {
        CatForm
    };