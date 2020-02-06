import React, { useState } from "react";
import {
  Accordion,
  AccordionPanel,
  Text,
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
} from "grommet";
import { FormClose, Notification } from "grommet-icons";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const theme = {
    global: {
      colors: {
        brand: "#aa33aa"
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px"
      }
    },
    accordion: {
      icons: {
        color: "hotpink"
      },
      border: undefined
    }
  };
  const AppBar = props => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="start"
                    justify="start"
                  >
                    <Accordion alignSelf="stretch" margin="medium">
                      <AccordionPanel label="동물">
                        <Box pad="medium" background="light-2">
                          <Text>길잃은 호랑이</Text>
                        </Box>
                        <Box pad="medium" background="light-2">
                          <Text>문어머리 사자</Text>
                        </Box>
                        <Box pad="medium" background="light-2">
                          <Text>늠름한 삐약이</Text>
                        </Box>
                      </AccordionPanel>
                      <AccordionPanel label="식물">
                        <Box pad="medium" background="light-2">
                          <Text>조르디 버섯친구들</Text>
                        </Box>
                        <Box pad="medium" background="light-2">
                          <Text>뚜벅초 다애</Text>
                        </Box>
                        <Box pad="medium" background="light-2">
                          <Text>우리집 마리모</Text>
                        </Box>
                      </AccordionPanel>
                    </Accordion>
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
