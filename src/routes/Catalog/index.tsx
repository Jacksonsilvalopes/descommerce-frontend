
import HeaderClient from '../../components/HeaderClients';
import './styles.css'

import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';

import ButtonCunstomized from '../../components/ButtonCunstomized/Index';
import { ProductDTO } from '../../models/product';

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


export default function Catalog(){
return  (  <>
    <HeaderClient />
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
       <CatalogCard product={product} />
       <CatalogCard product={product} />    
       <CatalogCard product={product} />
       <CatalogCard product={product} />  
       <CatalogCard product={product} />
       <CatalogCard product={product} />  
       <CatalogCard product={product} />
       <CatalogCard product={product} />  
       <CatalogCard product={product} />
       <CatalogCard product={product} />  
        </div>
        <ButtonCunstomized  textButton='Carregar mais' />
       
      </section>
    </main>
      </> )
}