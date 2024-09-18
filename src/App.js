import { useState } from "react";
import { dummyData } from "./data";
import Table from "./components/Table";
import Pagination from "./components/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.js";

const ITEMS_PER_PAGE = 5;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalItems = dummyData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = dummyData.slice(startIndex, endIndex);

  return (
    <div className="App">
      <h1 className="text-center">Person's Data</h1>
      <Table data={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
