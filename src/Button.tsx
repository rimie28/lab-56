import {IngredientButtonType} from "./types.ts";


const IngredientButton = ({ingredient, addIngredient} : IngredientButtonType) => {
    return (
                <div key={ingredient.name} className="buttonDiv">
                    <img className="buttonImg" src={ingredient.image} alt="ingredients"/>
                    <button onClick={() => addIngredient(ingredient.name)}>{ingredient.name}</button>
                </div>
    )
};

export default IngredientButton;