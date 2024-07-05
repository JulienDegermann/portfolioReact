import { RouterProvider } from "react-router-dom";
import { router } from "../../core/router";


export default function Body() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}