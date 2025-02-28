import ButtonInverse from '../../components/ButtonInverse/Index';
import ButtonPrimary from '../../components/ButtonPrimary/Index';
import HeaderClient from '../../components/HeaderClients';
import ProductDatailsCard from '../../components/ProductDatailsCard';
import { ProductDTO } from '../../models/product';

import './styles.css'
const product: ProductDTO = {
  id: 2,
  name: "Macbook Pro",
  description: "Notebook Apple Macbook Pro A2141 Intel Core I7 500gb 16gb ",
  imgUrl:"https://http2.mlstatic.com/D_NQ_NP_650511-MLB69199391616_052023-O.webp",
  price: 1250.0,
  categories: 
    [
      {
          "id": 1,
          "name": "Livros"
      },
      {
          "id": 2,
          "name": "Eletrônicos"
      },
      {
          "id": 3,
          "name": "Computadores"
      }
  ]
  

}

export default function ProductDetails(){
return  (  <>
    <HeaderClient />
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDatailsCard product = {product}/>
        <div className="dsc-btn-page-container">
           <ButtonPrimary />
           <ButtonInverse />
        </div>
      </section>
    </main>
      </> )
}