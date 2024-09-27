export type Ingridient = {
    name: string;
    price: number;
    image: string;
}

export type IngredientButtonType = {
    ingredient: Ingridient,
    addIngredient: (name:string) => void,
}

export type ingredientsType = {
    name: string;
    count: number;
}

