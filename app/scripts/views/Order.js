import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import renderMenuItem from './MenuItemview';

function order(orders) {

    const orderContent = $(`
  <ul class="order">

  <button type="button" placeholder="button">Order</button>

   </ul>


   `);

    store.orderModel.on('change', (e) => {
      // console.log('order model changed');
        store.orderModel.get('items').forEach(function(item, i, arr) {
          let order = (item.name + item.total);
            // console.log(order);
            orderContent.append(order)
        });
    });
    return orderContent;
}

export default order;
