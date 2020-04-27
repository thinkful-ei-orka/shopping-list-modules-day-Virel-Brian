<<<<<<< HEAD
import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

=======
import shoppingList from './shopping-list.js';
import item from './items.js';

const itemNames = [ '', 'apples', 'pears' ];
itemNames.forEach(name => {
  try {
    item.validateName(name);
    // create a new item if name is valid
    store.items.push(item.create(name));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
});

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

>>>>>>> c20d5e16abf793c263da45918d7981c1c4a93707
$(main);