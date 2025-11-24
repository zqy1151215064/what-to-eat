import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

export default function Index() {
  const navigateToFridge = () => {
    Taro.navigateTo({ url: '/pages/ingredients/index' });
  };

  const navigateToRecipes = () => {
    Taro.navigateTo({ url: '/pages/recipes/index' });
  };

  return (
    <View>
     
    </View>
  );
}
