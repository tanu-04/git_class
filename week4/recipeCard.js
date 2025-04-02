
const readline3 = require('readline');

const rl3 = readline3.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function recipeUserInput() {
  rl3.question('Enter the recipe title: ', (title) => {
    rl3.question('Enter the number of servings: ', (servingsInput) => {
      const servings = parseInt(servingsInput);
      const ingredients = [];

      function getIngredient() {
        rl3.question('Enter an ingredient (or type "done"): ', (ingredient) => {
          if (ingredient.toLowerCase() === 'done') {
            const recipe = {
              title: title,
              servings: servings,
              ingredients: ingredients,
            };
            console.log(recipe.title);
            console.log(`Serves: ${recipe.servings}`);
            console.log('Ingredients:');
            recipe.ingredients.forEach((ing) => console.log(ing));
            rl3.close();
          } else {
            ingredients.push(ingredient);
            getIngredient();
          }
        });
      }
      getIngredient();
    });
  });
}

recipeUserInput();