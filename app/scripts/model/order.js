import $ from 'jquery';
import Backbone from 'backbone';

const Order = Backbone.Model.extend({
    urlRoot: 'http://tiny-za-server.herokuapp.com/collections/chris_orderApp',
    defaults: {
        tax: 1.08,
        total: 0,
        price: [],
        items: [],
    },


    calculate: function(order) {
        let prices = this.get('items').map(function(item, i, arr) {
            let price = item.total;
            return price
        });
        // console.log(prices);
        let priceSum = prices.reduce(function(a,b){
          return a + b;
        },0);
        // for (var i = 0; i < newPrices; i++){
        //
        // }
        let orderTotal = this.get('tax') * priceSum;
        this.set({total: orderTotal})
        // let newTax = tax
        // addPrice(prices) {
        //
        // });
        return this;

},


});

export default Order;
