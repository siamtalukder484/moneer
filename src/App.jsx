import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import RootLayout from "./components/layouts/RootLayout"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
