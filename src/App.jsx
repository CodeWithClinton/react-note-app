
import MainLayout from './layouts/MainLayout'
import AddNotePage from './pages/AddNotePage'
import EditNotePage from './pages/EditNotePage'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/add-note" element={<AddNotePage />} />
      <Route path="/edit-note" element={<EditNotePage />} />
      <Route path="/note-detail" element={<NoteDetailPage />} />
    </Route>
    
  ))

  return <RouterProvider router={router} />
}

export default App
