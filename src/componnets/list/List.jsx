import { useProducts } from "../../Context/ContextProvider";
import Card from "../card/Card";
import "./list.scss";
export default function List() {
    const {hotels} = useProducts();
  return (
    <div className='list'>
      {hotels.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}
