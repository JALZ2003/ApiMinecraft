import Recipe from "../../models/Recipe.js";

export default async (req, res, next) => {
    try {
        console.log('[CONTROLLER]: Controller to obtain the recipes');
        console.log('[CONTROLLER]: Finding Recipes...');
        const recipes = await Recipe.find();
        console.log('[CONTROLLER]: Recipes found... ->', recipes.length);
        return res.status(200).json({
            success: true,
            response: recipes,
            message: "Recipes Found!!"
        });
    } catch (error) {
        return next(error);
    }
}