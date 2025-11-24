import { View, Text, ScrollView } from '@tarojs/components';
import { useState, useEffect } from 'react';
import { apiService, type Ingredient } from '@what-to-eat/core';
import './index.scss';

export default function Ingredients() {
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
          name: '西红柿',
          category: 'vegetables',
          quantity: 5,
          unit: '个',
        },
        {
          id: '2',
          name: '鸡胸肉',
          category: 'meat',
          quantity: 500,
          unit: '克',
        },
        {
          id: '3',
          name: '牛奶',
          category: 'dairy',
          quantity: 1,
          unit: '升',
        },
      ];
      setIngredients(mockIngredients);
    } catch (error) {
      console.error('Error loading ingredients:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View className="loading-container">
        <Text>加载中...</Text>
      </View>
    );
  }

  return (
    <View className="ingredients-page">
      <View className="header">
        <Text className="header-text">
          您的冰箱有 {ingredients.length} 种食材
        </Text>
      </View>
      <ScrollView className="list" scrollY>
        {ingredients.map((item) => (
          <View key={item.id} className="ingredient-card">
            <Text className="ingredient-name">{item.name}</Text>
            <Text className="ingredient-details">
              {item.quantity} {item.unit}
            </Text>
            <Text className="ingredient-category">{item.category}</Text>
          </View>
        ))}
        {ingredients.length === 0 && (
          <View className="empty-container">
            <Text className="empty-text">暂无食材</Text>
            <Text className="empty-subtext">开始添加您的食材吧！</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
