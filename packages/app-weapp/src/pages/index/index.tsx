import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

export default function Index() {
  const navigateToIngredients = () => {
    Taro.navigateTo({ url: '/pages/ingredients/index' });
  };

  const navigateToRecipes = () => {
    Taro.navigateTo({ url: '/pages/recipes/index' });
  };

  return (
    <View className="index">
      <View className="header">
        <Text className="title">🍳 What To Eat</Text>
        <Text className="subtitle">你的私人冰箱管家和菜谱推荐助手</Text>
      </View>

      <View className="button-container">
        <Button className="nav-button" onClick={navigateToIngredients}>
          📦 我的食材
        </Button>
        <Button className="nav-button" onClick={navigateToRecipes}>
          🍽️ 发现菜谱
        </Button>
      </View>

      <View className="footer">
        <Text className="footer-text">Powered by Taro + TypeScript</Text>
      </View>
    </View>
  );
}
