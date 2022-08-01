import { useContext } from "react"
import { Routes, Route }
  from 'react-router-dom';
import { BuyPage } from './pages/Buy/buyPage';
import { Contact } from './pages/Contact/contact';
import Home from './pages/home';

import SignInSide from './components/combineSignInSignUp/index'
import Error from './pages/error';
import AdminPage from './pages/AdminPage/Home';
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";
import ListHouse from "./pages/listHouse/List";
import Single from "./components/single/Single";
import New from "./components/new/New";
import { productInputs, userInputs } from "./formSource";
import ListCustomer from "./pages/listCustomer/List";
import ListUser from "./pages/listUser/List";
import AddHouse from "./components/addHouse";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signUp" element={<SignInSide />} />
            <Route path='pages/:type' element={<BuyPage />} />
            <Route path='pages/Contact' element={<Contact />} />

            <Route path='*' element={<Error />} />
            <Route path="admin">
              <Route index element={<AdminPage />} />
              <Route path="customer">
                <Route index element={<ListCustomer />} />
               
              </Route>
              <Route path="products">
                <Route index element={<ListHouse />} />
               
                <Route
                  path="new"
                  element={<New/>}
                />
              </Route>
              <Route path="users">
                <Route index element={<ListUser />} />              
               
              </Route>
            </Route>

          </Route>



        </Routes>
      </div>

    </>
  );
}

export default App;



