import "./homePage.scss";

import SearchBar from "../../componnets/searchBar/SearchBar";


export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">
                Find Hotel Rental & Get Your Dream Place
            </h1>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh lectus. Vivamus ac semper nulla. 
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh lectus. Vivamus ac semper nulla. 
            </p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>18+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/public/bgg.png"/>
      </div>
    </div>
  )
}
