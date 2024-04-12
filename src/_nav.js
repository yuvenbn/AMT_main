export default [
  {
    component: 'CNavItem',
    name: 'Home',
    to: '/dashboard',
    icon: 'cil-chart-pie',
    badge: {
      color: 'primary',
      // text: 'NEW',
    },
  },
  {
    component: 'CNavGroup',
    name: 'Configuration',
    to: '/base',
    icon: 'cil-settings',
    items: [
      {
        component: 'CNavItem',
        name: 'Clients',
        to: '/base/tables',
      },
      // {
      //   component: 'CNavItem',
      //   name: 'Button Groups',
      //   to: '/buttons/button-groups',
      // },
      // {
      //   component: 'CNavItem',
      //   name: 'Dropdowns',
      //   to: '/buttons/dropdowns',
      // },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Dashboard',
    to: '/buttons',
    icon: 'cil-speedometer',
    items: [
      {
        component: 'CNavItem',
        name: 'Buttons',
        to: '/buttons/standard-buttons',
      },
      {
        component: 'CNavItem',
        name: 'Button Groups',
        to: '/buttons/button-groups',
      },
      {
        component: 'CNavItem',
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: 'CNavItem',
        name: 'CoreUI Icons',
        to: '/icons/coreui-icons',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ],
  },
]
