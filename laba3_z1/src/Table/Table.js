import "./Table.css";
import React, { useState } from "react";

const Table = ({ sortData, items }) => {
     function color(p) {
          let styleConfig;
          if (p > 0 && p < 3) {
               styleConfig = { backgroundColor: "yellow" };
          } else if (p === 0) styleConfig = { backgroundColor: "red" };
          return styleConfig;
     }
     let stringNumber = 0;
     return (
          <div>
               <table>
                    <thead>
                         <tr className='table_first'>
                              <td className='td'>
                                   <span className='span_table'>№</span>
                              </td>
                              <td className='td'>
                                   <span
                                        onClick={() => sortData("name")}
                                        className='span_table'>
                                        Name
                                   </span>
                              </td>
                              <td className='td'>
                                   <span
                                        onClick={() => sortData("price")}
                                        className='span_table'>
                                        Price
                                   </span>
                              </td>
                              <td className='td'>
                                   <span
                                        onClick={() => sortData("In_stock")}
                                        className='span_table'>
                                        In Stock
                                   </span>
                              </td>
                         </tr>
                    </thead>
                    <tbody>
                         {items.map((item) => (
                              <tr>
                                   <td className='number'>{++stringNumber}</td>
                                   <td>{item.name}</td>
                                   <td className='price'>{item.price}</td>
                                   <td
                                        className='stock'
                                        style={color(item.In_stock)}>
                                        {item.In_stock}
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
};

export default Table;
