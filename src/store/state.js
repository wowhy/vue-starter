const state = {
  config: {
    mobile: false,
    sidebar: true
  },
  authed: false,
  menus: [{
    name: 'UI组件',
    icon: 'laptop',
    children: [{
      code: 'Buttons',
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
