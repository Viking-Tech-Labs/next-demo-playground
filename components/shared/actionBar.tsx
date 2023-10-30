import { BsCart4 } from "react-icons/bs";
import { GiRaspberry } from "react-icons/gi";
import { LuBackpack } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { selectSearch, setSearchAndFilter } from "store/slices/actionBar";

import GridToListToggle from "./buttons/GridToListToggle";

const ActionBar = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  return (
    <div className="mb-8 flex items-center">
      <h1 className="text-5xl">Pokemart</h1>

      <div className="ml-8 flex items-center">
        <Link href={"backpack"} className="ml-4 rounded-full p-2 shadow-lg">
          <LuBackpack size={32} />
        </Link>
        <Link href={"backpack"} className="ml-4 rounded-full p-2 shadow-lg">
          <GiRaspberry size={32} />
        </Link>
      </div>
      <div className="ml-auto flex items-center justify-center gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            dispatch(setSearchAndFilter(e.target.value));
          }}
          className="rounded-md border p-2"
        />
        <GridToListToggle />
        <Link href={"cart"} className="ml-4 rounded-full p-2 shadow-lg">
          <BsCart4 size={32} />
        </Link>
      </div>
    </div>
  );
};

export default ActionBar;
