export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/ingredients/index',
    'pages/recipes/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#4CAF50',
    navigationBarTitleText: 'What To Eat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#4CAF50',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/home.png',
        selectedIconPath: './assets/home-active.png'
      },
      {
        pagePath: 'pages/ingredients/index',
        text: '食材',
        iconPath: './assets/ingredients.png',
        selectedIconPath: './assets/ingredients-active.png'
      },
      {
        pagePath: 'pages/recipes/index',
        text: '菜谱',
        iconPath: './assets/recipes.png',
        selectedIconPath: './assets/recipes-active.png'
      }
    ]
  }
});
