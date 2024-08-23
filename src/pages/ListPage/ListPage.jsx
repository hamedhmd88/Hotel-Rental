import { useProducts } from '../../Context/ContextProvider';
import Card from '../../componnets/card/Card';
import Filter, { useSearchFilter } from '../../componnets/filter/Filter';
import Map from '../../componnets/map/Map';
import { listData } from '../../lib/dataList';
import './listPage.scss';


export default function ListPage() {

    // const data = listData;
    const {hotels} = useProducts();
    console.log(hotels)

    const {input} = useSearchFilter();

    const searchInput = hotels.filter((item) => {

      if(input === '') {
          return item;
      } else {
          return item.title.toLowerCase().includes(input)
      }
  })

  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
            <Filter/>
            
            {
              !!input.length ? (
                <>
                  {searchInput.map((item) =>(
                    <Card key={item.id} item={item}/>
                  ))}
                </>
              ) : (
                <>
                {hotels.map((item) => (
                <Card key={item.id} item={item}/>
            ))}
                </>
              )
            }
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={hotels}/>
      </div>
    </div>
  )
}
