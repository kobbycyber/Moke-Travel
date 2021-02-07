import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/includes/Header';
import Places from "./components/screens/Places"
import Place from "./components/screens/Place"
import Footer from './components/includes/Footer';

function App() {
  return (
    <Router>
    <AppContainer>
          <Header />
          <Switch>
            <Route path="/Moke-Travel" exact component={Places}/>
            <Route path="/Moke-Travel/place/:id" component={Place}/>
          </Switch>
          <Footer />
    </AppContainer>
    </Router>
  );
};

const AppContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`;


export default App;
