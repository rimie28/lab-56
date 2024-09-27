import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ingredientsType, Ingridient} from './types'
import meatImage from './assets/meat.png'
import cheeseImage from './assets/cheese.png'
import lettuceImage from './assets/lettuce.png'
import baconImage from './assets/bacon.png'
import IngredientButton from "./Button.tsx";


const App = () => {

    const INGREDIENTS:Ingridient[] = [
        {name: 'Meat', price: 80, image: meatImage},
        {name: 'Cheese', price: 50, image: cheeseImage},
        {name: 'Lettuce', price: 10, image: lettuceImage},
        {name: 'Bacon', price: 60, image: baconImage}
    ]


    const [ingredients, setIngredients] = useState<ingredientsType[]>([
            {name: 'Meat', count: 0},
            {name: 'Cheese', count: 0},
            {name: 'Lettuce', count: 0},
            {name: 'Bacon', count: 0},
        ])
    ;

    const addIngredient = (name: string) => {
        const newCount = ingredients.reduce((acc:ingredientsType[], ingredient) => {
            if (ingredient.name === name) {
                acc.push({...ingredient, count: ingredient.count + 1})
            } else {
                acc.push(ingredient)
            }
            return acc;
        }, []);
        setIngredients(newCount)
    };

    return (
        <div className="container">
        <div className="buttonsDiv">
            {INGREDIENTS.map((ingredient) => {
                return (
                    <IngredientButton addIngredient={addIngredient} ingredient={ingredient} key={ingredient.name}
                    />
                )
            })}
        </div>
        </div>
    )
    }
;

export default App
