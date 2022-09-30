
import {CatForm} from "./animals/CatForm";
import {DogForm} from "./animals/DogForm";

const App = () => {

    return (
        <div>
            <div>
                <h2><CatForm/></h2>
            </div>
            <div>
                <h2><DogForm/></h2>
            </div>
        </div>
    );
};

export {App};