import React from "react";
import "./StudentInfo.css";
import { useState } from "react";
import StudentInfoHandler from "./StudentInfoHandler";

export default function StudentInfo() {
     const [Surname, setSurname] = useState("");
     const [Name, setName] = useState("");
     const [Patronymic, setPatronymic] = useState("");
     const [Birthday, setBirthday] = useState("");
     const [Year, setYear] = useState("");
     const [Fuculty, setFuculty] = useState("");
     const [Group, setGroup] = useState("");
     const [Special, setSpecial] = useState("");
     const [Email, setEmail] = useState("");
     const [Phone, setPhone] = useState("");
     const [menuActive, setMenuActive] = useState(false);
     const [operatorEmail, setOperatorEmail] = useState("");
     const [operatorPhone, setOperatorPhone] = useState("");

     return (
          <div id='middle'>
               <div id='middle-container'>
                    <h1>Form</h1>
                    <label>
                         <h3>Фамилия</h3>
                         <input id='Surname' type='text' />
                    </label>
                    <label>
                         <h3>Имя</h3>
                         <input id='Name' type='text' />
                    </label>
                    <label>
                         <h3>Отчество</h3>
                         <input id='Patronymic' type='text' />
                    </label>
                    <label>
                         <h3>Дата рождения</h3>
                         <input id='Birthday' type='date' />
                    </label>
                    <label>
                         <h3>Год поступления в университет</h3>
                         <input id='Year' type='number' />
                    </label>
                    <label>
                         <h3>Факультет</h3>
                         <input id='Fuculty' type='text' />
                    </label>
                    <label>
                         <h3>Группа</h3>
                         <input id='Group' type='number' />
                    </label>
                    <label>
                         <h3>Специальность</h3>
                         <input id='Special' type='text' />
                    </label>
                    <label>
                         <h3>Электронная почта</h3>
                         <input
                              id='Email'
                              type='email'
                              onChange={() => {
                                   if (
                                        document
                                             .getElementById("Email")
                                             .value.includes("@gmail.com")
                                   ) {
                                        setOperatorEmail("@gmail.com");
                                   }
                                   if (
                                        document
                                             .getElementById("Email")
                                             .value.includes("@mail.ru")
                                   ) {
                                        setOperatorEmail("@mail.ru");
                                   }
                              }}
                         />
                    </label>
                    <label>
                         <h3>Номер телефона</h3>
                         <input
                              id='Phone'
                              type='text'
                              onChange={() => {
                                   if (
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375291) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375293) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375296) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375299) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+37544)
                                   ) {
                                        setOperatorPhone("A1 (Velcom)");
                                   }
                                   if (
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375292) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375295) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375297) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+375298) ||
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+37533)
                                   ) {
                                        setOperatorPhone("МТС");
                                   }
                                   if (
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+37525)
                                   ) {
                                        setOperatorPhone("life:)");
                                   }
                                   if (
                                        document
                                             .getElementById("Phone")
                                             .value.includes(+37517)
                                   ) {
                                        setOperatorPhone(
                                             "Белтелеком (городской)"
                                        );
                                   }
                              }}
                         />
                    </label>
                    <div id='btn'>
                         <button
                              onClick={() => {
                                   setSurname(
                                        document.getElementById("Surname").value
                                   );
                                   setName(
                                        document.getElementById("Name").value
                                   );
                                   setPatronymic(
                                        document.getElementById("Patronymic")
                                             .value
                                   );
                                   setBirthday(
                                        document.getElementById("Birthday")
                                             .value
                                   );
                                   setYear(
                                        document.getElementById("Year").value
                                   );
                                   setFuculty(
                                        document.getElementById("Fuculty").value
                                   );
                                   setGroup(
                                        document.getElementById("Group").value
                                   );
                                   setSpecial(
                                        document.getElementById("Special").value
                                   );
                                   setEmail(
                                        document.getElementById("Email").value
                                   );
                                   setPhone(
                                        document.getElementById("Phone").value
                                   );
                                   setMenuActive(!menuActive);
                              }}>
                              Отправить
                         </button>
                    </div>
                    <div>
                         <StudentInfoHandler
                              operatorEmail={operatorEmail}
                              operatorPhone={operatorPhone}
                              active={menuActive}
                              setActive={setMenuActive}
                              Surname={Surname}
                              Name={Name}
                              Patronymic={Patronymic}
                              Birthday={Birthday}
                              Year={Year}
                              Fuculty={Fuculty}
                              Group={Group}
                              Special={Special}
                              Email={Email}
                              Phone={Phone}
                         />
                    </div>
               </div>
          </div>
     );
}
