const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let abc = letters.map(function (letter) {
     return <td>{letter}</td>;
});

function chess() {
     return (
          <table className='table'>
               <tbody>
                    <tr className='abc'>
                         <td></td>
                         {abc}
                         <td></td>
                    </tr>
                    <tr>
                         <td className='number'>8</td>
                         <td className='white'>♜</td>
                         <td className='brown'>♞</td>
                         <td className='white'>♝</td>
                         <td className='brown'>♛</td>
                         <td className='white'>♚</td>
                         <td className='brown'>♝</td>
                         <td className='white'>♞</td>
                         <td className='brown'>♜</td>
                         <td className='number'>8</td>
                    </tr>
                    <tr>
                         <td className='number'>7</td>
                         <td className='brown'>♟</td>
                         <td className='white'>♟</td>
                         <td className='brown'>♟</td>
                         <td className='white'>♟</td>
                         <td className='brown'>♟</td>
                         <td className='white'>♟</td>
                         <td className='brown'>♟</td>
                         <td className='white'>♟</td>
                         <td className='number'>7</td>
                    </tr>
                    <tr>
                         <td className='number'>6</td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='number'>6</td>
                    </tr>
                    <tr>
                         <td className='number'>5</td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='number'>5</td>
                    </tr>
                    <tr>
                         <td className='number'>4</td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='number'>4</td>
                    </tr>
                    <tr>
                         <td className='number'>3</td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='brown'></td>
                         <td className='white'></td>
                         <td className='number'>3</td>
                    </tr>
                    <tr>
                         <td className='number'>2</td>
                         <td className='white'>♙</td>
                         <td className='brown'>♙</td>
                         <td className='white'>♙</td>
                         <td className='brown'>♙</td>
                         <td className='white'>♙</td>
                         <td className='brown'>♙</td>
                         <td className='white'>♙</td>
                         <td className='brown'>♙</td>
                         <td className='number'>2</td>
                    </tr>
                    <tr>
                         <td className='number'>1</td>
                         <td className='brown'>♖</td>
                         <td className='white'>♘</td>
                         <td className='brown'>♗</td>
                         <td className='white'>♕</td>
                         <td className='brown'>♔</td>
                         <td className='white'>♗</td>
                         <td className='brown'>♘</td>
                         <td className='white'>♖</td>
                         <td className='number'>1</td>
                    </tr>
                    <tr className='abc'>
                         <td></td>
                         {abc}
                         <td></td>
                    </tr>
               </tbody>
          </table>
     );
}

ReactDOM.render(chess(), document.getElementById("root"));
