import recipes from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    displayRecipes(recipes);
});

/**
 * Displays recipes on the page
 * @param {Array} recipeList - Array of recipe objects to display
 */
function displayRecipes(recipeList) {
    const recipesSection = document.getElementById("recipes");
    recipesSection.innerHTML = '';

    recipeList.forEach(recipe => {
        // this was formatted with copilot, I am NOT writing lambda functions casually
        recipesSection.innerHTML += `
            <div class="recipe">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>Author: ${recipe.author}</p>
                <p>Cook Time: ${recipe.cookTime}</p>
                <p>Prep Time: ${recipe.prepTime}casually                <div class="rating">
                    ${[...Array(5)].map((_, i) => `<span aria-hidden="true" class="${i < recipe.rating ? 'icon-star' : 'icon-star-empty'}">⭐</span>`).join('')}
                </div>
                <p class="description">${recipe.description}</p>
                <div class="tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                </div>
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul>${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                </div>
                <div class="instructions">
                    <h3>Instructions</h3>
                    <ol>${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
                </div>
                <p>Yield: ${recipe.recipeYield}</p>
            </div>
        `;
    });
}
