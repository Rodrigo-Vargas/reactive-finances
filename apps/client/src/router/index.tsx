import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { HomePage } from "../pages/home/page";
import { DashboardPage } from "../pages/home/dashboard/page";

const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
