//import App from "./App.jsx";
import Game_Board from "./pages/newbae_level/Game_Board"
import Game_Board_Intermidate from "./pages/intermidate_level/Game_Board";
import ErrorPage from './pages/Error_Page';
const routes = [
  {
   path: "/", 
   element: <Game_Board/>,   
    errorElement: <ErrorPage />,
  },
  {
    path: "/intermidate",
    element: <Game_Board_Intermidate/>,
    errorElement: <ErrorPage/>
  }
  
];

export default routes;