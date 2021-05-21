import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import { BoxLoading } from "react-loadingg";

//Layout
import AppLayout from "./Layouts/AppLayout";
import AdminLayout from "./Layouts/AdminLayout";

//Custom Route
import AdminRoute from "./auth/AdminRoute";

//Pages
const Home = lazy(() => import("./pages/Home"));
const Movie = lazy(() => import("./pages/Movie"));
const News = lazy(() => import("./pages/News"));
const Cinemas =lazy(() => import("./pages/Cinemas"))
const Checkout = lazy(() => import("./pages/Checkout"));
const AdminHome = lazy(() => import("./pages/Admin/AdminHome"));
const AdminMovies = lazy(() => import("./pages/Admin/AdminMovies"));
const AdminUsers = lazy(() => import("./pages/Admin/AdminUsers"));
const AdminCinemas = lazy(() => import("./pages/Admin/AdminCinemas"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Register = lazy(() => import("./pages/RegisterPage"));

//Component App
function App() {
  return (
    <Suspense fallback={<BoxLoading />}>
      <BrowserRouter>
        <Switch>
          {/* Route Admin */}
          <Route path="/admin">
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/home" />
                <AdminRoute path="/admin/home">
                  <AdminHome />
                </AdminRoute>
                <AdminRoute path="/admin/movies">
                  <AdminMovies />
                </AdminRoute>
                <AdminRoute path="/admin/users">
                  <AdminUsers />
                </AdminRoute>
                <AdminRoute path="/admin/cinemas">
                  <AdminCinemas />
                </AdminRoute>
              </Switch>
            </AdminLayout>
          </Route>

          {/* Route Login */}
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>

          {/* Route Checkout */}
          <Route path="/checkout/:movieId">
            <Checkout />
          </Route>

          {/* Route Main */}
          <Route path="/">
            <AppLayout>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                {/* Route chi tiet phim */}
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                {/* Route tin-tuc */}
                <Route path="/tin-tuc/:newId">
                  <News />
                </Route>
                {/* Route rap-chieu-phim */}
                <Route path="/rap-chieu-phim/:cinemasId">
                  <Cinemas />
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
