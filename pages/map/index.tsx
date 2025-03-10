import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { NextPage } from "next";
import MetaData from "../../components/metadata";

const MAP_ACCESS_TOKEN = 'pk.eyJ1IjoibGFpdG9vbyIsImEiOiJjbTVseDduaDgwd2pvMmpzY2N5b2puMjEyIn0.fAA1T-_H1gzJTXce-Aedbg';
mapboxgl.accessToken = MAP_ACCESS_TOKEN; // Replace with your Mapbox access token

interface MapComponentProps {
  selectedCountries: string[];
}

const MapComponent: React.FC<MapComponentProps> = ({ selectedCountries }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const selectedCountriesRef = useRef<string[]>(selectedCountries);

  useEffect(() => {
    selectedCountriesRef.current = selectedCountries;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [0, 20],
      zoom: 2,
    });

    map.current.on('load', () => {
      map.current!.addSource('countries', {
        type: 'geojson',
        data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson',
      });

      map.current!.addLayer({
        id: 'countries-borders',
        type: 'line',
        source: 'countries',
        paint: {
          'line-color': 'black',
          'line-width': 1,
        },
      });

      map.current!.addLayer({
        'id': 'highlighted-country',
        'type': 'fill',
        'source': 'countries',
        'paint': {
            'fill-color': '#00ff00',
            'fill-opacity': 0.5,
        },
        'filter': ['in', ['get', 'iso_a2'], ['literal', selectedCountries]],
      });

      // map.current!.on('click', 'highlighted-country', (e) => {
      //   const country = e.features?.[0].properties?.iso_a2;
      //   if (country) {
      //     window.location.href = `/country/${country}`;
      //   }
      // });

      // map.current!.on('mouseenter', 'highlighted-country', () => {
      //   map.current!.getCanvas().style.cursor = 'pointer';
      // });

      // map.current!.on('mouseleave', 'highlighted-country', () => {
      //   map.current!.getCanvas().style.cursor = '';
      // });

    });

    return () => map.current?.remove();
  }, []);

  return <div ref={mapContainer} className="w-screen h-screen" />;
};

const VisitedCountries: NextPage = () => {
  return (
      <div>
          <MetaData title="Alzobair Elkhalifa portfolio" description="Alzobair Elkhalifa's portfolio visited countries list page"></MetaData>
          <div className="backdrop-blur w-full h-screen">
              <MapComponent selectedCountries={['SD', 'MY', 'LK', 'AE']} />
          </div>
      </div >
  )
};


export default VisitedCountries;
