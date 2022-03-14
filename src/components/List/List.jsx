/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import ListItem from '../ListItem/ListItem';
import './List.css';

function List(props) {
  const totalList = props.list;
  const range = props.value;
  console.log('from lis.js', range);
  let list;
  switch (range) {
    case 'less than 50': list = totalList.filter((item) => item.hour < 50); break;
    case 'between 50 and 100': list = totalList.filter((item) => item.hour >= 50 && item.hour <= 100); break;
    case 'more than 100': list = totalList.filter((item) => item.hour > 100); break;
    default: list = totalList;
  }
  console.log(list);
  const newList = list.map((item) => (
    <ListItem
      key={item.id}
      title={item.title}
      description={item.description}
      hour={item.hour}
    />
  ));
  console.log(newList);
  return (
    <div className="list-container">
      {newList}
    </div>
  );
}

export default List;
