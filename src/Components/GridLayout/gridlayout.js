import { Card, Grid } from "@mui/material";
import React from "react";
import Banner2 from "../Banner/Banner2";
import OutlinedCard from "../PgCard/Pgcard";
import Banner from "/src/Components/Banner/Banner2.js";
import BarGraph from "/src/Components/Graphbar/Graphbar.js";
import OmCard from "/src/Components/Cicularcard/Circularcard.js";

export default function GridLayout() {
  return (
    <div>
      <div>
        <h3 style={{ alignContent: "center", marginLeft: "2%" }}>
          Be Single Minded
        </h3>
      </div>

      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        <Grid lg={4} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <OutlinedCard
              pere1="80"
              pereText="65376"
              pere2="92"
              pereText="92%"
              pere3="97"
              pereText="97%"
              cr="success"
            />
          </Card>
        </Grid>
        <Grid lg={4} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <OutlinedCard
              pere1="72"
              pereText="88%"
              pere2="45"
              pereText=""
              pere3="60"
              pereText=""
              cr="error"
              pc="#34b53a"
            />
          </Card>
        </Grid>
        <Grid lg={4} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <OutlinedCard
              pere1="47"
              pereText="88%"
              pere2="63"
              pereText="92%"
              pere3="90"
              pereText="97%"
              pc="#34b53a"
            />
          </Card>
        </Grid>
      </Grid>

      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        <Grid lg={8} md={8} sm={12} xs={12}>
          <Banner2 />
          {/* Bottom Cards  */}
          <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
            <Grid lg={3} md={12} sm={12} xs={12}>
              {" "}
              <OmCard
                title="Twitter"
                per="67"
                perText="67%"
                bg="#e2fbd7"
                pc="#34b53a"
              />
            </Grid>
            <Grid lg={3} md={12} sm={12} xs={12}>
              <OmCard
                title="Instagram"
                per="46"
                perText="46%"
                bg="#dad7fe"
                pc="#4339f2"
              />
            </Grid>
            <Grid lg={3} md={12} sm={12} xs={12}>
              <OmCard
                title="Facebook"
                per="15"
                perText="15%"
                bg="#ffe5d3"
                pc="#ff3a29"
              />
            </Grid>
            <Grid lg={3} md={12} sm={12} xs={12}>
              <OmCard
                title="Behance"
                per="67"
                perText="67%"
                bg="#ccf8fe"
                pc="#02a0fc"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Graph */}
        <Grid lg={4} md={4} sm={12} xs={12}>
          <Card style={{ margin: "4%", height: "100%" }}>
            <BarGraph />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
