import Backbone from 'backbone';
import MenuItem from '../model/menu';

const MenuItems = Backbone.Collection.extend({
url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
model: MenuItem,
parse: function (response) {
  return response.sides;
}
});




export default MenuItems;
