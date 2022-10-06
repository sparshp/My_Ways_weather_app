import Header from "./components/Header";
import data from "./data.json"
import { TbMapSearch } from 'react-icons/tb'
import DetailsCard from './components/DetailsCard';
import SummaryCard from './components/SummaryCard';

function App() {
  console.log(data);
  const Wdata = data.query.results.channel;
  const weatherData = data.query.results.channel.item.forecast;
  console.log(weatherData,"dgfcg")
  return (
    <div className="container">
    <div className="blur" style={{top: '-10%', right: '0'}}></div>
    <div className="blur" style={{top: '36%', left: '-6rem'}}></div>
    <div className="content">
      <div className="form-container">
        <div className="name">
          <div className="logo">Sparsh - Weather App<hr></hr></div>
          <div className="city">
            <TbMapSearch />
              <p>{Wdata.location.city} {Wdata.location.region}</p>
            </div>
          </div>

          <div className="search">
            <p style={{ fontSize: "100px" }}>{Wdata.item.condition.temp} {Wdata.units.temperature}</p>
            <p>in {Wdata.location.city}</p>
          <h2>The Only Weather App You Need !</h2>
          <hr />
          <p>{Wdata.astronomy.sunrise}</p>
          <img src={Wdata.image.url} alt="" />
        </div>
        
      </div>
      <div className="info-container">
        <Header />
        {data.length === 0 ? 
            <div className="nodata">
              <h1>{data.query.results}</h1>
            </div> : 
            <>
              <h1>{Wdata.title} </h1>
              <DetailsCard data={data} />
              <h1 className="title">More On </h1>
              <ul className="summary">
              {weatherData.slice(0,5).map((days, index) =>{
                if(index > 0){
                  return (<SummaryCard key={index} day={days} />)
                }
              })}
              </ul>
            </>
          }
      </div>
    </div>
  </div>
  );
}

export default App;
