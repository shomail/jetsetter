import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
import ItemStore from '../ItemStore';
import './Application.css';
import { markAllAsUnpacked } from '../actions'

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
        <button className="button full-width" onClick={markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
