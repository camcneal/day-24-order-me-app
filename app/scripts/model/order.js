import $ from 'jquery';
import Backbone from 'backbone';

const Order = Backbone.Model.extend({
    urlRoot: 'http://tiny-za-server.herokuapp.com/collections/chris_orderApp',
    defaults: {
        tax: 0,
        price: 0,
        items: [],
    },


    calculate: function() {},



});

export default Order;
