import { Modal, Button, ListGroup } from "react-bootstrap";

function CustomModal({
  show,
  onClose,
  onConfirm,
  type = "orchid", // ✅ mặc định hiển thị orchid
  data,
  title = "",
  children,
}) {
  const renderBody = () => {
    if (!data && type !== "default") return null;

    switch (type) {
      case "orchid":
        return (
          <>
            {data?.image && (
              <img
                src={data.image}
                alt={data.orchidName}
                style={{ width: "100%", marginBottom: 10 }}
              />
            )}

            <p>{data?.description}</p>

            <strong>
              Price: {data?.price ? Number(data.price).toLocaleString() : "N/A"}{" "}
              ₫
            </strong>
          </>
        );

      case "confirm":
        return (
          <ListGroup variant="flush">
            {Object.entries(data || {}).map(([key, value]) => (
              <ListGroup.Item key={key}>
                <strong>{key}:</strong> {String(value)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        );

      default:
        return children || null;
    }
  };

  const renderFooter = () => {
    if (type === "confirm") {
      return (
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </>
      );
    }

    return (
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    );
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{renderBody()}</Modal.Body>

      <Modal.Footer>{renderFooter()}</Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
