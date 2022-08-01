import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./styled";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

const Footer = () => {
  return (
    <Box>

      <div style={{
        textAlign: "center",
        marginTop: "-50px",
        marginBottom: '50px'
      }}>
        <Typography
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
            <h1 style={{ flexGrow: '1', }}>
              <MapsHomeWorkOutlinedIcon style={{ color: '#5AFF3D', }} fontSize='large' />
              Royal<span style={{ color: '#5AFF3D', }}>Realty</span>
            </h1>
          </Link>

        </Typography>
      </div>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">History</FooterLink>
            <FooterLink href="#">We have</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Buy</FooterLink>
            <FooterLink href="#">Rent</FooterLink>
          </Column>
          <Column>
            <Heading>Project</Heading>
            <FooterLink href="#">Beach city</FooterLink>
            <FooterLink href="#">Green city</FooterLink>
            <FooterLink href="#">Night city</FooterLink>
            <FooterLink href="#">Modern city</FooterLink>
          </Column>
          <Column>
          <Heading>Contact us</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span >
                  <FacebookIcon fontSize="large" style={{ color: '#5AFF3D', }}/>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span >
                  <InstagramIcon fontSize="large" style={{ color: '#5AFF3D', }}/>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span >
                  <TwitterIcon fontSize="large" style={{ color: '#5AFF3D', }}/>
                </span>
              </i>
            </FooterLink>
            
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
