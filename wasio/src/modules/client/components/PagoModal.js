import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import ReactToPrint from "react-to-print";

const PagoModal = ({mostrar, setMostrar, carrito}) => {
  const boletaRef = useRef();

  return (
    <Modal show={mostrar} onHide={() => {setMostrar(false)}} size={"xl"}>
      <Modal.Header closeButton>
        <Modal.Title>Boleta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container" ref={boletaRef}>
          <div className="col-md-12">
            <div className="invoice">
              <div className="invoice-company text-inverse fs-3 fw-bolder text-muted mb-3">
                Wasio Place
              </div>
              <div className="invoice-header d-flex justify-content-around bg-light">
                <div className="invoice-from">
                  <small>from</small>
                  <address className="m-t-5 m-b-5">
                    <strong className="text-inverse">Twitter, Inc.</strong>
                    <br />
                    Street Address
                    <br />
                    City, Zip Code
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Fax: (123) 456-7890
                  </address>
                </div>
                <div className="invoice-to">
                  <small>to</small>
                  <address className="m-t-5 m-b-5">
                    <strong className="text-inverse">Company Name</strong>
                    <br />
                    Street Address
                    <br />
                    City, Zip Code
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Fax: (123) 456-7890
                  </address>
                </div>
                <div className="invoice-date">
                  <small>Invoice / July period</small>
                  <div className="date text-inverse m-t-5">August 3,2012</div>
                  <div className="invoice-detail">
                    #0000123DSS
                    <br />
                    Services Product
                  </div>
                </div>
              </div>

              <div className="invoice-content mt-2 mb-2">
                <div className="table-responsive">
                  <table className="table table-invoice">
                    <thead>
                      <tr>
                        <th>Articulo</th>
                        <th>Cant.</th>
                        <th>Descripción</th>
                        <th>P.Unitario</th>
                        <th>P.Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carrito.map((objProducto, i) => {
                        return (
                          <tr key={i}>
                            <td>{objProducto.nombre}</td>
                            <td>{objProducto.cantidad}</td>
                            <td>{objProducto.descripcion}</td>
                            <td>{(objProducto.precio).toFixed(2)}</td>
                            <td>S/{(objProducto.precio * objProducto.cantidad).toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="invoice-price d-flex justify-content-between bg-light align-items-center">
                  <div className="invoice-price-left">
                    <div className="invoice-price-row d-flex justify-content-between align-items-center col-md-12">
                      <div className="sub-price d-flex flex-column col-md-6 align-items-center">
                        <small>SUBTOTAL</small>
                        <span className="text-inverse">$4,500.00</span>
                      </div>
                      <div className="sub-price col-md-2">
                        <i className="fa fa-plus text-muted"></i>
                      </div>
                      <div className="sub-price d-flex flex-column col-md-6 align-items-center">
                        <small>PAYPAL FEE (5.4%)</small>
                        <span className="text-inverse">$108.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-price-right bg-warning d-flex flex-column col-md-4 align-items-center">
                    <small>TOTAL</small>{" "}
                    <span className="f-w-600">$4508.00</span>
                  </div>
                </div>
              </div>

              <div className="invoice-note mt-2">
                <small>* Todos los pagos a nombre de WasioPlace</small>

                <br />
                <small>* Se aceptan devolucion durante 7 días</small>
              </div>

              <div className="invoice-footer mt-2">
                <p className="text-center m-b-5 f-w-600">
                  GRACIAS POR SU COMPRA
                </p>
                <p className="text-center">
                  <span className="m-r-10">
                    <i className="fa fa-fw fa-lg fa-globe"></i> wasio.com.pe
                  </span>
                  <span className="m-r-10">
                    <i className="fa fa-fw fa-lg fa-phone-volume"></i> T:
                    965854586
                  </span>
                  <span className="m-r-10">
                    <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                    wasio@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <ReactToPrint
          trigger={() => (
            <button type="button" className="btn btn-primary">
              Imprimir
            </button>
          )}
          content={() => boletaRef.current}
        />
        <button type="button" className="btn btn-success" onClick={() =>{
            setMostrar(false);
        }}>
          Pagar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PagoModal;
