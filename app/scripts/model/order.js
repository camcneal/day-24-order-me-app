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
orderItem: function () {


},
calculate: function() {
  console.log('hi chris');
},


});

export default Order;
