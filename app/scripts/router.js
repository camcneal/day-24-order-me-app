import $ from 'jquery';
import Backbone from 'backbone';
import MenuItems from './collections/menu';
import renderMenu from './views/Menu';
import renderOrder from './views/Order';
import Appetizers from './collections/appetizers';
import Entrees from './collections/entrees';
import Sides from './collections/sides';
import Order from './model/order';
import renderOrderSuccess from './views/OrderView';
import store from './store';

let appetizers = new Appetizers();
let entrees = new Entrees();
let sides = new Sides();
let order = new Order();
// let menus = new MenuItems();
const Router = Backbone.Router.extend({
  routes: {
    '': 'renderMenu',
    'orderedItems': 'renderOrderSuccess',
  },
  renderMenu: () => {
    appetizers.fetch();
    entrees.fetch();
    sides.fetch();
    $('.container').empty();
    $('.container').append(renderMenu(appetizers,entrees,sides),renderOrder(order));



  },

  renderOrderSuccess: () => {
    order.fetch();
    $('.container').empty();
    $('.container').append(renderOrderSuccess(order));

  }

});
const router = new Router();

export default router;
