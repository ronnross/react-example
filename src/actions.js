import alt from './alt';

class ListActions {
  getAllList() {
    this.dispatch();
    console.log('action fired!');
  }
}

export default alt.createActions(ListActions);
