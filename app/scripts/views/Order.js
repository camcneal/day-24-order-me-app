import $ from 'jquery';
import Backbone from 'backbone';
import MenusCollection from '../collections/Menu';



function order () {

  const orderContent = $(`
  <ul class="Order">

   </ul>
   `);
   return orderContent;
 }

export default order;
