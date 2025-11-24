export default defineAppConfig({
  pages: ['pages/home/index', 'pages/fridge/index', 'pages/recipes/index', 'pages/me/index'],
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
        pagePath: 'pages/home/index',
        text: 'Home',
        iconPath: './assets/home.png',
        selectedIconPath: './assets/home-active.png'
      },
      {
        pagePath: 'pages/fridge/index',
        text: 'Fridge',
        iconPath: './assets/fridge.png',
        selectedIconPath: './assets/fridge-active.png'
      },
      {
        pagePath: 'pages/recipes/index',
        text: 'Recipes',
        iconPath: './assets/recipes.png',
        selectedIconPath: './assets/recipes-active.png'
      },
      {
        pagePath: 'pages/me/index',
        text: 'Me',
        iconPath: './assets/me.png',
        selectedIconPath: './assets/me-active.png'
      }
    ]
  }
});
