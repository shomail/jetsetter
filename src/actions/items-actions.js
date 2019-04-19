import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UNDO_ITEM_ACTION, REDO_ITEM_ACTION, UPDATE_ALL_ITEMS } from '../constants';
import Api from '../lib/api';

export const getAllItems = () => {
 return dispatch => {
   Api.getAll().then(items => {
     dispatch({
       type: UPDATE_ALL_ITEMS,
       items,
     })
   })
 }
}

export const addNewItem = (value) => {
  const item =  {
    packed: false,
    value,
  }

  return dispatch => {
    Api.add(item).then(item => {
      dispatch({
        type: ADD_NEW_ITEM,
        item,
      })
    });
  }
};

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});

export const markAllAsUnpacked = () => ({
  type: MARK_ALL_AS_UNPACKED,
});

export const undoItemAction = () => ({
  type: UNDO_ITEM_ACTION
});

export const redoItemAction = () => ({
  type: REDO_ITEM_ACTION
});