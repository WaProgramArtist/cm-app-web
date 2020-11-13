import styled from "styled-components";
import React, { useState } from "react";
import {
  faBars,
  faHouseUser,
  faPaperPlane,
  faCopy,
  faMailBulk,
  faCommentAlt,
  faChartPie,
  faCompressArrowsAlt,
  faSignOutAlt,
  faUserCog,
  faChevronDown,
  faCogs,
  faGripLines,
  faUsersCog,
  faListAlt,
  faUsers,
  faCog,
  faPaste,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Confirm } from "./Confirm";
import { reactLocalStorage } from "reactjs-localstorage";

const SidebarContainer = styled.div`
  position: fixed;
  width: 47px;
  height: 100vh;
  overflow: auto;
  display: flex;
  background-color: #2c2d3d;
  left: 0px;
  top: 0px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 9998;
`;

const IconBars = styled.span`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 17px;
`;

const IconHome = styled.span`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
`;

const ContentAll = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: transparent;
  z-index: 9998;
  position: fixed;
  left: 47px;
  top: 0px;
  padding-bottom: 20px;
`;

const MenuContent = styled.div`
  width: 230px;
  height: 100vh;
  overflow: auto;
  position: fixed;
  background-color: #2c2d3d;
  left: 47px;
  top: 0px;
  flex-direction: column;
  z-index: 9998;
  padding-bottom: 100px;
`;

const ContentLogo = styled.div`
  width: 230px;
  height: 100px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.span`
  font-size: 18px;
  font-weight: 500;
  background: linear-gradient(
    180deg,
    rgb(101, 91, 184) 0%,
    rgb(141, 80, 146) 50%,
    rgb(184, 67, 110) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Kanit", sans-serif;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Kanit", sans-serif;
  margin-top: -5px;
`;

const CLM = styled.div`
  color: rgb(252, 25, 28);
  font-size: 30px;
  font-weight: 700;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Kanit", sans-serif;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const MenuTitleText = styled.div`
  color: #747688;
  font-size: 1rem;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

