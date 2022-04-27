import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ListCategoryComponent = (props) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate("/list-category");
  };

  return (
    <>
      <tr className="text-center align-middle">
        <th scope="row" >
          {props.id}
        </th>
        <td>{props.title}</td>
        <td>
          <Link to={`/edit-category/${props.id}`}>
            <a className="btn bg-var-green text-white fw-bold m-1" style={{ width: "6rem" }}>
              Edit
            </a>
          </Link>

          <button to="/delete-product" onClick={handleDelete} className="btn bg-var-red text-white fw-bold m-1" style={{ width: "6rem" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Delete
          </button>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <span className="text-dark text-start fw-bold">Delete Data?</span>
                <span className="text-dark text-start" >Are you sure you want to delete this category?</span>
                <div className="d-flex justify-content-end mt-3">
                  <button type="button" className="btn bg-var-green fw-bold text-white me-2 px-5" data-bs-dismiss="modal">
                    Yes
                  </button>
                  <button type="button" className="btn bg-var-red fw-bold text-white px-5" data-bs-dismiss="modal">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>

        </td>
      </tr>
    </>
  );
};

export default ListCategoryComponent;
