import {ingredientsType} from "./types.ts";

const Burger = ({ingredients}:{ingredients: ingredientsType[]}) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map((ingredient, index) => {
                if (ingredient.count > 0) {
                    return (
                        <div key={index} className={ingredient.name}></div>
                    )
                } else {
                    return null;
                }
            })}
            <div className="BreadBottom"></div>
        </div>
    )
};

export default Burger;