import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';

export default function(state = {}, action) {
  const { past, present, future } = state;

  if (action.type === ADD_NEW_ITEM) {
    const {id, packed, value} = action;
    return {
      past: [present, ...past],
      present: [...present, { id, packed, value }],
      future,

    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      past: [present, ...past],
      present: present.filter(item => item.id !== action.id),
      future,
    }
  }

  if (action.type === TOGGLE_ITEM) {
    return {
      past: [present, ...past],
      present: present.map(item => {
        if (item.id === action.id) return { ...item, packed: !item.packed  };
        return item;
      }) ,
      future,
    }
  }

  if (action.type === MARK_ALL_AS_UNPACKED) {
    return {
      past: [present, ...past],
      present: present.map(item => {
        return { ...item, packed: false  };
      }),
      future,
    }
  }

  return state;
}