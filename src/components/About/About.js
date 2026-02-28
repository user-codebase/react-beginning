import Container from '../Container/Container';
// import Hero from '../../Hero/Hero';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <Container>
      {/* <Hero title="About" /> */}
      <PageTitle>About</PageTitle>
      <p>This application allows you to manage columns and cards using Redux.</p>
    </Container>
  );
};

export default About;