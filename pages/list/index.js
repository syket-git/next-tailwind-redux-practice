import HomeLayout from '../../layouts/HomeLayout';
import { useSelector } from 'react-redux';
import { todoSelector } from '../../store/slices/todoSlice';
import ListItem from '../../components/ListItem/index';

const List = () => {
  const { list } = useSelector(todoSelector);

  return (
    <HomeLayout>
      <div className="container mt-10 mx-auto">
        {list.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
      </div>
    </HomeLayout>
  );
};

export default List;
