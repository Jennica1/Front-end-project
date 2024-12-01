import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PlaylistPage from "./Components/PlaylistPage/PlaylistPage"; // Import PlaylistPage
import Feed from "./pages/Feed";
import PostList from './components/Feed/PostList';
import PostPage from './Components/Feed/PostPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playlist/:name" element={<PlaylistPage />} />{" "}
          <Route path="/feed" element={<Feed />} />
          <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PostList />} />
          <Route path="posts/:postId" element={<PostPage />} />
        </Route>
      </Routes>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;