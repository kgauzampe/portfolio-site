import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  Divider,
} from "@material-ui/core";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: ["Support"],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <center>
                <Typography color="black" variant="body2" color="textSecondary">
                  {"Copyright © "}
                  <Link color="inherit" href="">
                    Developed by Mpumelelo Mpe
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                  Version 0.0.1
                </Typography>
              </center>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
