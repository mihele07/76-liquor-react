import React from "react";
import "../cardsForHomepage.css";
import { motion } from "framer-motion";
import { red } from "@material-ui/core/colors";

const CardsForHomepage = () => {
  return (
    <div>
      <div class="container">
        <div class="row cardBody">
          <div class="col-md-6 col-sm-12">
            <div class="card">
              <motion.a
                href="/Products#spirit"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(255,255,255",
                  boxShadow: "0 0 8px rgb(255,255,255",
                }}
              >
                <img
                  src="../assets/images/card1-bourbons.jpg"
                  class="card-img-top"
                  alt="..."
                />

                <div class="card-body">
                  <p class="card-text">RARE BOURBONS & WINES</p>
                </div>
              </motion.a>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="card card1">
              <motion.a href="/Products#wine"
               whileHover = {{
                scale: 1.05,
            textShadow: '0 0 8px rgb(255,255,255',
            boxShadow: '0 0 8px rgb(255,255,255'
             }}>
                <img
                  src="../assets/images/card2-wine.jpg"
                  class="card-img-top"
                  alt="..."
                />

                <div class="card-body">
                  <p class="card-text">FINE WINES</p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        <div class="row cardBody">
          <div class="col-md-6 col-sm-12">
            <div class="card">
              <motion.a
                href="/Products#spirit"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(255,255,255",
                  boxShadow: "0 0 8px rgb(255,255,255",
                }}
              >
                <img
                  src="../assets/images/card3-brands.jpg"
                  class="card-img-top"
                  alt="..."
                />

                <div class="card-body">
                  <p class="card-text">TOP BRANDS</p>
                </div>
              </motion.a>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="card">
              <motion.a href="/Products#champ"
               whileHover = {{
                scale: 1.05,
            textShadow: '0 0 8px rgb(255,255,255',
            boxShadow: '0 0 8px rgb(255,255,255'
             }}>
                <img
                  src="../assets/images/card4-champ.jpg"
                  class="card-img-top"
                  alt="..."
                />

                <div class="card-body">
                  <p class="card-text">BEST SPARKLING WINES</p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardsForHomepage };
