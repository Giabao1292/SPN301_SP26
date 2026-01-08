import Orchid from "./Orchid";
import OrchidModal from "./OrchidModal";
import { useState } from "react";
export default function ListOrchids({ orchids }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleViewDetail = (orchid) => {
    setSelectedOrchid(orchid);
    setShowModal(true);
  };

  return (
    <div className="orchid-grid">
      {orchids.map((orchid) => (
        <Orchid orchid={orchid} onViewDetail={handleViewDetail} />
      ))}
      <OrchidModal
        show={showModal}
        orchid={selectedOrchid}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
