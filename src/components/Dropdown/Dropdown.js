import './Dropdown.css'
//import {useState} from "react"
const Dropdown = (props) => {
   // const [SelectValue , setSelectValue] = useState('all');
    
    const handleDropdownChange = (event) => {
        props.onFilterListData( event.target.value );
    }

    return (
        <select name="selectList" id="selectList" onChange={handleDropdownChange}>
            <option value="all">All</option>
            <option value="less than 50">&lt; 50 Hours</option>
            <option value="between 50 and 100">&gt; 50 Hours and &lt; 100 Hours </option>
            <option value="more than 100">&gt; 100 Hours </option>
        </select>
    );
}

export default Dropdown;