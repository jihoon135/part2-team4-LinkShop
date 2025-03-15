import logo from './logo.svg';
import './App.css';
import { StoreInfoBox } from './StoreInfoBox';
import { FlagshipProduct } from './FlagshipProduct';
import { DetailTopImg } from './DetailTopImg';
import BackButton from './BackButton';

function DetailPage() {
  return (
 <>
 <DetailTopImg />
 <BackButton />
 <StoreInfoBox />
 <FlagshipProduct />
 </>
  );
}

export default DetailPage;
