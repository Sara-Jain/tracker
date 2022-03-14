import { useState } from "react";
import "./ListItem.css" 

const ListItem = (props) => {
    const [InitialTitle , setInitialTitle] = useState(props.title);
    const titleChangeHandler = () => {
        console.log('button clicked');
        setInitialTitle("Updated title");
        console.log(InitialTitle);
    }
    return(
        <div className="list-item-container">
            <h1>{InitialTitle}</h1>
            <p>{props.description}</p>
            <h3>Will take {props.hour} hours to complete</h3>
            <button onClick={titleChangeHandler}>Change title</button>
        </div>
    )
}

export default ListItem;