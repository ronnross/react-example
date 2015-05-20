import React from 'react';
import ListStore from './stores';
import ListActions from './actions';



class ListApp extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {list: ListStores.getAllList()}
    console.log(ListStore.getAllList());
    this.state = {list: 'some conents'};
  }

  render() {
      return (
        <div>
          <h1> Hello World</h1>

          {this.state.list}
          <p>done</p>

          {/*

          <ListManager lists={listData.shoppingList} />
            */}
        </div>
      );
  }
}

// class ListManager extends React.Component {
//   render() {
//     var listInfo = this.props.lists.map(function (list) {
//       return (
//         <ListCount name={list.name} quantity={list.quantity} key={list.name} />
//       );
//     });
//     return(
//       <div>
//         {listInfo}
//         <input type="text" placeholder="Type to add an item" />
//         <button type="button" onClick={this.addNewList}>Add List</button>
//       </div>
//
//     );
//   }
//
//   addNewList(event) {
//     console.log('clicked');
//
//   }
// }
//
// class ListCount extends React.Component {
//   render() {
//     return(
//       <div>{this.props.name} ({this.props.quantity})</div>
//     );
//   }
// }


React.render(React.createElement(ListApp), document.getElementById('main'));
