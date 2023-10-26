import { BsGrid } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

import { Layout, selectLayout, setLayout } from "store/slices/pokemon";

type GridToListToggleProps = {
  onToggle?: (layout: Layout) => void;
};

const GridToListToggle = ({ onToggle }: GridToListToggleProps) => {
  const dispatch = useDispatch();
  const layout = useSelector(selectLayout);

  const handleToggle = () => {
    const newLayout = layout === "grid" ? "list" : "grid";
    dispatch(setLayout(newLayout));

    onToggle?.(newLayout);
  };

  return (
    <button onClick={handleToggle}>
      {layout === "grid" ? <BsGrid size={32} /> : <CiGrid2H size={32} />}
    </button>
  );
};

export default GridToListToggle;
