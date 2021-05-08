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

    return (
        <AdminContext.Provider value={{
          AdminToast
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState
