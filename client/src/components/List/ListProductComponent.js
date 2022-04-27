import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ListProductComponent = (props) => {
  const navigate = useNavigate();

  //conver currenc7
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  const handleEdit = () => {
    navigate("/edit-product");
  };

  const handleDelete = () => {
    navigate("/list-product");
  };

  return (
    <>
      <tr className="align-middle text-center">
        <th scope="row">{`${props.number}`}</th>
        <td>
          <img src={props.image} alt="image-product" className="image-list-product" />
        </td>
        <td>{props.title}</td>
        <td>{`${props.description.slice(0, 30)}....`}</td>
        <td>{formatter.format(props.price)}</td>
        <td>{props.stock}</td>
        <td className="text-center">
          <Link to={`/edit-product/${props.id}`} onClick={handleEdit} className="btn bg-var-green text-white fw-bold m-1" href="" style={{ width: "6rem" }}>
            Edit
          </Link>

          <button to="/delete-product" onClick={handleDelete} className="btn bg-var-red text-white fw-bold m-1" style={{ width: "6rem" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Delete
          </button>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <span className="text-dark text-start fw-bold">Delete Data?</span>
                <span className="text-dark text-start" >Are you sure you want to delete this product?</span>
                <div className="d-flex justify-content-end mt-3 fw-bold">
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

export default ListProductComponent;
