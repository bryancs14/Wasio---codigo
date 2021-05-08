import React from 'react';
import Swal from "sweetalert2"
import AdminContext from './adminContext'

const AdminState = (props) => {

  //SweetAlert
  const AdminToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // const ConfirmarDelete = Swal.fire({
  //   title: '¡Desea eliminar?',
  //   text: 'Esta accion es ireversible',
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'Si',
  //   cancelButtonText: 'No'
  // }).then((result) => {
  //   if (result.value) {
  //     Swal.fire(
  //       'Eliminado',
  //       'Ha sido eliminado',
  //       'success'
  //     )
  //   } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     Swal.fire(
  //       'Cancelado',
  //       'No se elimino',
  //       'error'
  //     )
  //   }
  // })

    return (
        <AdminContext.Provider value={{
          AdminToast
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState
