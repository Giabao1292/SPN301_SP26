import { useEffect, useState } from "react";
import Orchid from "./Orchid";
import FilterSort from "./FilterSort";
import CustomModal from "./CustomModal";
import { getAllOrchids } from "../api/orchidApi";

export default function ListOrchids({ searchKeyword }) {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortType, setSortType] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const data = await getAllOrchids();
        if (mounted) setOrchids(data ?? []);
      } catch (err) {
        console.error("Fetch orchids failed:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    return () => (mounted = false);
  }, []);

  if (loading) return <h3>Loading...</h3>;

  let result = [...orchids];

  if (searchKeyword) {
    result = result.filter((o) =>
      o.orchidName?.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }

  if (selectedCategory) {
    result = result.filter((o) => o.category === selectedCategory);
  }

  if (sortType === "price-asc") result.sort((a, b) => a.price - b.price);
  if (sortType === "price-desc") result.sort((a, b) => b.price - a.price);
  if (sortType === "name-asc")
    result.sort((a, b) => a.orchidName.localeCompare(b.orchidName));
  if (sortType === "name-desc")
    result.sort((a, b) => b.orchidName.localeCompare(a.orchidName));

  return (
    <>
      <FilterSort
        categories={[...new Set(orchids.map((o) => o.category))]}
        onFilterChange={setSelectedCategory}
        onSortChange={setSortType}
      />

      <div className="orchid-grid">
        {result.map((o) => (
          <Orchid
            key={o.id}
            orchid={o}
            onClick={() => {
              setSelectedOrchid(o);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      <CustomModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={selectedOrchid?.orchidName}
        data={selectedOrchid}
      />
    </>
  );
}
