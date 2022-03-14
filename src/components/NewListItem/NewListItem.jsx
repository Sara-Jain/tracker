/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';

function NewListItem(props) {
  const [Title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');
  const [Hour, setHour] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const newListData = {
      title: Title,
      description: Desc,
      hour: Hour,
    };
    props.onSaveListData(newListData);
    setTitle('');
    setDesc('');
    setHour('');
    // console.log('submit clicked');
  };

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    // console.log(event.target.value);
    setDesc(event.target.value);
  };

  const hourChangeHandler = (event) => {
    setHour(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          value={Title}
          type="text"
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          value={Desc}
          type="text"
          onChange={descriptionChangeHandler}
        />
      </div>
      <div>
        <label>Hour</label>
        <input
          value={Hour}
          type="integer"
          onChange={hourChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewListItem;
