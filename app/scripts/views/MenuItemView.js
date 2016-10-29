import $ from 'jquery';


 function renderMenuItem (item) {
   console.log('sdfsdfs');
  let li = $(`
    <li id="${item.get('id')}">
      <h3>${item.get('item')}</h3>
      <span>${item.get('price')}</span>
      <p>${item.get('description')}</p>
    </li>
  `);
  li.on('click', (e) => {
    console.log('anything');
    console.log(item);
    console.log(li);
  });
return li;
}
export default renderMenuItem;
