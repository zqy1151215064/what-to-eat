import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { apiService, type Ingredient } from '@what-to-eat/core';

const IngredientsScreen: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadIngredients();
  }, []);

  const loadIngredients = async () => {
    try {
      // In a real app, this would call the API
      // For now, show mock data
      const mockIngredients: Ingredient[] = [
        {
          id: '1',
          name: 'Tomatoes',
          category: 'vegetables',
          quantity: 5,
          unit: 'pieces',
        },
        {
          id: '2',
          name: 'Chicken Breast',
          category: 'meat',
          quantity: 500,
          unit: 'grams',
        },
        {
          id: '3',
          name: 'Milk',
          category: 'dairy',
          quantity: 1,
          unit: 'liter',
        },
      ];
      setIngredients(mockIngredients);
    } catch (error) {
      console.error('Error loading ingredients:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderIngredient = ({ item }: { item: Ingredient }) => (
    <View style={styles.ingredientCard}>
      <Text style={styles.ingredientName}>{item.name}</Text>
      <Text style={styles.ingredientDetails}>
        {item.quantity} {item.unit}
      </Text>
      <Text style={styles.ingredientCategory}>{item.category}</Text>
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
          You have {ingredients.length} ingredients in your fridge
        </Text>
      </View>
      <FlatList
        data={ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No ingredients yet</Text>
            <Text style={styles.emptySubtext}>Start adding ingredients to your fridge!</Text>
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
  ingredientCard: {
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
  ingredientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  ingredientDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ingredientCategory: {
    fontSize: 12,
    color: '#4CAF50',
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

export default IngredientsScreen;
