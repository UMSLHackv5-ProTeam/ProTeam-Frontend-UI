import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import DropdownExampleSearchSelection from "./example";
import Example from "./example";
import GraphsDiv from "./GraphsDiv";
import SearchContainer from './SearchContainer';

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">Search For Professor</Header>
    <List bulleted>
      
    </List>

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    {/* <Example />
    <GraphsDiv></GraphsDiv>
    <GraphsDiv></GraphsDiv> */}
    <SearchContainer></SearchContainer>
    
  </App>,
  document.getElementById("root")
);
