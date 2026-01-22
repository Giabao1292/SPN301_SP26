import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Orchid({ orchid, onClick }) {
  const navigate = useNavigate();

  const handleViewDetail = (e) => {
    e.stopPropagation(); // tránh click lan ra card
    navigate(`/orchid/${orchid.id}`);
  };

  return (
    <div className="orchid-card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={orchid.image} alt={orchid.orchidName} />
      </div>

      <h3>{orchid.orchidName}</h3>

      <p className="price">{Number(orchid.price).toLocaleString("vi-VN")} ₫</p>

      <p className="category">{orchid.category}</p>

      {orchid.isSpecial && <span className="badge">Special</span>}

      <Button onClick={handleViewDetail}>Xem chi tiết</Button>
    </div>
  );
}
