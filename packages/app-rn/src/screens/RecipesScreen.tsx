import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { apiService, type Recipe, formatCookingTime } from '@what-to-eat/core';

const RecipesScreen: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      // In a real app, this would call the API
      // For now, show mock data
      const mockRecipes: Recipe[] = [
        {
          id: '1',
          name: 'Tomato Chicken Pasta',
          description: 'A delicious and healthy pasta dish with fresh tomatoes and grilled chicken',
          ingredients: [
            { ingredientId: '1', ingredientName: 'Tomatoes', quantity: 3, unit: 'pieces' },
            { ingredientId: '2', ingredientName: 'Chicken Breast', quantity: 200, unit: 'grams' },
          ],
          difficulty: 'easy',
          prepTime: 15,
          cookTime: 20,
          servings: 2,
        },
        {
          id: '2',
          name: 'Creamy Chicken Soup',
          description: 'A comfort food classic with tender chicken and creamy broth',
          ingredients: [
            { ingredientId: '2', ingredientName: 'Chicken Breast', quantity: 300, unit: 'grams' },
            { ingredientId: '3', ingredientName: 'Milk', quantity: 500, unit: 'ml' },
          ],
          difficulty: 'medium',
          prepTime: 10,
          cookTime: 30,
          servings: 4,
        },
      ];
      setRecipes(mockRecipes);
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderRecipe = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeCard}>
      <Text style={styles.recipeName}>{item.name}</Text>
      <Text style={styles.recipeDescription}>{item.description}</Text>
      <View style={styles.recipeDetails}>
        <Text style={styles.detailText}>
          ⏱️ {formatCookingTime(item.prepTime, item.cookTime)}
        </Text>
        <Text style={styles.detailText}>
          👥 {item.servings} servings
        </Text>
        <Text style={[styles.detailText, styles.difficulty]}>
          {item.difficulty}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {recipes.length} recipes you can make
        </Text>
      </View>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No recipes available</Text>
            <Text style={styles.emptySubtext}>Add more ingredients to get recommendations!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 16,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  recipeCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#999',
  },
  difficulty: {
    color: '#4CAF50',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
});

export default RecipesScreen;
