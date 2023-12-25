import React, { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import ChatBotButton from "../components/ChatBox/ChatBotButton";
import ProductDetail from "./../components/ProductDetail/index";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const { isOpen } = useSelector((store) => store.chatBox);
  const { resultProducts } = useSelector((store) => store.global);
  const navigate = useNavigate()

  useEffect(()=>{
    if(!(resultProducts.length > 0)) navigate("/")
  },[resultProducts])
  return (
    <Container>
      <Header />
      <Container sx={{ marginTop: 8 }}>
        <Box paddingTop={2} position={"relative"}>
          <Grid container spacing={3}>
            <Grid item xs>
              {resultProducts.length > 0 ? <Box>
                <NavBar />
              </Box> : <Box></Box>}
              <Box paddingY={2}>{children}</Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {isOpen ? (
        <Box
          position={"fixed"}
          top={80}
          minWidth={200}
          maxWidth={400}
          right={20}
          bottom={20}
          zIndex={1}
        >
          <ChatBox />
        </Box>
      ) : (
        <ChatBotButton />
      )}

      <ProductDetail />
    </Container>
  );
};

export default MainLayout;
