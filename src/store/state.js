const state = {
  config: {
    mobile: false,
    sidebar: true
  },
  authed: true,
  menus: [{
    name: 'UI组件',
    icon: 'laptop',
    children: [{
      name: 'Buttons',
      url: '/buttons'
    }]
  }, {
    name: '页面',
    icon: 'edge',
    children: [{
      name: 'Not Found',
      url: '/404'
    }]
  }],
  tabs: [{
    name: '首页',
    closable: false,
    route: 'Home'
  }]
}

export default state
