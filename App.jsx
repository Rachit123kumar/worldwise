import React from "react";
import {useState,useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx"
import Form from "./components/Form.jsx"

const BASE_URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);

  

  useEffect(function () {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error while loading data");
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);


  const countries= cities.map(c=>c.country);



  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/"} element={<Homepage/>} /> */}
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path={"app"} element={<AppLayout />}>
          <Route
            index
            element={<CityList 
              cities={cities} isLoading={isLoading}
            />}
          />
          <Route
            path="cities"
            element={<CityList 
            cities={cities} isLoading={isLoading}
            />}
          />
          <Route path="cities/:id" element={<City/>} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<Form/>} />
        </Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
