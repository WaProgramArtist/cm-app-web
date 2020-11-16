import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faHouseUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/index';
import { TemplatePage01 } from './pages/pageTemplate/';
import { ListLogin } from './pages/loginCenter/';
import mariMobileNumber from './pages/mariMobileNumber/mariMobileNumber';
import unbarSMS from './pages/unbarSMS/unbarSMS';
// import NotFound from './components/not-found';
const Routes = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <AppBody>
            <Router>
                <div>
                    <SideNavBody>
                            <MainNav>
                                <FontAwesomeIcon 
                                    onClick={() => setOpenMenu(!openMenu)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={openMenu}
                                    icon={faAlignJustify} 
                                    size={"2x"} 
                                    color="#B2BABB"
                                /><br/><br/>
                                <FontAwesomeIcon icon={faHouseUser} size={"2x"} color="#B2BABB"/><br/><br/>
                                <FontAwesomeIcon icon={faSignInAlt} size={"2x"} color="#B2BABB"/>
                            </MainNav>

                            <Collapse in={openMenu} dimension="width">
                                <CollapseNav>
                                    <SideNavHeader>
                                    CM App
                                    </SideNavHeader>

                                    <SideNavMenu>
                                        <ui>
                                            <li>
                                                <CustomLink to="/list-login">List login</CustomLink>
                                            </li>
                                        </ui>

                                        <ui>
                                            <li>
                                                <CustomLink to="/mari-mobile-number">Mari mobile number</CustomLink>
                                            </li>
                                        </ui>
                                    </SideNavMenu>
                                </CollapseNav>
                            </Collapse>
                    </SideNavBody>
                </div>
                <div>
                    <AppContaintBody>
                        <Switch>
                            <Route exact path='/'>
                                <ListLogin menu={'Login Center'} title={'Show Login & Password'}/>
                            </Route>
                            <Route exact path='/login-center'>
                                <loginCenter/>
                            </Route>
                            <Route exact path='/mari-mobile-number'>
                                <mariMobileNumber/>
                            </Route>
                            <Route exact path='/unbar-sms'>
                                <unbarSMS/>
                            </Route>
                            {/* <Route name="NotFoundPage" component={NotFound} /> */}
                        </Switch>
                    </AppContaintBody>
                </div>
            </Router>
        </AppBody>
    );
};

export default Routes;

const AppBody = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    grid-column-gap: 5px;
`;

const SideNavBody = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    height: 100%;
    width: 340px;
`;

const AppContaintBody = styled.div`
    display: flex;
    padding: 0px;
    width: 100%;
`;

const MainNav = styled.div`
    background-color: #212F3D;
    padding: 10px;
    text-align: center;
`;

const CollapseNav = styled.div`
    background-color: #212F3D;
    color: #B2BABB;
    padding: 10px;
    margin: 0 0 0 1px;
    list-style-type: none;
    z-index: 1;
`;

const SideNavHeader = styled.div`
    text-align: center;
    color: #B2BABB;
    padding: 10px;
    border-bottom: solid 1px #B2BABB;
`;

const SideNavMenu = styled.div`
    color: #B2BABB;
    padding: 10px;
`;

const CustomLink = styled(Link)`
  color: #B2BABB;
  :hover {
        color: #B2BABB;
        text-decoration: none;
    }
`;