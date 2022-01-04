import React from 'react';
import ListItem from '../../../components/ListItem/index';
import SecondaryButton from '../../form/Button/SecondaryButton';

function AddListForm({ list }) {
  return (
    <div className="container mt-10 mx-auto">
      {list?.length > 0 ? (
        list.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))
      ) : (
        <div className="text-center space-y-3">
          <p>Sorry, no item added yet</p>
          <SecondaryButton onClick={() => router.push('/')}>
            Add new todo
          </SecondaryButton>
        </div>
      )}
    </div>
  );
}

export default AddListForm;
