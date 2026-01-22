import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function OrchidForm({
  show,
  onClose,
  onSubmit,
  initialData,
  errors = {},
}) {
  const emptyForm = {
    orchidName: "",
    price: "",
    category: "",
    image: "",
    description: "",
    isSpecial: false,
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        price: initialData.price ?? "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [initialData, show]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      price: Number(form.price),
    });
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? "Edit Orchid" : "Add Orchid"}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Orchid Name</Form.Label>
            <Form.Control
              name="orchidName"
              value={form.orchidName}
              onChange={handleChange}
              isInvalid={!!errors.orchidName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.orchidName}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Price */}
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              value={form.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
            />
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Image */}
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="image"
              value={form.image}
              onChange={handleChange}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Special */}
          <Form.Check
            type="checkbox"
            name="isSpecial"
            label="Special Orchid"
            checked={form.isSpecial}
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="warning" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
