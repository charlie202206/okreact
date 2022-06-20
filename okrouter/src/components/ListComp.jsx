function ListComp(props) {
  return (
    <li>
      <a href = "">
        {props.item}:{props.index}
      </a>
    </li>
  );
}

export default ListComp;
