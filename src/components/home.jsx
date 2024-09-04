import React from 'react';
import styled from 'styled-components';
import { FaCogs, FaMobileAlt, FaWifi, FaQuoteLeft } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import rezonix from './Rezonix.png'
// import images from './imgs2.jpg';
import images from './rezonixMainPage.jpg'
import amazonlogo from './amazonLogo.png';
import flipkartlogo from './flipkartLogo.png';


const Container = styled.div`
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space out header, body, and footer */
`;

const Header = styled.header`
  background-color: Black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Logo = styled.h1`
//   font-size: 2em;
//   margin: 0;
// `;
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

const CompanyName = styled.span`
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif; /* Apply the font here */
  font-weight: bold;
`;

const Tagline = styled.span`
  font-size: 0.9em;
  font-weight: normal;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Section = styled.section`
  padding: 40px 0;
  text-align: center;

`;

const Hero = styled(Section)`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: black;
  padding: 0px 0;  
  height: 100vh;
  width: 100%;
 `;

const Title = styled.h2`
  font-size: 2.0em;
  margin-bottom: 50px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.6;
`;

const Button = styled.a`
  padding: 10px 20px;
  background: white;
  color: #6a11cb;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;

const About = styled(Section)`
  background-color: #f4f4f4;
  // justify-content: center;
  // align-items: center;
`;

const Platform = styled(Section)`
  background-color: #f4f4f4;
`;

const PlatformCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #6eb2c4,#2d6473; 
  background-color: #6093a1; 
  border-radius: 35px;
  padding: 30px;
  margin-top: 0px;
  margin:18px;
`;

const Text = styled.div`
  font-size: 1.9em;
  font-weight: bold;
  color: #333; /* Dark text color */
  margin-right: 20px;
`;

const Logos = styled.div`
  display: flex;
  gap: 20px; /* Space between logos */
`;

const StyledImg  = styled.img`
  width: 70px;
  height: 70px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 14px 16px rgba(0, 10, 20, 0.2);
`;

const Services = styled(Section)`
  background-color: #fff;
`;

const ServiceCard = styled.div`
  display: inline-block;
  width: 300px;
  padding: 20px;
  margin: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3em;
  margin-bottom: 20px;
  color: #2575fc;
`;

const Testimonials = styled(Section)`
  background-color: #f4f4f4;
`;

const TestimonialCard = styled.div`
  display: inline-block;
  width: 300px;
  padding: 20px;
  margin: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Footer = styled.footer`
  // background-color: #6a11cb;
  // color: white;
  // text-align: center;
  // padding: 50px 0;

  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  justify-content: space-between;
  
  background-color: #2d6473;
  
  color: white;
  align-items: center; /* Center align the sections vertically */
  // padding: 5px;
  height: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContactInfo = styled.div`
  font-size: 1.0em;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap :10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const Copyright = styled.div`
  margin-top: auto;
  padding:1px;
  text-align: center;
  font-size: 1.6em;
  color: white;
  background:Black;
  
`;


const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-around; /* Distribute space evenly between sections */
`;
// const QuickLinksList = styled.div`
//   color: white;
//   list-style:none; 
//   padding: 0px; 
//   margin: 1px;   
//   display: flex;
//   flex-direction: column;

// `;

// const QuickLink = styled.a`
//   margin: 5px 0; 
//   color: white;
 
// `;


