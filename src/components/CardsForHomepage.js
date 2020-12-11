import React from "react";
import "../cardsForHomepage.css";

const CardsForHomepage = () => {
  return (
    <div>
      <div class="container">
        <div class="row cardBody">
          <div class="col-md-6 col-sm-12">


            <div class="card">
            <a href="#">
              <img
                src="../assets/images/card1-bourbons.jpg"
                class="card-img-top"
                alt="..."
              />
              

                <div class="card-body">
                  <p class="card-text">RARE BOURBONS & WINES</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">


            <div class="card card1">
            <a href="#">
              <img
                src="../assets/images/card2-wine.jpg"
                class="card-img-top"
                alt="..."
              />
              

                <div class="card-body">
                  <p class="card-text">FINE WINES</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="row cardBody">
          <div class="col-md-6 col-sm-12">
            <div class="card">
            <a href="#">
              <img
                src="../assets/images/card3-brands.jpg"
                class="card-img-top"
                alt="..."
              />
              
                <div class="card-body">
                  <p class="card-text">TOP BRANDS</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="card">
            <a href="#">
              <img
                src="../assets/images/card4-champ.jpg"
                class="card-img-top"
                alt="..."
              />
              
                <div class="card-body">
                  <p class="card-text">BEST SPARKLING WINES</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardsForHomepage };
