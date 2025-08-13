import { Outlet, useLocation } from "react-router-dom";
import {
  ActiveContainer,
  IconContainer,
  MainContainer,
  OutletContainer,
  SidebarContainer,
  SidebarLogo,
  SidebarMenu,
  SidebarMenuItem,
  TitleContainer,
} from "./styled";
import MiniShieldIcon from "@/assets/svg/miniShield";
import { NewLinkIcon } from "./svg/newLinkIcon";
import { MyLinks } from "./svg/myLinks";
import { GetInTouch } from "./svg/getInTouch";
import { Transactions } from "./svg/transactions";
import { Text } from "../text/styled";
import { ActivePage } from "./svg/activePage";
import { theme } from "@/assets/colors";
export default function Layout() {
  const location = useLocation();
  const currentPage = location.pathname;
  console.log({ currentPage });

  const isCurrentPage = (path: string) => {
    return currentPage === `/dashboard${path}` ? true : false;
  };

  return (
    <MainContainer>
      <SidebarContainer>
        <SidebarLogo>
          <MiniShieldIcon />
        </SidebarLogo>
        <SidebarMenu>
          {[
            { title: "New link", navigate: "", icon: NewLinkIcon },
            { title: "My links", navigate: "/my-links", icon: MyLinks },
            {
              title: "Transactions",
              navigate: "/transactions",
              icon: Transactions,
            },
            {
              title: "Get in touch",
              navigate: "/get-in-touch",
              icon: GetInTouch,
            },
          ].map((item, index) => (
            <SidebarMenuItem key={index} to={`/dashboard${item.navigate}`}>
              {isCurrentPage(item.navigate) ? (
                <ActiveContainer>
                  <ActivePage />
                </ActiveContainer>
              ) : (
                <ActiveContainer />
              )}
              <IconContainer>
                <item.icon
                  active={isCurrentPage(item.navigate) ? true : false}
                />
              </IconContainer>
              <TitleContainer>
                <Text
                  fontSize="15px"
                  fontWeight={isCurrentPage(item.navigate) ? "500" : "400"}
                  color={
                    isCurrentPage(item.navigate)
                      ? theme.colors.blue[1]
                      : theme.colors.dark[2]
                  }
                >
                  {item.title}
                </Text>
              </TitleContainer>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </MainContainer>
  );
}
