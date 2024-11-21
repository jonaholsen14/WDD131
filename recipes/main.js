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

    let recipe = recipeList[generate_random_number(recipeList.length)]
    recipesSection.innerHTML += `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Author: ${recipe.author}</p>
            <p>Cook Time: ${recipe.cookTime}</p>
            <p>Prep Time: ${recipe.prepTime}
            <div class="rating">
                ${display_rating(recipe.rating)}
            </div>
            <p class="description">${recipe.description}</p>
            <div class="tags">
                ${display_tags(recipe.tags)}
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
}

function generate_random_number(n) {
    return Math.floor(Math.random() * n);
}

function display_tags(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')
}

function display_rating(rating) {
    console.log(rating)
    if (rating === 0) {
        return 'No rating'
    }
    else if (rating.isInteger) {
        return '⭐'.repeat(rating)
    }
    else {
        return '⭐'.repeat(Math.floor(rating)) + create_emoji_half()
    }
}

// bro this doesn't even work why is there not a half star emoji that doesn't even makie seanse.
function create_emoji_half() {
    return '1/2'
}

document.getElementById("search-button").addEventListener("click", search);

function search(event) {
    event.preventDefault();
    const query = document.getElementById("search").value.toLowerCase();
    console.log(query)
    const filteredRecipes = recipes.filter(recipefilter);
    displayRecipes(filteredRecipes);
    console.log(filteredRecipes)

    //this code is an absolute mess but I just want to move on.

    function recipefilter(recipe) {
        return recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query) || recipe.tags.find((item) => item.toLowerCase().includes(query)) || recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))
    }
}


// When the "search" button is clicked, do the following:

// Get whatever was typed into the search input and convert it all to lowercase. (Javascript comparing is case sensitive)
// Pass the query string into a filterRecipes(query) function.
// In that function use Array.filter to filter our recipes. You should check to see if the search term (query) shows up in the name, or the descriptions, or the tag list, or the ingredients list.
// Sort the list of recipes by name alphabetically.
// Render the filtered list of recipes to the page.
// Begin by attaching an event listener to our search button that will call a function searchHandler when it is clicked. Inside of that function you may need to call event.preventDefault() if you have problems with the page reloading. See below for more tips:

// You can use String.toLowerCase() to convert the input into all lower case.
// You can check to see if a substring is inside another string with something like this recipe.name.toLowerCase().includes(query). That will return a truthy or falsey value.
// To check to see if a string is found inside an array of strings it's a bit more complicated. You have to loop somehow through each item in the array and do a check. Array.find works great for this. Here is another example: recipe.tags.find((item) => item.toLowerCase().includes(query))
// You can chain conditions together with the logical OR ||