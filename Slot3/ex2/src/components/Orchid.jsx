export default function Orchid({ orchid }) {
  return (
    <div className="orchid-card">
      <div className="img-wrapper">
        <img src={orchid.image} alt={orchid.orchidName} />
      </div>

      <h3>{orchid.orchidName}</h3>

      <p className="price">{orchid.price.toLocaleString("vi-VN")} ₫</p>

      <p className="category">{orchid.category}</p>

      {orchid.isSpecial && <span className="badge">Special</span>}
    </div>
  );
}
