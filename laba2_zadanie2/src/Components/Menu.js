import "./Menu.css";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const Menu = ({ header, items, active, setActive }) => {
     return (
          <div className={active ? "menu active" : "menu"}>
               <div className='menu__content'>
                    <div className='menu__header'>{header}</div>
                    <ul>
                         {items.map((item) => (
                              <li className='menu_li'>
                                   <a className='menu__li' href={item.href}>
                                        {item.value}
                                   </a>
                                   <p>
                                        <Icon
                                             path={item.icon}
                                             size={1}
                                             color='white'
                                        />
                                   </p>
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default Menu;