function Home() {
  return (
    <Container>
      <Header>
        <Nav>
        <Logo>
            <img src={rezonix} alt="Rezonix Logo" height={55} width={55} />
            <TextContainer>
              <CompanyName>Rezonix</CompanyName>
              <Tagline>Leap To Future</Tagline>
            </TextContainer>
          </Logo>
          <NavLinks>
            {/* <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a> */}
            {/* <div>
              <a href="#">Home</a>
              <a href="#">Devices</a>
              <a href="#">About us</a>
              <a href="#">Advisory Board</a>
              <a href="#">Contact</a>

          
            </div> */}
          </NavLinks>
        </Nav>
      </Header>

      <Hero>
        
        <img src={images} alt="background-image" width={'100%'} height={'100%'}/>
        {/* <Title>Welcome to Our Tech & IoT Company</Title>
        <Subtitle>Innovating the Future, One Device at a Time</Subtitle>
        <Button href="#contact">Get in Touch</Button> */}
        

      </Hero>

      <About id="about">
        <Title>About Us</Title>
        <Subtitle>
        <p style={{textAlign:'center'}}> Rezonix India is a Smart Home Products Company, with which you can control your home completely using Rezo Control App, Google Assistant, Amazon Alexa and Siri using Shortcuts. The best part is it does not require any additional wiring or any hub.Customers can make their homes Smart with just a Wi-Fi connection.Most of the products are easy-to-install and need no electrician support.
          This further eliminates the problems of traditional automation, specifically, the wiring issues, high utility bills, and the time needed to repair faults. Further, time and cost are saved.
        </p>
        </Subtitle>
      </About>

      <Platform id="platform">
        
        <PlatformCard>
          <Text> Very soon available at leading e-commerce platforms</Text>
          <Logos>
          <StyledImg src={amazonlogo} alt="Amazon" />
          <StyledImg src={flipkartlogo} alt="Flipkart" />
          </Logos>
        </PlatformCard>
      </Platform>

      <Services id="services">
        <Title>Superb in Smart Home Solutions</Title>
        <ServiceCard>
          <ServiceIcon><FaCogs /></ServiceIcon>
          <Subtitle>Seamless Connectivity</Subtitle>
          <p>Connect your smart devices with ease. 
            Our solutions work seamlessly with various platforms to ensure a smooth experience.</p>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon><FaMobileAlt /></ServiceIcon>
          <Subtitle>Advanced Security</Subtitle>
          <p>Protect your home and business with our state-of-the-art security features. 
            Stay safe with real-time alerts and secure data transmission.</p>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon><FaWifi /></ServiceIcon>
          <Subtitle>User-Friendly Interface</Subtitle>
          <p>Manage your smart devices effortlessly with our easy-to-use app.
            Enjoy a user-friendly interface designed for convenience.</p>
        </ServiceCard>
        {/* <ServiceCard>
          <ServiceIcon><FaWifi /></ServiceIcon>
          <Subtitle>Energy Efficiency</Subtitle>
          <p>Optimize energy use with smart automation and analytics.
            Reduce costs and minimize your environmental footprint.</p>
        </ServiceCard> */}

      </Services>

      <Testimonials id="testimonials">
        <Title>Testimonials</Title>
        <TestimonialCard>
          <FaQuoteLeft size={24} />
          {/* <p>"The best IoT solutions provider we've worked with. Their expertise and support are unmatched."</p>
          <p><strong>- John Doe, CEO of Tech Innovators</strong></p> */}
          <p>"It’s easy to install, easy to use, the app is highly user friendly and responds well. I am using it on an exterior light switch (not exposed to weather) and there hasn’t been a single instance where it didn’t work."
          </p>
          <p><strong>- Vineet Kumar</strong></p>
        </TestimonialCard>
        <TestimonialCard>
          <FaQuoteLeft size={24} />
          <p>"Easy to pair and setup with it’s app and further connect it to google assistant/alexa. Instead of buying a smart AC, I am able to easily control my current AC using my voice or using my phone."</p>
          <p><strong>- Sumit</strong></p>
        </TestimonialCard>
      </Testimonials>

      <Footer id="contact">
        <SectionContainer>
      <Section>
        <Title>Product</Title>
        <ContactInfo>
        <p style={{textAlign:'left'}}>SmartSense lite</p>
        <p style={{textAlign:'left'}}>SmartSense</p>
        <p style={{textAlign:'left'}}>SmartSense X</p>
        </ContactInfo>
      </Section>
      {/* <Section>
        <Title>Contact Us</Title>
        <ContactInfo>
        <ContactItem>
        <FontAwesomeIcon icon={faEnvelope} />
          <p style={{textAlign:'left'}}>: hello@rezonix.in</p>
          </ContactItem>
          <ContactItem>
          <FontAwesomeIcon icon={faPhone} />
          <p style={{textAlign:'left'}}>: +91 8853159576, 7459899954</p>
          </ContactItem>
        </ContactInfo>
      </Section> */}

      <Section>
        <Title>Contact Us</Title>
        <ContactInfo>
        
        <p style={{textAlign:'left'}}><FontAwesomeIcon icon={faEnvelope} /> &nbsp;  hello@rezonix.in</p>
        <p style={{textAlign:'left'}}><FontAwesomeIcon icon={faPhone} /> &nbsp; +91 8853159576</p>
        
        </ContactInfo>
      </Section>

      </SectionContainer>
      {/* <Copyright> */}
      Copyrights © 2024, Rezonix Private Limited. All Rights Reserved.
      {/* </Copyright> */}


      <Section>
        {/* <Title>Quick Links</Title>
        <ContactInfo>
          <p>Privacy Policy</p>
          <p>Warranty</p>
          <p>Terms of Service</p>
          <p>Download Brochure</p>
        </ContactInfo> */}
      </Section>
      {/* <Section>
        <Title>About</Title>
        <p style={{textAlign:'left'}}>SmartSense offers you Smart App-based control of <br />
            smart lighting and smart security devices. <br />
          With SmartSense Make your life smarter than <br />
          ever with our smart home devices..</p>
      </Section> */}
        {/* <Title>Get in Touch</Title>
        <ContactInfo>
          <p>Email: hello@rezonix.in</p>
          <p>Phone: +91 9648929856</p>
        </ContactInfo> */}

        

      </Footer>
    </Container>
  );
}

export default Home;
