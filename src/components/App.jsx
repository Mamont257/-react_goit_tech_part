import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import UserList from './UserList/UserList';
import Home from './Home/Home';

export const App = () => {
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<UserList />} />
        {/* <Route
          path="/registered"
          element={
            <PublicRoute component={<RegisterView />} redirectTo="/contact" />
          }
        /> */}
      </Routes>
    </div>
  );
};
