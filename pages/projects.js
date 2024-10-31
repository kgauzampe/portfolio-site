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
            <Typography component="h4" variant="h4">
                Projects are not mobile based !
            </Typography>
            <li>
              <Link href="https://snake-game-gilt.vercel.app/">
                <a>Classic Snake game</a>
              </Link>
            </li>
            <li>
              <Link href="https://https://econoteque.com/">
                <a>econoTeque</a>
              </Link>
            </li>
            <li>
              <Link href="https://astrachem.vercel.app/">
                <a>Astrachem</a>
              </Link>
            </li>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
