import './App.css';
import ProdCard from './components/Productcard';

export function App() {

  const products = [
        {
            image:'https://images.pexels.com/photos/9897883/pexels-photo-9897883.jpeg?auto=compress&cs=tinysrgb&w=600',
            name : 'Watch',
            brand : 'Cartier',
            details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            price : '10 $'

        },

   
        {
            image:'https://www.shutterstock.com/image-photo/afife-portugal-march-5-2017-260nw-593223746.jpg',
            name : 'Shoes',
            brand : 'Nike',
            details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            price : '22 $'

        },


      {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3OaCTOGrxpLFGLTAuZ-wXdN6VO2fwdr2Wg&usqp=CAU',
        name : 'Shirts',
        brand : 'Peter England',
        details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price : '15 $'
      },


      {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAKEjSU3D496QRyr-74SarNfsvQM4uz0uvA&usqp=CAU',
        name : 'Headphones',
        brand : 'Hammer',
        details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price : '20 $'

      },


      {
        image:'https://cdn.shopify.com/s/files/1/0696/1011/1257/products/BPMAEC02RED_7_400x.webp?v=1674034982',
        name : 'Bags',
        brand : 'SkyBags',
        details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price : '10 $'

      }]


      


  return (
        <div className="App">
          <h1>Products List</h1>
          <ProdCard products = {products} />
        </div>
        );
      
  
        };

export default App;
