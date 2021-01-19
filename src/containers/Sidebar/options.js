import { getDefaultPath } from '../../helpers/urlSync';
import getDevSidebar from '../../customApp/sidebar';

const options = [
  {
    label: 'sidebar.email',
    key: 'email',
    leftIcon: 'email',
    hideBreadCrumb: true,
  },
  {
    label: 'sidebar.ecommerce',
    leftIcon: 'shopping_basket',
    key: 'ecommerce',
    children: [
      {
        label: 'sidebar.shop',
        key: 'shop',
      },
      {
        label: 'sidebar.cards',
        icon: 'map',
        key: 'savedCards',
      },
      {
        label: 'sidebar.cart',
        key: 'cart',
      },
      {
        label: 'sidebar.checkout',
        key: 'checkout',
      },
    ],
  },
  {
    label: 'sidebar.invoice',
    key: 'invoice',
    leftIcon: 'select_all',
    hideBreadCrumb: true,
  },
  {
    label: 'sidebar.scrum-board',
    key: 'scrum-board',
    leftIcon: 'select_all',
    hideBreadCrumb: true,
  },
  {
    label: 'sidebar.map',
    key: 'googlemap',
    isNavTab: true,
    leftIcon: 'map',
    children: [
      {
        label: 'sidebar.googlemap',
        key: 'googlemap',
        default: true,
      },
      {
        label: 'sidebar.leaflet',
        key: 'leafletmap',
      },
    ],
  },

  {
    label: 'sidebar.contact',
    key: 'contact',
    leftIcon: 'contacts',
    hideBreadCrumb: true,
  },

  {
    label: 'sidebar.chat',
    key: 'chat',
    leftIcon: 'forum',
    hideBreadCrumb: true,
  },
  {
    label: 'sidebar.advancedSearch',
    leftIcon: 'search',
    key: 'advancedSearch',
    children: [
      {
        label: 'sidebar.githubSearch',
        key: 'github-search',
      },
      {
        label: 'sidebar.youtubeSearch',
        key: 'youtube-search',
      },
    ],
  },
  {
    label: 'sidebar.calendar',
    key: 'calendar',
    leftIcon: 'event',
    hideBreadCrumb: true,
  },

  {
    label: 'sidebar.box',
    key: 'box',
    leftIcon: 'dashboard',
  },

  // {
  //   label: 'sidebar.todos',
  //   key: 'todos',
  //   leftIcon: 'done_all'
  // },
  {
    label: 'sidebar.shuffle',
    key: 'shuffle',
    leftIcon: 'shuffle',
    hideBreadCrumb: true,
  },
  {
    label: 'sidebar.chart',
    leftIcon: 'pie_chart',
    key: 'chart',
    children: [
      {
        label: 'sidebar.googlechart',
        key: 'google-chart',
      },
      {
        label: 'sidebar.rechart',
        key: 'rechart',
      },
      {
        label: 'sidebar.reactTrend',
        key: 'react-trend',
      },
      {
        label: 'sidebar.reactChartKick',
        key: 'react-chartkick',
      },
      {
        label: 'sidebar.reactChart2',
        key: 'react-chart-2',
      },
    ],
  },
  {
    label: 'sidebar.tables',
    leftIcon: 'view_headline',
    key: 'material-ui-tables',
  },
  {
    label: 'sidebar.uiElements',
    key: 'uiElements',
    leftIcon: 'extension',
    children: [
      {
        label: 'sidebar.badges',
        key: 'badges',
      },
      {
        label: 'sidebar.button',
        key: 'button',
      },
      {
        label: 'sidebar.cards',
        key: 'cards',
      },
      {
        label: 'sidebar.chips',
        key: 'chips',
      },
      {
        label: 'sidebar.avatars',
        key: 'avatars',
      },
      {
        label: 'sidebar.dividers',
        key: 'dividers',
      },
      {
        label: 'sidebar.lists',
        key: 'lists',
      },
      {
        label: 'sidebar.autocomplete',
        key: 'autocomplete',
      },
      {
        label: 'sidebar.selectionControl',
        key: 'selection-control',
      },
      {
        label: 'sidebar.select',
        key: 'select',
      },
      {
        label: 'sidebar.stepper',
        key: 'stepper',
      },
      {
        label: 'sidebar.textfields',
        key: 'textfields',
      },
      {
        label: 'sidebar.menus',
        key: 'Menus',
      },
      {
        label: 'sidebar.expansionpanels',
        key: 'expansion-panel',
      },
      {
        label: 'sidebar.bottomnavigations',
        key: 'bottom-navigation',
      },
      {
        label: 'sidebar.modals',
        key: 'modals',
      },
    ],
  },
  {
    label: 'sidebar.advancedUi',
    leftIcon: 'all_inclusive',
    key: 'advancedUi',
    children: [
      {
        label: 'sidebar.dialogs',
        key: 'dialogs',
      },
      {
        label: 'sidebar.gridlist',
        key: 'gridlist',
      },
      {
        label: 'sidebar.popovers',
        key: 'popovers',
      },
      {
        label: 'sidebar.progress',
        key: 'progress',
      },
      {
        label: 'sidebar.snackbar',
        key: 'snackbar',
      },
      {
        label: 'sidebar.tabs',
        key: 'tabs',
      },
      {
        label: 'sidebar.tooltips',
        key: 'tooltips',
      },
    ],
  },
  {
    label: 'sidebar.advancedModules',
    leftIcon: 'stars',
    key: 'advancedModules',
    children: [
      {
        label: 'sidebar.materialUIPicker',
        key: 'material-ui-picker',
      },
      {
        label: 'sidebar.codeMirror',
        key: 'code-mirror',
      },
      {
        label: 'sidebar.dropzone',
        key: 'dropzone',
      },
      {
        label: 'sidebar.reactColor',
        key: 'react-color',
      },
    ],
  },
  {
    label: 'sidebar.forms',
    key: 'forms',
    leftIcon: 'receipt',
    children: [
      {
        label: 'sidebar.reduxForms',
        key: 'redux-forms',
      },

      {
        label: 'sidebar.formik',
        key: 'formik',
      },
    ],
  },
  {
    label: 'sidebar.notes',
    key: 'notes',
    leftIcon: 'note',
  },

  {
    label: 'sidebar.pages',
    leftIcon: 'public',
    key: 'pages',
    children: [
      {
        label: 'sidebar.404',
        key: '404',
        withoutDashboard: true,
      },
      {
        label: 'sidebar.505',
        key: '505',
        withoutDashboard: true,
      },
      {
        label: 'sidebar.signIn',
        key: 'signin',
        withoutDashboard: true,
      },
      {
        label: 'sidebar.signUp',
        key: 'signup',
        withoutDashboard: true,
      },
      {
        label: 'sidebar.forgotPassword',
        key: 'forgot-password',
        withoutDashboard: true,
      },
      {
        label: 'sidebar.resetPassword',
        key: 'reset-password',
        withoutDashboard: true,
      },
    ],
  },
  ...getDevSidebar,
];
const getBreadcrumbOption = () => {
  const preKeys = getDefaultPath();
  let parent, activeChildren;
  options.forEach(option => {
    if (preKeys[option.key]) {
      parent = option;
      (option.children || []).forEach(child => {
        if (preKeys[child.key]) {
          activeChildren = child;
        }
      });
    }
  });
  return { parent, activeChildren };
};
export default options;
export { getBreadcrumbOption };
