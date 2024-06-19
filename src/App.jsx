import { NavLink, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Friends } from "./components/Friends";
import { Messages } from "./components/Messages";
import { Settings } from "./components/Settings";

//Компонент профайл -->убираем в отд файл
// const Profile = () => {
//     return <h2>Страница профиля</h2>
// };

function App(props) {
  // console.log(props);
  return (
    // <h1 className="text-center mt-5">Мой контент страницы</h1>;
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Мои друзья
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<h2> Вы в личном кабинете. Выбор в меню слева. </h2>} />
            <Route path="/profile" element={<Profile function={props.function} />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
