import { createBrowserRouter } from "react-router-dom";
import { App } from '../App'
import { Home } from '../layouts/Home'
import { AboutMe } from '../layouts/AboutMe'
import { WorkingExp } from '../layouts/WorkingExp'
import { Recog } from '../layouts/Recog' 
import { Skill } from "../layouts/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/works",
        element: <WorkingExp />,
      },
      {
        path: "/recog",
        element: <Recog />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
    ],
  },

]);

export default router