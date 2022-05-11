import Image from "next/image";
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
FlexWrap,
Distance,
} from "../components/FooterStyles";
import logo from '../assets/logo.svg';
import face from '../assets/icon-facebook.svg';
import insta from '../assets/icon-instagram.svg'
import prin from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading><Image src={logo} alt="loading"/></Heading>
			<FlexWrap>
        <div><Image src={face} alt="loading"/></div>
        <div style={{marginLeft:"5px"}}><Image src={insta} alt="loading"/></div>
        <div style={{marginLeft:"5px"}}><Image src={prin} alt="loading"/></div>
        <div style={{marginLeft:"5px"}}><Image src={twitter} alt="loading"/></div>
      </FlexWrap>
		</Column>
		<Column>
			<Heading>Features</Heading>
			<FooterLink href="#">Link Shortening</FooterLink>
			<FooterLink href="#">Branded Links</FooterLink>
			<FooterLink href="#">Analytics</FooterLink>
			
		</Column>
		<Column>
			<Heading>Resources</Heading>
			<FooterLink href="#">Blog</FooterLink>
			<FooterLink href="#">Developers</FooterLink>
			<FooterLink href="#">Support</FooterLink>
			
		</Column>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">
			About
			</FooterLink>
			<FooterLink href="#">
			Our Team
			</FooterLink>
			<FooterLink href="#">
			Careers
			</FooterLink>
			<FooterLink href="#">
			Contact
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
