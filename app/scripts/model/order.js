import $ from 'jquery';
import Backbone from 'backbone';
import menu from './menu';

const Order = Backbone.Model.extend({
urlRoot: 'http://tiny-za-server.herokuapp.com/collections/chris_orderApp',
defaults: {
    tax: 0,
    price: 0,
    items: [],
},
orderItem: function (item) {
  console.log(this);
  this.save({
    tax: this.get('tax') + item.get('price')*.08,
    price: this.get('price') + item.get('price'),
    items: this.get('items').concat(item.get('item'))
  }, {
    success: (response) => {
      console.log(response);
    }
  }
);

},
calculate: function() {
  console.log('hi chris');
},


});

export default Order;
