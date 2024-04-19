
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const recipes = document.querySelectorAll('.card');
    recipes.forEach(recipeCard => {
        const recipeTitle = recipeCard.querySelector('.card-title').textContent.toLowerCase();
        if (recipeTitle.includes(searchTerm)) {
            recipeCard.style.display = 'block';
        } else {
            recipeCard.style.display = 'none';
        }
    });
}

document.getElementById('searchInput').addEventListener('input', handleSearch);

function downloadRecipe(recipeName) {
    const recipeCard = Array.from(document.querySelectorAll('.card-title')).find(card => card.textContent.trim() === recipeName);
    if (!recipeCard) {
        console.error(`Recipe '${recipeName}' not found.`);
        return;
    }

    const ingredientsList = recipeCard.parentElement.querySelector('ul'); // Select the ul element containing the ingredients
    const ingredients = Array.from(ingredientsList.querySelectorAll('li')).map(li => li.textContent);

    const text = `Recipe: ${recipeName}\n\nIngredients:\n${ingredients.map(ingredient => `- ${ingredient}`).join('\n')}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${recipeName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

const handleRefresh = () => {
    window.location.reload();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


