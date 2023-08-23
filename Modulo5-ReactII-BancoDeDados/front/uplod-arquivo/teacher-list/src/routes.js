import Main from './pages/Main';
import SignIn from './pages/SignIn';
import TeacherDetail from './pages/TeacherDetail';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />

      <Route element={<ProtectedRoutes redirectTo='/' />}>
        <Route path='/main' element={<Main />} />
        <Route path='/teacher/:id' element={<TeacherDetail />} />
      </Route>
    </Routes>
  )

}

export default MainRoutes;