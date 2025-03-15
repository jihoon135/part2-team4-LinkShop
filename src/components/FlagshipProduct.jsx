import "./FlagshipProduct.css";

export const FlagshipProduct = () => {
  const products = [
    { id: 1, name: "아디다스 가젤", price: "₩134,000", image: "Rectangle 158.png" },
    { id: 2, name: "아디다스 가젤 HP5379", price: "₩104,000", image: "Rectangle 172.png" },
    { id: 3, name: "나이키 집업", price: "₩154,000", image: "Rectangle 175.png" },
    { id: 4, name: "나이키 신발", price: "₩124,000", image: "Rectangle 176.png" },
    { id: 5, name: "나이키 신발", price: "₩124,000", image: "Frame 2609141.png" },
    { id: 6, name: "나이키 신발", price: "₩124,000", image: "Frame 2609142.png" },
  ];

  return (
    <>
      <div>
        <h4 className="title">대표 상품</h4>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
