import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// import Navbar from "components/Navbars/Navbar.js";
// import Footer from "components/Footer/Footer.js";
// import LoadingScreen from 'react-loading-screen';
// import HomePage from "views/HomePage.js";
// import AboutPage from "views/AboutPage.js";
// import BlogsPage from "views/BlogsPage.js";
// import ContactPage from "views/ContactPage.js";
// import SpacePage from "views/SpacePage.js";
// import MarketPage from "views/MarketPage.js";
// import EventsPage from "views/EventsPage.js";

// import logoHavana from "assets/image/logo.png";
import routes from "./routes";
// import AdminPage from "views/examples/LandingPage.jsx";
// import "assets/scss/style.scss";
// import "assets/scss/cloud.scss";
// import "assets/scss/navbar.scss";



class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      status_load: true,
      language:localStorage.getItem('language'),
    };   
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


  render() {
    return (
      <>
        {/* <LoadingScreen loading={this.state.status_load}
          bgColor='#252525'
          spinnerColor='#27401d'
          textColor='#676767'
          logoSrc={logoHavana}
          text='Loading...'
        >  */}
          {/* <Navbar/> */}
            <div className="wrapper">
                <Suspense fallback={this.loading()}>
                    <Switch>{console.log(routes)
                    }
                    {routes.map((route, idx) => {console.log(this.props.routes);
                    
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                          <route.component fnloading={this.fnloading} {...props} />
                          )} />
                      ) : console.log('nullsss') ('nullsss');
                    })};
                    <Redirect from="/" to="/" />
                  </Switch>
                </Suspense>
            </div>
          {/* <Footer/> */}
        {/* </LoadingScreen> */}
      </>
    );
  }
}
export default App;