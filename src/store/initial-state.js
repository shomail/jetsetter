import uniqueId from 'lodash/uniqueId';

const items = [];

export default {
  items: {
    past: [],
    present: items,
    future: [],
  },
  filter: {
    packedItemsFilter: '',
    unpackedItemsFilter: '',
  },
  newItemValue: '',
};