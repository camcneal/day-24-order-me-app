import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import renderMenuItem from './MenuItemview';
// import Order from '../Model/order';

function order(orders) {

    const orderContent = $(`
  <ul class="order">

  <button type="button" placeholder="button">Order</button>

   </ul>


   `);



    store.orderModel.on('change', (e) => {
        // console.log('order model changed');
        store.orderModel.get('items').forEach(function(item, i, arr) {
            let order = (item.name + item.price);
            // console.log(order);
            orderContent.append(order)
        });

        let button = orderContent
        button.on('click', (e) => {
          e.preventDefault();
          store.orderModel.calculate();
          let total = store.orderModel.get('total');
          orderContent.append(total)
          console.log(total);
          location.hash = 'orderedItems'
        });
    });
    return orderContent;
}

export default order;
