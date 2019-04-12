import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
import ItemStore from '../ItemStore';
import './Application.css';

class Application extends Component {
  state = {
    items: ItemStore.getItems()
  };

  componentDidMount() {
    ItemStore.on('change', this.updateItems);
  }

  componentWillUnmount() {
    ItemStore.off('change', this.updateItems);
  }

  updateItems = () => {
    this.setState({ items: ItemStore.getItems()})
  }

  markAllAsUnpacked = () => {
    // const items = this.state.items.map(item => ({...item, packed: false}));
    // this.setState({ items });
  }

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);
    return (
      <div className="Application">
        <NewItem />
        <CountDown {...this.state} />
        <Items title="Unpacked Items" items={unpackedItems} />
        <Items title="Packed Items" items={packedItems} />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
