
import Vue from 'vue'

import {
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  Button,
  Lazyload,
  NavBar,
  PullRefresh,
  Icon,
  Swipe,
  SwipeItem,
  NoticeBar,
  Toast,
  Loading,
  List,
  Dialog,
  ImagePreview,
  Search,
  Field,
  Form,
  CountDown,
  Tabbar,
  TabbarItem
} from 'vant';

Vue.use(Lazyload, {
  preload: 100,
  attempt: 1
}).use(NavBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(NoticeBar)
  .use(Loading)
  .use(Sidebar)
  .use(SidebarItem)
  .use(List)
  .use(PullRefresh)
  .use(Dialog)
  .use(ImagePreview)
  .use(Search)
  .use(Field)
  .use(Field)
  .use(Button)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Grid)
  .use(GridItem)
  .use(CountDown);
