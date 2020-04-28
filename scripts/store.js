import item from './items.js';
let items = [];
let hideCheckedItems = false;
export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    getItems,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
  };

  function findById(id){
    return items.find(element=>id===element.id)
  }

  function getItems() {
    return items;
  }

  function addItem(name){
    try{
      item.validateName(name);
      items.push(item.create(name));

    }
    catch (err){

    }
  }

  function findAndToggleChecked(id){
    let item = findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id,newName){
    try{
      validateName(name);
      let item = findById(id);
      item.name = newName;
    }
    catch (err){
      console.log(`Cannot update name: ${error.message}`)
    }
  }

function findAndDelete (id) {
    let item = findById(id);
    items = items.filter(element => item.id !== element.id);
}


function toggleCheckedFilter () {
  this.hideCheckedItems = !this.hideCheckedItems;
}