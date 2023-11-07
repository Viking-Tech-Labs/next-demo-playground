import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { getPokemon, selectLayout, selectPokemon } from "store/slices/pokemon";

const PokemonContainer = () => {
  const pokemon = useSelector(selectPokemon);
  const layout = useSelector(selectLayout);
  const dispatch = useDispatch();

  const handleScroll = (event: any) => {
    const element = event.target;

    if (element.scrollHeight - element.scrollTop < element.clientHeight + 50) {
      dispatch(getPokemon());
    }
  };

  return (
    <div className="h-full overflow-hidden pt-[80px]">
      <ul
        onScroll={handleScroll}
        className={`grid h-full gap-4 overflow-y-auto p-4 ${
          layout === "grid" && "grid-cols-4"
        }`}
      >
        {pokemon.map((p: any, i: number) => (
          <Link
            href={`/pokemon/${p.id}`}
            key={`${p.name}-${p.id}-${i}`}
            className="grid cursor-pointer place-content-center justify-center gap-2 rounded-lg shadow-lg"
          >
            <Image
              alt={p.name}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
              width={164}
              height={164}
              quality={55}
            />
            <h2>
              {p.id} - {p.name}
            </h2>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PokemonContainer;
