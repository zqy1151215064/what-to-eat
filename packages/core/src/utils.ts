import type { Ingredient, Recipe, RecipeIngredient, Mood } from './types';

/**
 * Business logic utilities for the WhatToEat app
 */

/**
 * Check if a recipe can be made with available ingredients
 */
export function canMakeRecipe(
  recipe: Recipe,
  availableIngredients: Ingredient[]
): boolean {
  const availableMap = new Map(
    availableIngredients.map(ing => [ing.id, ing])
  );

  return recipe.ingredients.every(recipeIng => {
    const available = availableMap.get(recipeIng.ingredientId);
    if (!available) return false;
    
    // Simple check - in real app, would need unit conversion
    return available.quantity >= recipeIng.quantity;
  });
}

/**
 * Calculate match score for a recipe based on available ingredients
 * Returns a score between 0 and 1
 */
export function calculateMatchScore(
  recipe: Recipe,
  availableIngredients: Ingredient[]
): number {
  const availableMap = new Map(
    availableIngredients.map(ing => [ing.id, ing])
  );

  const matchedCount = recipe.ingredients.filter(recipeIng =>
    availableMap.has(recipeIng.ingredientId)
  ).length;

  return matchedCount / recipe.ingredients.length;
}

/**
 * Filter recipes by mood
 */
export function filterRecipesByMood(recipes: Recipe[], mood: Mood): Recipe[] {
  switch (mood) {
    case 'healthy':
      return recipes.filter(r => 
        r.description.toLowerCase().includes('healthy') ||
        r.description.toLowerCase().includes('nutritious')
      );
    case 'comfort':
      return recipes.filter(r =>
        r.description.toLowerCase().includes('comfort') ||
        r.difficulty === 'easy'
      );
    case 'quick':
      return recipes.filter(r => r.prepTime + r.cookTime <= 30);
    case 'fancy':
      return recipes.filter(r => r.difficulty === 'hard');
    case 'adventurous':
      return recipes.filter(r => r.difficulty !== 'easy');
    default:
      return recipes;
  }
}

/**
 * Check for ingredients expiring soon (within 3 days)
 */
export function getExpiringSoon(ingredients: Ingredient[]): Ingredient[] {
  const threeDaysFromNow = new Date();
  threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

  return ingredients.filter(ing => {
    if (!ing.expiryDate) return false;
    const expiryDate = new Date(ing.expiryDate);
    return expiryDate <= threeDaysFromNow && expiryDate >= new Date();
  });
}

/**
 * Sort recipes by best match score
 */
export function sortRecipesByMatch(
  recipes: Recipe[],
  availableIngredients: Ingredient[]
): Recipe[] {
  return [...recipes].sort((a, b) => {
    const scoreA = calculateMatchScore(a, availableIngredients);
    const scoreB = calculateMatchScore(b, availableIngredients);
    return scoreB - scoreA;
  });
}

/**
 * Format cooking time in human-readable format
 */
export function formatCookingTime(prepTime: number, cookTime: number): string {
  const total = prepTime + cookTime;
  if (total < 60) {
    return `${total} min`;
  }
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return minutes > 0 ? `${hours}h ${minutes}min` : `${hours}h`;
}
