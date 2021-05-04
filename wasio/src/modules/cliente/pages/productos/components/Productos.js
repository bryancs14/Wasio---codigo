import React from 'react'
import Producto from './Producto'

const Productos = ({productos}) => {
    return (
        <div class="card-group">
            {
                productos.map((objProducto) => {
                    return(
                        <div class="col-md-3 mt-3 naranja" key={objProducto.id}>
                        <Producto objProducto={objProducto} />
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Productos
