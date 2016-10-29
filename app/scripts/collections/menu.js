import Backbone from 'backbone';
import Order from '../model/order';

const MenuItems = Backbone.Collection.extend({
url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
model: Order,

});




export default MenuItems;
