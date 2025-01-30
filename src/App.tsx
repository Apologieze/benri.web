import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom"
import { Header, Footer } from "./components"
import { Home, Download } from "./pages"

const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/download" element={<Download />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App

