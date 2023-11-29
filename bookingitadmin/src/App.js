import { useContext } from "react";
import { Home } from "./page/home/Home";
import { List } from "./page/list/List";
import { Login } from "./page/login/Login";
import { New } from "./page/new/New";
import { Single } from "./page/single/Single";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import { NewHotel} from "./page/newHotel/NewHotel";
import  {NewRoom} from "./page/newRoom/NewRoom";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from "./contex/authContex";
import { userInputs } from "./formSource";

function App() {
  const { user } = useContext(AuthContext)

  const ProtectedRoutes = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />
    }
    return children;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="users">
              <Route index    element={
                  <ProtectedRoutes>
                    <List columns={userColumns} />
                  </ProtectedRoutes>
                } />
              <Route path=":userId" element={
                  <ProtectedRoutes>
                    <Single  />
                  </ProtectedRoutes>
                } />
              <Route path="new"  element={
                  <ProtectedRoutes>
                    <New inputs={userInputs}  title="Add New User" />
                  </ProtectedRoutes>
                } />
            </Route>
            <Route path="hotels">
              <Route index element={
                  <ProtectedRoutes>
                    <List columns={hotelColumns} />
                  </ProtectedRoutes>
                } />
              <Route path=":productId"   element={
                  <ProtectedRoutes>
                    <Single />
                  </ProtectedRoutes>
                }  />
              <Route path="new"  element={
                  <ProtectedRoutes>
                    <NewHotel columns={hotelColumns} />
                  </ProtectedRoutes>
                } />
            </Route>
          </Route>
          <Route path="/rooms"> 
          <Route
                index
                element={
                  <ProtectedRoutes>
                    <List columns={roomColumns} />
                  </ProtectedRoutes>
                }
              />
               <Route
                path=":productId"
                element={
                  <ProtectedRoutes>
                    <Single columns={roomColumns}/>
                  </ProtectedRoutes>
                }
              />
               <Route
                path="new"
                element={
                  <ProtectedRoutes>
                    <NewRoom  />
                  </ProtectedRoutes>
                }
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
