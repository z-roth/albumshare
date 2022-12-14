import { Box } from "@mui/system";
import Head from "next/head";
import Navbar from "../components/navbar";
import AlbumsGrid from "../components/albums-grid";

const Home = () => {
  return (
    <Box>
      <Head></Head>
      <div>
        <Navbar />
        <AlbumsGrid />
      </div>
    </Box>
  );
};

export default Home;
