import React from 'react';
import {useRef} from "react";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

const DogForm = () => {
    // const dog = useRef()
    const {register, handleSubmit, formState: { isValid}} = useForm({// resolver: joiResolver(carValidator),
        mode: 'all'
    });

    const submit2 = async (dog) => {
        console.log(dog);
        const {data} = await create(dog);
        setDogs(dogs => [...dogs, data])

    }

    return (
        <div>

                <form onSubmit={handleSubmit(submit2)}>
                    <input type="text" placeholder={'dog'} {...register('dog', {valueAsNumber: true})}/>
                    <button disabled={!isValid}>Save</button>
                </form>

        </div>
    );
};

export {DogForm};