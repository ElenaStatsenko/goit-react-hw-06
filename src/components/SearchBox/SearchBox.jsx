<<<<<<< Updated upstream
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redax/filtersSlice";
import { selectNameFilter } from "../../redax/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
=======
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redax/filtersSlice";


export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  console.log(filter)
  const dispatch = useDispatch();
 
>>>>>>> Stashed changes

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={filter}
<<<<<<< Updated upstream
        onChange={handleChange}
=======
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
>>>>>>> Stashed changes
      />
    </div>
  );
}
