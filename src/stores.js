import alt from './alt';
import ListActions from './actions'

class ListStore {
  constructor() {
    this.bindListeners({
      getAllList: ListActions.getAllList
      });

    this.listData = {
      shoppingList: [
        {name: 'My Shopping List',
        quantity: 5},
        {name: 'another list',
        quantity: 105}
      ]
    };
  }

  getAllList() {
    return this.listData;
  }

}

export default alt.createStore(ListStore, 'ListStore');
