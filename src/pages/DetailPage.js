import '../App.css';
import { StoreInfoBox } from '../components/StoreInfoBox';
import { FlagshipProduct } from '../components/FlagshipProduct';
import { DetailTopImg } from '../components/DetailTopImg';
import BackButton from '../components/BackButton';

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
