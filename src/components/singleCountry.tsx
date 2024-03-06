type SingleCountryProps = {
  country_name: string;
  native_name: string;
  population: number;
  region: string;
  sub_region: string;
  capital: string;
  border_countOne: string;
  border_countTwo: string;
  border_countThree: string;
  level_domain: string;
  currency: string;
  language: string[];
};

export default function SingleCountry({
  country_name,
  native_name,
  population,
  region,
  sub_region,
  capital,
  border_countOne,
  border_countTwo,
  border_countThree,
  level_domain,
  currency,
  language: border,
}: SingleCountryProps) {
  return (
    <section className="bg-neutral-very_dark_blue min-h-screen container py-5">
      <button>back</button>
      <div className="flex justify-between">
        <figure>
          {' '}
          <img src="/public/vite.svg" alt="" />
        </figure>
        <div className="text-white">
          <h4 className="text-4xl font-semibold">{country_name}</h4>
          <div className="flex mt-6 gap-28 text-base">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-1">
                {' '}
                <p>Native Name:</p>
                <span>{native_name}</span>
              </li>
              <li className="flex gap-1">
                <p>Population</p>
                <span>{population}</span>
              </li>
              <li className="flex gap-1">
                <p>Region</p>
                <span>{region}</span>
              </li>
              <li className="flex gap-1">
                <p>Sub Region</p>
                <span>{sub_region}</span>
              </li>
              <li className="flex gap-1">
                <p>Capital</p>
                <span>{capital}</span>
              </li>
            </ul>

            <ul>
              <li className="flex gap-1">
                <p>Top Level Domain</p>
                <span>{level_domain}</span>
              </li>
              <li className="flex gap-1">
                {' '}
                <p>Currencies</p>
                <span>{currency}</span>
              </li>
              <li className="flex gap-1">
                {' '}
                <p>Languages</p>
                <span>{border}</span>
              </li>
            </ul>
          </div>
          <div className="flex mt-6 items-center gap-3">
            <h5>Border Countries:</h5>
            <ul className="flex items-center gap-2">
              <li className="flex gap-1 bg-neutral-dark_blue px-4 py-2 capitalize">
                {' '}
                {border_countOne}
              </li>
              <li className="flex gap-1 bg-neutral-dark_blue px-4 py-2 capitalize">
                {' '}
                {border_countTwo}
              </li>
              <li className="flex gap-1 bg-neutral-dark_blue px-4 py-2 capitalize">
                {' '}
                {border_countThree}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
