import { Form, Row, Col } from "react-bootstrap";

export default function FilterSort({
  categories,
  onFilterChange,
  onSortChange,
}) {
  return (
    <Form className="mb-4">
      <Row>
        <Col md={6}>
          <Form.Select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={6}>
          <Form.Select onChange={(e) => onSortChange(e.target.value)}>
            <option value="">No Sorting</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}
