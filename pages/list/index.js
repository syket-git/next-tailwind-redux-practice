import HomeLayout from '../../layouts/HomeLayout';
import { useSelector } from 'react-redux';
import { todoSelector } from '../../store/slices/todoSlice';
import router from 'next/router';
import AddListForm from '../../components/SubPage/ListPage/AddListForm';

const List = () => {
  const { list } = useSelector(todoSelector);

  return (
    <HomeLayout>
      <AddListForm list={list} />
    </HomeLayout>
  );
};

export default List;
