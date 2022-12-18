import Pages from "./pages/Pages"
import Category from "./Components/Category";
import {BrowserRouter, Link} from 'react-router-dom';
import Search from "./Components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
//import Login from "./Components/Login/Login";
//import useToken from "./Components/useToken";

//import Dashboard from './Components/Dashboard';
//import Preferences from './Components/Preferences';


function App() {

  //const { token, setToken } = useToken();
  //if(!token) {
  //  return <Login setToken={setToken} />
  //}
// create Navbar for pages and logo
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={"/"}>
            World Recipes!!
          </Logo>
        </Nav>
          <Search/>
          <Category/>
          <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;

export default App;
