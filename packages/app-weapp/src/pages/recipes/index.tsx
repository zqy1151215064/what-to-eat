import { View, Text, ScrollView } from '@tarojs/components';
import { useState, useEffect } from 'react';
import { apiService, type Recipe, formatCookingTime } from '@what-to-eat/core';
import './index.scss';

export default function Recipes() {
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
          name: '番茄鸡肉意面',
          description: '美味又健康的意面，配上新鲜番茄和烤鸡胸肉',
          ingredients: [
            { ingredientId: '1', ingredientName: '西红柿', quantity: 3, unit: '个' },
            { ingredientId: '2', ingredientName: '鸡胸肉', quantity: 200, unit: '克' },
          ],
          difficulty: 'easy',
          prepTime: 15,
          cookTime: 20,
          servings: 2,
        },
        {
          id: '2',
          name: '奶油鸡肉汤',
          description: '经典的舒适食物，配上嫩鸡肉和奶油汤底',
          ingredients: [
            { ingredientId: '2', ingredientName: '鸡胸肉', quantity: 300, unit: '克' },
            { ingredientId: '3', ingredientName: '牛奶', quantity: 500, unit: '毫升' },
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

  if (loading) {
    return (
      <View className="loading-container">
        <Text>加载中...</Text>
      </View>
    );
  }

  return (
    <View className="recipes-page">
      <View className="header">
        <Text className="header-text">
          您可以做 {recipes.length} 道菜
        </Text>
      </View>
      <ScrollView className="list" scrollY>
        {recipes.map((item) => (
          <View key={item.id} className="recipe-card">
            <Text className="recipe-name">{item.name}</Text>
            <Text className="recipe-description">{item.description}</Text>
            <View className="recipe-details">
              <Text className="detail-text">
                ⏱️ {formatCookingTime(item.prepTime, item.cookTime)}
              </Text>
              <Text className="detail-text">
                👥 {item.servings} 人份
              </Text>
              <Text className="detail-text difficulty">
                {item.difficulty === 'easy' ? '简单' : item.difficulty === 'medium' ? '中等' : '困难'}
              </Text>
            </View>
          </View>
        ))}
        {recipes.length === 0 && (
          <View className="empty-container">
            <Text className="empty-text">暂无菜谱</Text>
            <Text className="empty-subtext">添加更多食材获取推荐！</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
