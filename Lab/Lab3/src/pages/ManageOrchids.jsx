import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  getAllOrchids,
  createOrchid,
  updateOrchid,
  deleteOrchid,
} from "../api/orchidApi";
import OrchidForm from "../components/OrchidForm";
import CustomModal from "../components/CustomModal";

export default function ManageOrchids() {
  const [orchids, setOrchids] = useState([]);

  // Form
  const [showForm, setShowForm] = useState(false);
  const [editingOrchid, setEditingOrchid] = useState(null);
  const [errors, setErrors] = useState({});

  // Delete modal
  const [showDelete, setShowDelete] = useState(false);
  const [deletingOrchid, setDeletingOrchid] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getAllOrchids();
    setOrchids(data);
  };

  /* ================= VALIDATION ================= */
  const validate = (data) => {
    const errs = {};

    if (!data.orchidName?.trim()) errs.orchidName = "Orchid name is required";

    if (!data.price || data.price <= 0)
      errs.price = "Price must be greater than 0";

    if (!data.category?.trim()) errs.category = "Category is required";

    if (!data.image?.trim()) errs.image = "Image URL is required";

    return errs;
  };

  /* ================= CREATE ================= */
  const handleCreate = async (data) => {
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const newOrchid = await createOrchid(data);
    setOrchids([...orchids, newOrchid]);
    setShowForm(false);
    setErrors({});
  };

  /* ================= UPDATE ================= */
  const handleUpdate = async (data) => {
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const updated = await updateOrchid(editingOrchid.id, data);
    setOrchids(orchids.map((o) => (o.id === updated.id ? updated : o)));
    setShowForm(false);
    setErrors({});
  };

  /* ================= DELETE ================= */
  const confirmDelete = async () => {
    await deleteOrchid(deletingOrchid.id);
    setOrchids(orchids.filter((o) => o.id !== deletingOrchid.id));
    setShowDelete(false);
    setDeletingOrchid(null);
  };

  return (
    <>
      <h2>🌸 Manage Orchids</h2>

      <Button
        className="mb-3"
        variant="warning"
        onClick={() => {
          setEditingOrchid(null);
          setErrors({});
          setShowForm(true);
        }}
      >
        ➕ Add Orchid
      </Button>

      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th width="180">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orchids.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.orchidName}</td>
              <td>{Number(o.price).toLocaleString()} ₫</td>
              <td>{o.category}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() => {
                    setEditingOrchid(o);
                    setErrors({});
                    setShowForm(true);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => {
                    setDeletingOrchid(o);
                    setShowDelete(true);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ADD / EDIT FORM */}
      <OrchidForm
        show={showForm}
        onClose={() => setShowForm(false)}
        initialData={editingOrchid}
        onSubmit={editingOrchid ? handleUpdate : handleCreate}
        errors={errors}
      />

      {/* DELETE CONFIRM MODAL */}
      <CustomModal
        show={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={confirmDelete}
        type="confirm"
        title="Confirm Delete"
        data={
          deletingOrchid && {
            Name: deletingOrchid.orchidName,
            Price: deletingOrchid.price,
            Category: deletingOrchid.category,
          }
        }
      />
    </>
  );
}
