import alt from './alt';
import ListActions from './actions'

class ListStore {
  constructor() {
    console.log('store created');
    this.listData = {
      shoppingList: [
        {name: 'My Shopping List',
        quantity: 5},
        {name: 'another list',
        quantity: 105}
      ]
    };

    this.bindListeners({
      getAllList: ListActions.getAllList
      });

  }

  getAllList() {
    return this.listData;
  }

}

export default alt.createStore(ListStore, 'ListStore');
