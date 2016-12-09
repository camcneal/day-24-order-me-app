import $ from 'jquery';
import Backbone from 'backbone';
import MenusCollection from '../collections/Menu';
import renderMenuItem from './MenuItemview';
import store from '../store';

function menu(appetizers, entrees, sides) {
    const menuContent = $(`
      <ul class="Menu">

      </ul>
      `);

    appetizers.on('update', (e) => {
        appetizers.forEach(function(item, i, arr) {
            let li = renderMenuItem(item);
            menuContent.append(li);
        });
    });

    entrees.on('update', (e) => {
        entrees.forEach(function(item, i, arr) {
            let li = renderMenuItem(item);
            menuContent.append(li);
        });
    });

    sides.on('update', (e) => {
        sides.forEach(function(item, i, arr) {
            // console.log(item);
            let li = renderMenuItem(item);
            menuContent.append(li);
        });
    });



    //append my list
    //for each them
    // add listener
    // console.log(menuContent);
    return menuContent;
}

export default menu;
