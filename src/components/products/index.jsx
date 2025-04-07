import ProductItem from "./components/product-item";

import "./style.css";

const ProductList = ({ListofProducts, name,city}) =>
{
    // console.log({props});
    // const {name , city}= props

        const flag= false;
    // function renderTextBlock(getFlag)
    // {
    //      return getFlag?
    //         (<h4> Name io {name} and  from the city is {city} </h4>):
    //         (<h4> Hello world </h4>)

    // }
    const renderTextBlock = flag?
    (<h4> Name io {name} and  from the city is {city} </h4>):
            (<h4> Hello world </h4>)

    return (
        <div>
            <h3 className="title"> ECommerce Project </h3>
            {/* {renderTextBlock(flag)} */}
            {renderTextBlock}

            {/* <ProductItem/> */}
            <ul>
               {
                ListofProducts.map( (item, index)=>  
                <ProductItem singleProductItem={item} key={index}/> 
                )
               }

            </ul>
            
        </div>
    );
}

const DummyProductData=["Product 1", "Product 2" , "Product 3"];


export default ProductList