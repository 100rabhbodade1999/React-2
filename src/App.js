import './App.css';
import ProdCard from './components/Productcard';

export function App() {

   const prodOne = {
         image:'https://images.pexels.com/photos/9897883/pexels-photo-9897883.jpeg?auto=compress&cs=tinysrgb&w=600',
         name : 'Watch',
         brand : 'Cartier',
         details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
         price : '10 $'

   }

   
   const prodTwo = {
      image:'https://www.shutterstock.com/image-photo/afife-portugal-march-5-2017-260nw-593223746.jpg',
      name : 'Shoes',
      brand : 'Nike',
      details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      price : '22 $'

}


const prodThree = {
   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3OaCTOGrxpLFGLTAuZ-wXdN6VO2fwdr2Wg&usqp=CAU',
   name : 'Shirt',
   brand : 'Peter England',
   details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
   price : '15 $'

}


const prodFour = {
   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAKEjSU3D496QRyr-74SarNfsvQM4uz0uvA&usqp=CAU',
   name : 'Headphones',
   brand : 'Hammer',
   details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
   price : '20 $'

}


const prodFive = {
   image:'https://cdn.shopify.com/s/files/1/0696/1011/1257/products/BPMAEC02RED_7_400x.webp?v=1674034982',
   name : 'Bags',
   brand : 'SkyBags',
   details : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
   price : '10 $'

}


          const button1Style = {
            
               border: 'none',
               outline: 0,
               padding: 10,
               color: 'white',
               background: 'tan',
               textAlign: 'center',
               cursor: 'pointer',
               width: '100%'
          }

          const price1Style = {
               fontSize: '25px',
               margin: '13px',
               color: '#D2B48C'
          }
          

          const img1Style = {
               width: '100%',
          }

          const img2Style = {
               width: '100%',
               height: '182px'
          }

          const button2Style = {
            
            border: 'none',
            outline: 0,
            padding: 10,
            color: 'white',
            background: '#778899',
            textAlign: 'center',
            cursor: 'pointer',
            width: '100%'
       }

       const price2Style = {
         fontSize: '25px',
         margin: '13px',
         color: '#778899'
       }

       const img3Style = {
         height: '188px'
       }

       const price3Style = {
         fontSize: '25px',
         margin: '13px',
         color: '#C0C0C0'
       }

       const button3Style = {
            
         border: 'none',
         outline: 0,
         padding: 10,
         color: 'white',
         background: '#A9A9A9',
         textAlign: 'center',
         cursor: 'pointer',
         width: '100%'
       }

       const img4Style = {
         height: '188px'
       }

       const price4Style = {
         fontSize: '25px',
         margin: '13px',
         color: '#2F4F4F'
       }

       const button4Style = {
            
         border: 'none',
         outline: 0,
         padding: 10,
         color: 'white',
         background: '#696969',
         textAlign: 'center',
         cursor: 'pointer',
         width: '100%'
       }

       const img5Style = {
         height: '188px'
       }

       const price5Style = {
         fontSize: '25px',
         margin: '13px',
         color: '#B22222'
       }

       const button5Style = {
            
         border: 'none',
         outline: 0,
         padding: 10,
         color: 'white',
         background: '#8B4513',
         textAlign: 'center',
         cursor: 'pointer',
         width: '100%'
       }



  return (
        <div className="App">

        <ProdCard
        productDetail={prodOne}
        buttonStyle = {button1Style}
        imgStyle = {img1Style}
        priceStyle={price1Style}
        />

        <ProdCard
        productDetail={prodTwo}
        buttonStyle = {button2Style}
        imgStyle={img2Style}
        priceStyle={price2Style}
        />

        <ProdCard
        productDetail={prodThree}
        imgStyle={img3Style}
        priceStyle={price3Style}
        buttonStyle = {button3Style}
        />

        <ProdCard
        productDetail={prodFour}
        imgStyle={img4Style}
        priceStyle={price4Style}
        buttonStyle = {button4Style}
       
        />

        <ProdCard
        productDetail={prodFive}
        imgStyle={img5Style}
        priceStyle={price5Style}
        buttonStyle = {button5Style}
        
        />
       
      
        </div>
        );
      
  
        };

export default App;
