import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/User/layout";
import { AdminLogin, AdminPanel, UserAdminPanel } from "./components";
import AdminLayout from "./components/pages/Admin/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ======== user pages::start ======= */}
        <Route path="/*" element={<Layout />}>
          <Route index element={<UserAdminPanel />} />
        </Route>
        {/* ======== user pages::end ======= */}

        {/* ======== admin pages::start ======== */}
        <Route path="/*" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="admin-panel" element={<AdminPanel />} />
        </Route>
        {/* ======== admin pages::end ======== */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
