import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PostList from './components/Feed/PostList';
import PostPage from './Components/Feed/PostPage';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PostList />} />
          <Route path="posts/:postId" element={<PostPage />} />
        </Route>
      </Routes>
  </StrictMode>,
)
