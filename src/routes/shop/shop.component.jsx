import { useContext } from "react";
import './shop.styles.scss'

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from '../../components/product-cart/product-cart.component'

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;