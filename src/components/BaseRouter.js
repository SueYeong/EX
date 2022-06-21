import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Routes/Home";
import { SubPage } from "./Routes/SubPage";
import { SubPages } from "./Routes/SubPages";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subpage" element={<SubPage />} />
        <Route path="/subpages" element={<SubPages />} />
      </Routes>
    </Router>
  );
};
