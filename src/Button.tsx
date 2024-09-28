import {IngredientButtonType} from "./types.ts";


const IngredientButton = ({ingredient, addIngredient, deleteIngredient} : IngredientButtonType) => {
    return (
                <div key={ingredient.name} className="buttonDiv">
                    <img className="buttonImg" src={ingredient.image} alt="ingredients"/>
                    <button type="button" onClick={() => addIngredient(ingredient.name)}>{ingredient.name}</button>
                    <button className="deleteBtn" type="button" onClick={() => deleteIngredient(ingredient.name)}>❌</button>
                </div>
    )
};

export default IngredientButton;