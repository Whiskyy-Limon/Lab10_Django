import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

function CategoryPage() {
  const navigate = useNavigate();

  const categories = [
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ];

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Categorías</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/categories/new")}
          >
            Nuevo
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th className="text-center">Id</th>
              <th className="text-center" style={{ width: "100px" }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item.cod}>
                <td>{item.nom}</td>
                <td className="text-center">{item.cod}</td>
                <td className="text-center">
                  <button className="btn btn-secondary me-2 btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryPage;
