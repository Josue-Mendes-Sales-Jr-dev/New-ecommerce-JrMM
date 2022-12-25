import "./header.css";

function NavbarComponent() {
  return (
    <div className="container-fluid nav">
      <div className="container-fluid  menu-text">
        <div className="row boxNavbar">
          <div className="container col-12 menu-text01">
            <h1>Novos Modelos para Homens</h1>
            <p>Roupas masculinas</p>
            <button className="btn btn-primary">
              <a href="#Main"> Novas Roupas </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
