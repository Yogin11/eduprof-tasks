import { NavLink, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";

//Компонент профайл -->убираем в отд файл
// const Profile = () => {
//     return <h2>Страница профиля</h2>
// };


function App() {
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
                      <Route path="/profile" element={<Profile/>}                      />

                 </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
