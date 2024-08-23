import { useParams } from "react-router-dom";
import "./SinglePage.scss";
import { useProductDetails, useProducts } from "../../Context/ContextProvider";
import { userData } from "../../lib/dataList";
import Map from "../../componnets/map/Map";
import Slider from "../../componnets/slider/Slider";


export default function SingPage() {

  const {id} = useParams();
  const {hotels} = useProducts();

  const productDetails = useProductDetails(id);


  if(!productDetails) return (
    <div>Loading...</div>
  );

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={productDetails.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{productDetails.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{productDetails.address}</span>
                </div>
                <div className="price">$ {productDetails.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{productDetails.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{productDetails.bedroom} bedroom</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{productDetails.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Subway</span>
                <p>{productDetails.subway}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{productDetails.bus}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            
            <Map items={hotels}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}