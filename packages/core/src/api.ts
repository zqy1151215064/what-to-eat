import axios, { AxiosInstance } from 'axios';
import type { 
  Ingredient, 
  Recipe, 
  RecommendationRequest, 
  RecommendationResponse 
} from './types';

/**
 * API Service for WhatToEat backend
 */
export class ApiService {
  private client: AxiosInstance;

  constructor(baseURL: string = 'https://api.whattoeat.example.com') {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get all ingredients from user's fridge
   */
  async getIngredients(): Promise<Ingredient[]> {
    const response = await this.client.get<Ingredient[]>('/ingredients');
    return response.data;
  }

  /**
   * Add a new ingredient to the fridge
   */
  async addIngredient(ingredient: Omit<Ingredient, 'id'>): Promise<Ingredient> {
    const response = await this.client.post<Ingredient>('/ingredients', ingredient);
    return response.data;
  }

  /**
   * Update an existing ingredient
   */
  async updateIngredient(id: string, ingredient: Partial<Ingredient>): Promise<Ingredient> {
    const response = await this.client.put<Ingredient>(`/ingredients/${id}`, ingredient);
    return response.data;
  }

  /**
   * Delete an ingredient from the fridge
   */
  async deleteIngredient(id: string): Promise<void> {
    await this.client.delete(`/ingredients/${id}`);
  }

  /**
   * Get recipe recommendations based on available ingredients and preferences
   */
  async getRecommendations(request: RecommendationRequest): Promise<RecommendationResponse> {
    const response = await this.client.post<RecommendationResponse>(
      '/recommendations',
      request
    );
    return response.data;
  }

  /**
   * Get recipe details by ID
   */
  async getRecipe(id: string): Promise<Recipe> {
    const response = await this.client.get<Recipe>(`/recipes/${id}`);
    return response.data;
  }

  /**
   * Search recipes by name or ingredients
   */
  async searchRecipes(query: string): Promise<Recipe[]> {
    const response = await this.client.get<Recipe[]>('/recipes/search', {
      params: { q: query },
    });
    return response.data;
  }
}

// Export a singleton instance
export const apiService = new ApiService();
