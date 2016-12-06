import $ from 'jquery';
import Backbone from 'backbone';
import menu from './menu';

const Order = Backbone.Model.extend({
url: 'http://tiny-za-server.herokuapp.com/collections/chris_orderApp',
model: Order,

orderItem: function (item) {
  console.log(this);
  this.create({
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
