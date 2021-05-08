import React from 'react'
import Producto from './Producto'

const Productos = ({productos}) => {
    return (
        <div class="card-group">
            {
                productos.map((objProducto) => {
                    return(
                        
                        <Producto objProducto={objProducto} />
                        
                    )
                })
            }
            
        </div>
    )
}

export default Productos
