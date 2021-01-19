import Auth from './auth/reducer';
import App from './app/reducer';
import Mails from './mail/reducer';
import Calendar from './calendar/reducer';
// import Box from './box/reducer';
import Maps from './map/reducer';
// import Notes from './notes/reducer';
import Todos from './todos/reducer';

import Notes from './notes/reducer';
import Chat from './chat/reducers';
import Contacts from './contacts/reducer';
import Cards from './card/reducer';
import Invoices from './invoice/reducer';
// import DynamicChartComponent from './dynamicEchart/reducer';
import Ecommerce from './ecommerce/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import YoutubeSearch from './youtubeSearch/reducers';
import GithubSearch from './githubSearch/reducers';
import InstagramWidget from './instagramWidget/reducers';
import CustomAppReducers from '../customApp/redux/reducers';
import scrumBoard from './scrumBoard/reducer';
import drawer from './drawer/reducer';
import modal from './modal/reducer';

export default {
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  // Box,
  Maps,
  // Notes,
  Todos,
  Chat,
  Notes,
  Contacts,
  Cards,
  Invoices,
  // DynamicChartComponent,
  Ecommerce,
  YoutubeSearch,
  GithubSearch,
  InstagramWidget,
  scrumBoard,
  drawer,
  modal,
  ...CustomAppReducers,
};
