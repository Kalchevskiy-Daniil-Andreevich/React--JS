import React from "react";
import "./StudentInfo.css";

export default function StudentInfoHandler({
     Surname,
     Name,
     Patronymic,
     Birthday,
     Year,
     Fuculty,
     Group,
     Special,
     Email,
     Phone,
     active,
     setActive,
     operatorEmail,
     operatorPhone,
}) {
     let date = new Date();
     let year = date.getFullYear();
     let date1 = new Date(Birthday);
     let year1 = date1.getFullYear();
     let year2 = year - year1;
     let kurs = year - Year;
     return (
          <div>
               <div className='popupbg'>
                    <table className={active ? "menu active" : "menu"}>
                         <tr>
                              <td>ФИО</td>
                              <td>
                                   {Surname} {Name} {Patronymic}
                              </td>
                         </tr>
                         <tr>
                              <td>Текущий возраст студента</td>
                              <td>{year2} лет</td>
                         </tr>
                         <tr>
                              <td>Факультет, курс, группа</td>
                              <td>
                                   {Fuculty}, {kurs} , {Group}
                              </td>
                         </tr>
                         <tr>
                              <td>Специальность</td>
                              <td>{Special}</td>
                         </tr>
                         <tr>
                              <td>Электронная почта</td>
                              <td>{Email}</td>
                         </tr>
                         <tr>
                              <td>Оператор услуг электронной почты</td>
                              <td>{operatorEmail}</td>
                         </tr>
                         <tr>
                              <td>Номер телефона</td>
                              <td>{Phone}</td>
                         </tr>
                         <tr>
                              <td>Оператор услуг мобильной связи</td>
                              <td>{operatorPhone}</td>
                         </tr>
                    </table>
               </div>
          </div>
     );
}