const BoxMenu = styled.div`
  margin-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

const BoxMenuLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderMenu = styled.div`
  color: #747688;
  font-size: 14px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  line-height: 1.5;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  color: #747688;
  font-size: 14px;
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  color: #747688;
  margin-top: 10px;
  font-size: 14px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const MenuText = styled.div`
  color: #747688;
  font-size: 14px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const Top = styled.div`
  width: 47px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  width: 47px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function Sidebar({ history }) {
  const [open, onToggleMenu] = useState(false);
  const [openLogout, onToggleLogout] = useState(false);
  const onLogOut = () => {
    onToggleLogout(true);
  };

  const logOut = () => {
    onToggleLogout(false);
    reactLocalStorage.clear();
    if (process.env.REACT_APP_BASE_URL === "local") {
      window.location.href = "/logoutdev";
    } else if (process.env.REACT_APP_BASE_URL === "dev") {
      window.location.href = "/logoutdev";
    } else if (process.env.REACT_APP_BASE_URL === "uat") {
      window.location.href = "/logoutuat";
    } else {
      window.location.href = "/logoutprd";
    }
  };

  let permissions = reactLocalStorage.getObject("permissions");

  if (!permissions[0]) {
    permissions = [];
  }

  let SC001 = false;
  if (permissions.filter((p) => p.screenid === "SC001")[0]) {
    SC001 = true;
  }

  let SC002 = false;
  if (permissions.filter((p) => p.screenid === "SC002")[0]) {
    SC002 = true;
  }
  let SC003 = false;
  if (permissions.filter((p) => p.screenid === "SC003")[0]) {
    SC003 = true;
  }
  let SC004 = false;
  if (permissions.filter((p) => p.screenid === "SC004")[0]) {
    SC004 = true;
  }
  let SC005 = false;
  if (permissions.filter((p) => p.screenid === "SC005")[0]) {
    SC005 = true;
  }
  let SC006 = false;
  if (permissions.filter((p) => p.screenid === "SC006")[0]) {
    SC006 = true;
  }
  let SC007 = false;
  if (permissions.filter((p) => p.screenid === "SC007")[0]) {
    SC007 = true;
  }
  let SC008 = false;
  if (permissions.filter((p) => p.screenid === "SC008")[0]) {
    SC008 = true;
  }
  let SC009 = false;
  if (permissions.filter((p) => p.screenid === "SC009")[0]) {
    SC009 = true;
  }
  let SC010 = false;
  if (permissions.filter((p) => p.screenid === "SC010")[0]) {
    SC010 = true;
  }
  let SC011 = false;
  if (permissions.filter((p) => p.screenid === "SC011")[0]) {
    SC011 = true;
  }

  return (
    <React.Fragment>
      {openLogout && (
        <Confirm
          onClose={() => {
            onToggleLogout(false);
          }}
          onConfirm={logOut}
          text="Signed out?"
        />
      )}
      <SidebarContainer open={open}>
        <Top>
          <IconBars onClick={() => onToggleMenu(!open)} title="Show Hide Menu">
            <FontAwesomeIcon
              icon={faBars}
              style={{
                color: "#747688",
                fontSize: 20,
              }}
            />
          </IconBars>

          <IconHome
            title="Main Page"
            onClick={() => {
              history.push("/home");
            }}
          >
            <FontAwesomeIcon
              icon={faHouseUser}
              style={{
                color: "#747688",
                fontSize: 20,
              }}
            />
          </IconHome>
          <IconHome onClick={onLogOut} title="Logout">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{
                color: "#747688",
                fontSize: 20,
              }}
            />
          </IconHome>
        </Top>
        <Bottom></Bottom>
      </SidebarContainer>
      {open && (
        <ContentAll
          onClick={() => {
            onToggleMenu(!open);
          }}
        >
          <MenuContent>
            <ContentLogo>
              <CLM>CLM</CLM>
              <Logo>Communication Center</Logo>
            </ContentLogo>
            <Menus>
              <MenuTitleText>Menus</MenuTitleText>
            </Menus>

            <BoxMenu>
              <HeaderMenu>
                <BoxMenuLeft>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <HeaderText>Send Message</HeaderText>
                </BoxMenuLeft>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    color: "#747688",
                    fontSize: 14,
                    marginRight: 10,
                  }}
                />
              </HeaderMenu>

              {SC001 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/SingleMessage");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Single Message</MenuText>
                </Menu>
              )}

              {SC005 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/TransactionMessage");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faListAlt}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Single Transaction</MenuText>
                </Menu>
              )}

              {SC002 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/BulkMessage");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Bulk Message</MenuText>
                </Menu>
              )}
            </BoxMenu>

            <BoxMenu>
              <HeaderMenu>
                <BoxMenuLeft>
                  <FontAwesomeIcon
                    icon={faCopy}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <HeaderText>Summarry</HeaderText>
                </BoxMenuLeft>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    color: "#747688",
                    fontSize: 14,
                    marginRight: 10,
                  }}
                />
              </HeaderMenu>
              {SC006 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/SummaryTargetList");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCompressArrowsAlt}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Summarry Target List</MenuText>
                </Menu>
              )}

              {SC003 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/SummaryQuota");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChartPie}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Summarry Quota</MenuText>
                </Menu>
              )}
            </BoxMenu>

            <BoxMenu>
              <HeaderMenu>
                <BoxMenuLeft>
                  <FontAwesomeIcon
                    icon={faCogs}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <HeaderText>Management</HeaderText>
                </BoxMenuLeft>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    color: "#747688",
                    fontSize: 14,
                    marginRight: 10,
                  }}
                />
              </HeaderMenu>
              {SC004 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageChannel");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGripLines}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Management Channel</MenuText>
                </Menu>
              )}

              {SC008 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageGroup");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Management Group</MenuText>
                </Menu>
              )}

              {SC010 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageService");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCog}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Management Service</MenuText>
                </Menu>
              )}

              {SC011 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageTemplate");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPaste}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>Management Template</MenuText>
                </Menu>
              )}
            </BoxMenu>

            <BoxMenu>
              <HeaderMenu>
                <BoxMenuLeft>
                  <FontAwesomeIcon
                    icon={faUsersCog}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <HeaderText>Users</HeaderText>
                </BoxMenuLeft>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    color: "#747688",
                    fontSize: 14,
                    marginRight: 10,
                  }}
                />
              </HeaderMenu>

              {SC008 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageGroup");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsersCog}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>User Group</MenuText>
                </Menu>
              )}

              {SC007 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageUser");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUserCog}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>User</MenuText>
                </Menu>
              )}

              {SC009 === true && (
                <Menu
                  onClick={() => {
                    onToggleMenu(!open);
                    history.push("/ManageRule");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsersCog}
                    style={{
                      color: "#747688",
                      fontSize: 18,
                      marginRight: 10,
                    }}
                  />
                  <MenuText>User Rule</MenuText>
                </Menu>
              )}
            </BoxMenu>
          </MenuContent>
        </ContentAll>
      )}
    </React.Fragment>
  );
}
