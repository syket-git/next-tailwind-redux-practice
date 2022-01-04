import React from 'react';
import {
  toggleStatusAction,
  deleteTodoAction,
} from '../../store/slices/todoSlice';
import { useDispatch } from 'react-redux';
import style from './ListItem.module.css';
import SecondaryButton from '../form/Button/SecondaryButton';

function Index({ item, index }) {
  const dispatch = useDispatch();

  return (
    <div className={style['listItem-container']}>
      <div
        onClick={() => dispatch(toggleStatusAction(index))}
        className={`${style.listItem} ${
          item.status ? 'bg-green-900' : 'bg-red-800'
        }`}
      ></div>
      {item.text}

      <SecondaryButton onClick={(e) => dispatch(deleteTodoAction(index))}>
        Delete
      </SecondaryButton>
    </div>
  );
}

export default Index;
