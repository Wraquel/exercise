import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/ContainerStyled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#fff2ff",
    body: "#00252E",
    footer: "#02C7FA",
  },

 mobile:'760px'
};

const App = () => (
  <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
      <Header />
      <Container>
        {content.map((item, index)=> (
         <Card key={index} item={item}/>
        ))}
      </Container>
    <Footer />
    </>
  </ThemeProvider>
);

export default App;
