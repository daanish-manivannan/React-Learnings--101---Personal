import styles from './product-item.module.css';

function ProductItem ({singleProductItem,key})
{
    return(
        <div style={{padding:'20px', border:'2px solid red', marginBottom: '10px'}} key ={key}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent/>
        </div>
    );
}
function ButtonComponent ()
{
    return <button className={styles.buttonStyle}>Click</button>
}

export default ProductItem