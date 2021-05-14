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
const AdminMovies = lazy(() => import("./pages/AdminMovies"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

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
                <Redirect exact from="/admin" to="/admin/movies" />
                <AdminRoute path="/admin/movies">
                  <AdminMovies />
                </AdminRoute>
                <AdminRoute path="/admin/users">
                  <AdminUsers />
                </AdminRoute>
              </Switch>
            </AdminLayout>
          </Route>

          {/* Route Login */}
          <Route path="/login">
            <LoginPage />
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
