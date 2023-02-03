import Activity from '../views/activity';
import Alarm from '../views/alarm';
import Home from '../views/home';
import User from '../views/user';
import RootTab from './rootTab';

const dataRoot = [
  {
    name: 'RootTab',
    component: RootTab,
  },
];
const dataTab = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Activity',
    component: Activity,
  },
  {
    name: 'Alarm',
    component: Alarm,
  },
  {
    name: 'Profile',
    component: User,
  },
];

export {dataRoot, dataTab};
