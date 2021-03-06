import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import Link from "next/link";
import { Container, Typography } from "@material-ui/core";

export default function Projects() {
  return (
    <>
      <div>
        <Navbar />
        <div className="projects">
          <Container>
            <Typography color="black" component="h2" variant="h2">
              Projects
            </Typography>
            <li>
              <Link href="https://snake-game-gilt.vercel.app/">
                <a>Classic Snake game</a>
              </Link>
            </li>
            <li>
              <Link href="https://sho-weather.vercel.app//">
                <a>Weather App</a>
              </Link>
            </li>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
