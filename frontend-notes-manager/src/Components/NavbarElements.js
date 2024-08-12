import{FaBars} from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';


export const Nav=styled.nav`
       background-color:#B1E624;
       height:85px;
       display:flex;
       justify-content:space-between;
       padding:0.2 calc((100vw-1000px)/2);
       z-index:12;

`;

export const NavLink=styled(Link)`
        color:#000;
        display:flex;
        align-item:center;
        text-decoration:none;
        padding:0 1rem;
        font-weight:700;
        height:100%
        cursor:pointer;
        &.active{
            color:red;
        }
       &:hover{
        color:red;
       }

`;
export const Bar=styled(FaBars)`
         display:none;
         color:#000000;
         @media screen and (max-width :768px){
            display:block;
            position:absolute;
            top:0;
            right:0;
            transform:translate(-100%,75%);
            font-size:1.8rem;
            cursor:pointer;
         }

`;

export const NavMenu=styled.div`
       display:flex;
       align-item:center;
       margin-right:24px;
       @media screen and (max-width:768px){
        display:none;

       }

`;