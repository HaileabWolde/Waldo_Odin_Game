//import App from "./App.jsx";
import Game_Board from "./pages/Game_Board"
import ErrorPage from './pages/Error_Page';
const routes = [
  {
   path: "/", 
   element: <Game_Board/>,   
    errorElement: <ErrorPage />,
  }
  
];

export default routes;