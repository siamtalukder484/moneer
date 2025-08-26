import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import RootLayout from "./components/layouts/RootLayout"
import Error from "./components/layouts/Error"
import FaqIndex from "./components/pages/faq/Index"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="*" element={<Error/>}/>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<FaqIndex/>}/>
      </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
