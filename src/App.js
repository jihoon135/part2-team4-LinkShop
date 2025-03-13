import logo from './logo.svg';
import './App.css';
import { StoreInfoBox } from './StoreInfoBox';
import { FlagshipProduct } from './FlagshipProduct';
import { Top } from './Top';
import BackButton from './BackButton';

function App() {
  return (
 <>
 <Top />
 <BackButton />
 <StoreInfoBox />
 <FlagshipProduct />
 </>
  );
}

export default App;
