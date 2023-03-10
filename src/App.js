import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/User/layout";
import AdminLayout from "./components/pages/Admin/layout";
import {
  AdminPanel,
  CustomerListing,
  DealerListing,
  DeviceListing,
  Login,
  Report,
  UserAdminPanel,
} from "./components";
import { useState } from "react";
// import AdminLayout from "./components/pages/Admin/layout";

function App() {
  const [isSetAuthenticated, setIsSetAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* ======== user pages::start ======= */}
        {isSetAuthenticated ? (
          <Route path="/*" element={<Layout />}>
            <Route index element={<UserAdminPanel />} />
            <Route path="report" element={<Report />} />
          </Route>
        ) : (
          <>
            <Route
              path="*"
              element={<Login setIsSetAuthenticated={setIsSetAuthenticated} />}
            />
            <Route
              path="/login"
              element={<Login setIsSetAuthenticated={setIsSetAuthenticated} />}
            />
          </>
        )}
        {/* ======== user pages::end ======= */}

        {/* ======== admin pages :: start ========= */}
        <Route path="/*" element={<AdminLayout />}>
          <Route path="admin-panel" element={<AdminPanel />} />
          <Route path="customer-listing" element={<CustomerListing />} />
          <Route path="device-listing" element={<DeviceListing />} />
          <Route path="dealer-listing" element={<DealerListing />} />
        </Route>
        {/* ======== admin pages :: end ========= */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
