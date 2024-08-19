import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  countries: any[];
}

const Map = ({ countries }: MapProps) => {
  const zoom = 4;
  const position: [number, number] = [20.5937, 78.9629];

  return (
    <MapContainer
      className="h-screen"
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='<a href="https://github.com/vikas-parmar" target="_blank">VIKAS PARMAR</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countries.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{country.country}</h3>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
