import Item from "./Item";

const ItemList = ({productos}) => {
return (
    
     <ul>
          {productos.map((producto)=> {
              return <item key={producto.id} producto={producto} />
          })}
           </ul> 
           
)
}
export default ItemList ; 