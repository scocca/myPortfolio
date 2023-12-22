function TodoItem(props){
    return(
      <li id="task">
        
        <p>{props.text}</p>
        <progress max={100} value={props.level}>{props.level}</progress>
      </li>
    )
  }

  export {TodoItem};