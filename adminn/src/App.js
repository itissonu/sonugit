import { Home } from "./page/home/Home";
import { List } from "./page/list/List";
import { Login } from "./page/login/Login";
import { New } from "./page/new/New";
import { Single } from "./page/single/Single";

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New title="Add New User" />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New title="Add New Product" />} />
        </Route>
      </Route>
      <Route path="/namelist" element={<List />} />
      <Route path="/single" element={<Single />} />
      <Route path="/new" element={<New />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
