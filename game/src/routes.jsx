//import App from "./App.jsx";
import Game_Board from "./pages/intermidate_level/Game_Board"
import Game_Board_Intermidate from "./pages/newbae_level/Game_Board";
import Game_Board_Hard from "./pages/hard_level/Game_Board"
import LeaderBoard  from "./pages/leaderboard/leaderboard"
import ErrorPage from './pages/Error_Page';
const routes = [
  {
   path: "/", 
   element: <Game_Board_Intermidate />,   
    errorElement: <ErrorPage />,
  },
  {
    path: "/intermidate",
    element: <Game_Board/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/hard",
    element: <Game_Board_Hard/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard/>,
    errorElement: <ErrorPage/>
  }
  
];

export default routes;