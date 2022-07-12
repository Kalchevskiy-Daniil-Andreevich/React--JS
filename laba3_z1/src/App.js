import "./App.css";
import Table from "./Table/Table";
import React, { useState } from "react";

import Input_tel from "./Components/Input_tel";

function App() {
     const [TableData, setTableData] = useState([
          {
               name: "Butter",
               price: 0.9 + "$",
               In_stock: 99,
          },
          {
               name: "Cheese",
               price: 4.9 + "$",
               In_stock: 20,
          },
          {
               name: "Fancu French Cheese",
               price: 99 + "$",
               In_stock: 12,
          },
          {
               name: "Heavy Cream",
               price: 3.9 + "$",
               In_stock: 2,
          },
          {
               name: "Milk",
               price: 1.9 + "$",
               In_stock: 32,
          },
          {
               name: "Sour Cream",
               price: 2.9 + "$",
               In_stock: 0,
          },
          {
               name: "Yoghurt",
               price: 2.4 + "$",
               In_stock: 12,
          },
     ]);

     const [directionSort, setDirectionSort] = useState(true);

     const sortData = (field) => {
          const copyData = TableData.concat();

          let sortData;

          if (directionSort) {
               sortData = copyData.sort((a, b) => {
                    return a[field] > b[field] ? 1 : -1;
               });
          }
          sortData = copyData.reverse((a, b) => {
               return a[field] > b[field] ? 1 : -1;
          });
          setTableData(sortData);
          setDirectionSort(!directionSort);
     };

     return (
          <div className='App'>
               <div>
                    <Input_tel />
               </div>
               <div>
                    <Table sortData={sortData} items={TableData} />
               </div>
          </div>
     );
}

export default App;
