import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import orderContent from './Order';
import order from '../model/order';

function renderOrderSuccess(order) {
    // console.log(store.orderModel.get('items')[1].name);
    const orderItems = $(`
      <div>
      <span>Congratulations Your order was recieved!!</span>

      <ul></ul>
      </div>
      `)

    store.orderModel.get('items').forEach(function(item, i, arr) {
        // console.log('hi');
        let menu = (item.name + item.total);
        let li = $(`

            <p class="orderItems">
            <h4>${store.orderModel.get('items')[i].name}</h4>
            $<span>${store.orderModel.get('items')[i].total}</span>
            </p>
            <h3>Total:${store.orderModel.get('total')}</h3>

                  `);
        orderItems.find('ul').append(li);
        orderItems.append(order)
    });
    return orderItems;

};

export default renderOrderSuccess;
