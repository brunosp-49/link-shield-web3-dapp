import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster, } from "sonner";
import LandingPage from "../pages/landingPage";
import RedirectPage from "../pages/redirectPage";
import Layout from "@/components/sidebar";
import NewLink from "@/pages/adminDashboard/newLink";
import MyLinks from "@/pages/adminDashboard/myLinks";
import GetInTouch from "@/pages/adminDashboard/getInTouch";
import Transactions from "@/pages/adminDashboard/transactions";

export const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<NewLink />} />
          <Route path="my-links" element={<MyLinks />} />
          <Route path="get-in-touch" element={<GetInTouch />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
        <Route path="/r/:shortId" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="bottom-left" richColors />
  </div>
);
