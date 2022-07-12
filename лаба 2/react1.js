function interval() {
     function Clocks(props) {
          let today = new Date();
          let hour = today.getHours();
          let minute = today.getMinutes();
          let second = today.getSeconds();
          let time;
          hour = hour - 3 + props.clocks.timezone;
          if (props.clocks.format === 12) {
               if (hour < 12) {
                    hour = hour - 12;
                    if (hour < 0) {
                         hour = hour + 12;
                    }
                    time = hour + ":" + minute + ":" + second + " AM";
               } else {
                    hour = hour - 12;
                    if (hour < 0) {
                         hour = hour + 12;
                    }
                    time = hour + ":" + minute + ":" + second + " PM";
               }
          }
          if (props.clocks.format === 24) {
               if (hour < 0) {
                    hour = hour + 24;
               }
               time = hour + ":" + minute + ":" + second;
          }
          return (
               <div>
                    <h1>{time}</h1>
               </div>
          );
     }
     ReactDOM.render(
          <Clocks clocks={{ format: 24, timezone: -5 }} />,
          document.getElementById("root")
     );
}
setInterval(interval, 100);
