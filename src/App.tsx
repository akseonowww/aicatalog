import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/Home/Home";
import CatalogPage from "./page/Catalog/Catalog";
import AiCardPage from "./page/AiCard/AiCard";

const App = () => {
   return (
      <ConfigProvider
         theme={{
            token: {
               // Seed Token
               colorPrimary: "#000",
               borderRadius: 2,

               // Alias Token
               fontFamily: "Inter",
               colorBgContainer: "#f6ffed",
            },
         }}
      >
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/catalog" element={<CatalogPage />} />
               <Route path="/111" element={<AiCardPage />} />
            </Routes>
         </BrowserRouter>
      </ConfigProvider>
   );
};

export default App;
