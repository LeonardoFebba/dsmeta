import { useState } from "react";
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
          <div className="dsmeta-card"></div>
        </section>
      </main>
    </>
  );
}

export default App;
