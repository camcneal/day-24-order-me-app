import $ from 'jquery';
import store from '../store';
import orderContent from './Order';

 function renderMenuItem (item) {
  let li = $(`
    <li id="${item.get('id')}">
      <h3>${item.get('item')}</h3>
      <span>${item.get('price')}</span>
      <p>${item.get('description')}</p>
    </li>
  `);

  li.on('click', (e) => {
    //i want to get the object info from the item and put in the store.orderModel.get('items')
    let itemName = (item.get('item'));
    let itemPrice = (item.get('price'));
    // console.log(itemPrice,itemName);
    let items = store.orderModel.get('items').concat({name: itemName, total: itemPrice});
    // console.log(store.orderModel.get('items'));
    store.orderModel.set({items: items});

  });
return li;
}
export default renderMenuItem;
