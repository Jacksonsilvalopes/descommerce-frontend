import ButtonInverse from '../../components/ButtonInverse/Index';
import ButtonPrimary from '../../components/ButtonPrimary/Index';
import HeaderClient from '../../components/HeaderClients';
import ProductDatailsCard from '../../components/ProductDatailsCard';

import './styles.css'


export default function ProductDetails(){
return  (  <>
    <HeaderClient />
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDatailsCard />
        <div className="dsc-btn-page-container">
           <ButtonPrimary />
           <ButtonInverse />
        </div>
      </section>
    </main>
      </> )
}