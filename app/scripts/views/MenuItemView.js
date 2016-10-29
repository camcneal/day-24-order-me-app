import $ from 'jquery';
import store from '../store';

 function renderMenuItem (item) {

  let li = $(`
    <li id="${item.get('id')}">
      <h3>${item.get('item')}</h3>
      <span>${item.get('price')}</span>
      <p>${item.get('description')}</p>
    </li>
  `);
  li.on('click', (e) => {
    store.orderModel.orderItem(item);
    console.log(item);
  });
return li;
}
export default renderMenuItem;
