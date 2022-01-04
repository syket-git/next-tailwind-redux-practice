import HomeLayout from '../../layouts/HomeLayout';
import { useSelector } from 'react-redux';
import { todoSelector } from '../../store/slices/todoSlice';
import ListItem from '../../components/ListItem/index';
import SecondaryButton from '../../components/form/Button/SecondaryButton';
import router from 'next/router';

const List = () => {
  const { list } = useSelector(todoSelector);

  return (
    <HomeLayout>
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
    </HomeLayout>
  );
};

export default List;
