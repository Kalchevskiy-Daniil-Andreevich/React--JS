function App() {
     const stocks = [
          {
               id: 1,
               stock_name: "EFX",
               company_name: "Equifax Inc",
               price: 163.55,
               currency: "USD",
               change: "+9.03",
          },
          {
               id: 2,
               stock_name: "IRM",
               company_name: "Iron Mountain Inc",
               price: 33.21,
               currency: "USD",
               change: "+1.42",
          },
          {
               id: 3,
               stock_name: "NTAP",
               company_name: "NetApp Inc",
               price: 54.81,
               currency: "USD",
               change: "-6.01",
          },
          {
               id: 4,
               stock_name: "CTL",
               company_name: "Centurylink Inc",
               price: 13.79,
               currency: "USD",
               change: "-1.37",
          },
     ];

     function color(p) {
          let styleConfig;
          if (Number(p) < 0) {
               styleConfig = { backgroundColor: "red" };
          } else styleConfig = { backgroundColor: "green" };
          return styleConfig;
     }

     let res = stocks.map(function (item) {
          return (
               <tr key={item.id}>
                    <td key={item.id}>{item.stock_name}</td>
                    <td key={item.id}>
                         {item.price} {item.currency}
                    </td>
                    <td key={item.id} style={color(item.change)}>
                         {item.change}
                    </td>
               </tr>
          );
     });

     return (
          <table key={stocks.id} border='1'>
               <thead>
                    <tr>
                         <td>Название акции</td>
                         <td>Стоимость акции</td>
                         <td>Изменение цены</td>
                    </tr>
               </thead>
               <tbody key={stocks.id}>{res}</tbody>
          </table>
     );
}

ReactDOM.render(App(), document.getElementById("root"));
