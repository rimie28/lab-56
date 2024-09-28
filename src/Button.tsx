import {IngredientButtonType} from "./types.ts";


const IngredientButton = ({ingredient, addIngredient, deleteIngredient} : IngredientButtonType) => {
    return (
        <div key={ingredient.name} className="buttonDiv">
            <button className="addBtn" type="button" onClick={() => addIngredient(ingredient.name)}>
                <img className="buttonImg" src={ingredient.image} alt="ingredients"/>
                {ingredient.name}
            </button>
            <button className="deleteBtn" type="button"
                    onClick={() => deleteIngredient(ingredient.name)}>❌
            </button>
        </div>
    )
};

export default IngredientButton;