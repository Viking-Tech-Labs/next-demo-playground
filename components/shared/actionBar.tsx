import { useDispatch, useSelector } from "react-redux";

import { selectSearch, setSearchAndFilter } from "store/slices/actionBar";

import GridToListToggle from "./buttons/GridToListToggle";

const ActionBar = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  return (
    <div className="mb-8 flex">
      <h1 className="text-5xl">Pokemart</h1>
      <div className="ml-auto flex gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            dispatch(setSearchAndFilter(e.target.value));
          }}
          className="rounded-md border p-2"
        />
        <GridToListToggle />
      </div>
    </div>
  );
};

export default ActionBar;
