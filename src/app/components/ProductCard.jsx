'use client'
import useUser from "../hooks/useUser";

const ProductCard = ({product}) => {
    const {name, description} = product;
    const user = useUser();
    console.log(user, 'user from productcard');
    return (
        <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;