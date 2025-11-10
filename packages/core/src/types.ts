/**
 * Ingredient types and interfaces
 */
export interface Ingredient {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiryDate?: Date;
}

export type IngredientCategory = 
  | 'vegetables'
  | 'fruits'
  | 'meat'
  | 'dairy'
  | 'grains'
  | 'spices'
  | 'other';

/**
 * Recipe types and interfaces
 */
export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: RecipeIngredient[];
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
}

export interface RecipeIngredient {
  ingredientId: string;
  ingredientName: string;
  quantity: number;
  unit: string;
}

/**
 * User preferences and mood
 */
export interface UserPreferences {
  dietaryRestrictions: string[];
  favorites: string[];
  dislikes: string[];
}

export type Mood = 'healthy' | 'comfort' | 'quick' | 'fancy' | 'adventurous';

export interface RecommendationRequest {
  availableIngredients: Ingredient[];
  mood?: Mood;
  preferences?: UserPreferences;
}

export interface RecommendationResponse {
  recipes: Recipe[];
  matchScore: number;
}
