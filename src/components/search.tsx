import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <section className="flex justify-between container py-5">
      <div className="flex bg-neutral-dark_blue basis-60% items-center p-2 gap-2">
        <FaSearch className="fill-white" />
        <input
          type="text"
          className="text-sm outline-none bg-neutral-dark_blue text-white placeholder:text-white"
          placeholder="Search for a country"
        />
      </div>
      <select
        name="pets"
        id="pet-select"
        className="min-w-[200px] text-sm bg-neutral-dark_blue text-white outline-none"
      >
        <option value="">Filter By Region</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </section>
  );
}
