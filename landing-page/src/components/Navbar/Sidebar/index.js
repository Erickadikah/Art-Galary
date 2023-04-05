import React from 'react';
import { SidebarContainer,
     Icon, 
     CloseIcon, 
     SideBtnWrap, 
     SidebarWrapper, 
     SidebarMenu, 
     SidebarLink, 
     SidebarRoute
    } from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="#About" >
            About
          </SidebarLink>
             <SidebarLink to="#discover" >
            Discover
          </SidebarLink>
             <SidebarLink to="#services" >
            Services
          </SidebarLink>
             <SidebarLink to="#signup" >
            Sign up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/signin" >Sign In</SidebarRoute>
        </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;