import { SetStateAction, useState } from 'react';
import './App.css';
import Countries from './components/countries';
import Header from './components/header';
import Search from './components/search';
import SingleCountry from './components/singleCountry';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <div
        className={`${
          isDarkMode ? 'bg-neutral-dark_blue' : 'bg-white'
        } shadow-sm`}
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      {/* <main className="bg-neutral-very_dark_blue min-h-screen">
        <Search />
        <Countries
          image_url={'https://placehold.co/600x400'}
          country_name={'Germany'}
          population={'420342093'}
          region={'Berlin'}
          capital={'Merlin'}
        />
      </main> */}
      <SingleCountry
        country_name={'Belgium'}
        native_name={'Belgie'}
        region={'Europe'}
        sub_region={''}
        capital={''}
        border_countOne={'france'}
        border_countTwo={'Germany'}
        border_countThree={'Neitherland'}
        level_domain={'be'}
        currency={'euro'}
        population={13123124312}
        language={['dutch', 'french', 'german']}
      />
    </>
  );
}

export default App;
