import { Link } from 'react-router-dom';
type Countries = {
  image_url: string;
  country_name: string;
  population: string;
  region: string;
  capital: string;
};
export default function Countries({
  image_url,
  population,
  region,
  capital,
  country_name,
}: Countries) {
  return (
    <section className="flex justify-between container py-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="w-full bg-neutral-dark_blue">
          {/* <Link to="/src/components/singleCountry"> */}
          <figure>
            <img src={image_url} alt="" />
          </figure>
          <div className="p-4">
            <h4 className="mb-2 text-white">{country_name}</h4>
            <ul>
              <li className="flex gap-2 text-white">
                <p>Population</p>
                <span>{population}9</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Region</p>
                <span>{region}</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Capital</p>
                <span>{capital}</span>
              </li>
            </ul>
          </div>
          {/* </Link> */}
        </div>
        <div className="w-full bg-neutral-dark_blue">
          <figure>
            <img src={image_url} alt="" />
          </figure>
          <div className="p-4">
            <h4 className="mb-2 text-white">{country_name}</h4>
            <ul>
              <li className="flex gap-2 text-white">
                <p>Population</p>
                <span>{population}9</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Region</p>
                <span>{region}</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Capital</p>
                <span>{capital}</span>
              </li>
            </ul>
          </div>
        </div>{' '}
        <div className="w-full bg-neutral-dark_blue">
          <figure>
            <img src={image_url} alt="" />
          </figure>
          <div className="p-4">
            <h4 className="mb-2 text-white">{country_name}</h4>
            <ul>
              <li className="flex gap-2 text-white">
                <p>Population</p>
                <span>{population}9</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Region</p>
                <span>{region}</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Capital</p>
                <span>{capital}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-neutral-dark_blue">
          <figure>
            <img src={image_url} alt="" />
          </figure>
          <div className="p-4">
            <h4 className="mb-2 text-white">{country_name}</h4>
            <ul>
              <li className="flex gap-2 text-white">
                <p>Population</p>
                <span>{population}9</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Region</p>
                <span>{region}</span>
              </li>
              <li className="flex gap-2 text-white">
                <p>Capital</p>
                <span>{capital}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
