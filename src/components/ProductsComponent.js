import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, CardGroup, UncontrolledPopover, PopoverBody } from 'reactstrap';
import '../products.css';

function RenderChampange ({champagne}){
  
  return ( 
    <React.Fragment>
      <CardGroup >
        <Card className = "cardBottles">
          <CardImg className="cardChamp" top src={champagne.image}  alt="Card image" />
          <CardBody className="cardbodyChamp">
            <CardTitle tag="h6"> {champagne.name} </CardTitle>
            <CardText> {champagne.price} </CardText>
            <Button id="PopoverFocus" type="button"> Description </Button>
              <UncontrolledPopover trigger="focus" placement="left" text = "Left" target="PopoverFocus">
                <PopoverBody> {champagne.descripton} </PopoverBody>
              </UncontrolledPopover>
          </CardBody>
        </Card>
    </CardGroup>

    </React.Fragment>
    

    );
}

function RenderSpirit ({henny}) {
  return ( 
    <React.Fragment>
      <CardGroup>
        <Card>
          <CardImg className="cardChamp" top maxwidth="200px" src={henny.image}  alt="Card image" />
          <CardBody className="cardbodyChamp">
            <CardTitle tag="h6"> {henny.name} </CardTitle>
            <CardText> {henny.price} </CardText>
            <Button id="PopoverFocus" type="button"> Description </Button>
              <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                <PopoverBody> {henny.descripton} </PopoverBody>
              </UncontrolledPopover>
          </CardBody>
        </Card>
    </CardGroup>

    </React.Fragment>
    );
}

function RenderWine ({menlo}) {
  return ( 
    <React.Fragment>
      <CardGroup className="master">
        <Card>
          <CardImg className="cardChamp" top maxwidth="200px" src={menlo.image}  alt="Card image" />
          <CardBody className="cardbodyChamp">
            <CardTitle tag="h6" className="vicky"> {menlo.name} </CardTitle>
            <CardText> {menlo.price} </CardText>
            <Button id="PopoverFocus" type="button"> Description </Button>
              <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                <PopoverBody> {menlo.descripton} </PopoverBody>
              </UncontrolledPopover>
          </CardBody>
        </Card>
    </CardGroup>

    </React.Fragment>
    );
}














class Products extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      showChampagnes: false,
      showSpirit: false,
      showWine: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSpiritClick = this.handleSpiritClick.bind(this);
    this.handleWineClick = this.handleWineClick.bind(this);
    //this.toggleCard = this.toggleCard.bind(this);

    }

handleClick(){ 
  this.setState ({
    showChampagnes: !this.state.showChampagnes});
}

handleSpiritClick(){ 
  this.setState ({
    showSpirit: !this.state.showSpirit});
 }

 handleWineClick(){ 
  this.setState ({
    showWine: !this.state.showWine});
 }

render () {
// MAPPING THROUGH CHAMPAGNE OBJECT ARRAY
  let champaigns = null;
  const champ = this.props.champagnes.map (n => { 
    return ( 
      <div key={n.id} className="col md-5 m-1">
       <RenderChampange champagne={n} />
      </div>
    );
  });
//console.log(this.state.showChampagnes);
  if (this.state.showChampagnes) {
      champaigns = <div className="row row-cols-5" max-width="50%" max-heigth="50%"> 
                    {champ}
                    </div>
    }
  // MAPPING THROUGH SPIRITS OBJECT ARRAY
let spirits = null;
  const fred = this.props.spirits.map (m => { 
    return ( 
      <div key={m.id} className="col md-5 m-1">
       <RenderSpirit henny={m} />
      </div>
    );
  });
  if (this.state.showSpirit){
      spirits = <div className="row row-cols-5"> {fred} </div>
  }
// MAPPING THROUGH WINES OBJECT ARRAY
  let wines = null;
  const rose = this.props.wines.map (m => { 
    return ( 
      <div key={m.id} className="col md-5 m-1">
       <RenderWine menlo={m} />
      </div>
    );
  });
  if (this.state.showWine){
      wines = <div className="row row-cols-5"> 
      {rose} 
      
      </div>
  }

  return ( 
    <div className="products-backround-image">
      <div className="container">
        <h3></h3>
        <div id = "champ" className="row justify-content-center">
          <div className="col-md-3 offset-md-2">
              <Card className="cardSize" isOpen={this.state.showChampagnes} toggle={this.handleClick} >
                <CardImg src="../assets/images/prod-1.jpg" alt="Champagne" toggle={this.handleClick}/>
                  <Button onClick={this.handleClick}> Champagne </Button>
              </Card>
          </div>
          <div className="col">
            <Card className = "main-desription">
              <h5> At 76 Liquors, our champagne selection is impressive. 
                We stock a wide variety of specialty champagne, imported and domestic. 
                Whether you’re looking for French, Spanish, Italian, California,
                our knowledgeable staff is at your service. </h5>
            </Card>
            
          </div>
          <div>
          {champaigns}
          </div>
          
        </div> {' '}
       
        
      <div id = "spirit" className="row justify-content-center">
          <div className="col-md-3 offset-md-2">
              <Card className="cardSize" isOpen={this.state.showChampagnes} toggle={this.handleSpiritClick} >
                <CardImg src="../assets/images/prod-2.jpg" alt="Spirits" toggle={this.handleSpiritClick} />
                  <Button color="primary" onClick={this.handleSpiritClick}> Spirit </Button>
              </Card>
          </div>
          <div className="col">
            <Card className = "main-desription">
              <h5> At 76 Liquors, our spirit selection is unique. 
                We stock a wide variety of specialty spirits.
                Our knowledgeable staff is at your service. </h5>
            </Card>
          </div>
          <div>
          {spirits}
          </div>
        </div> {'  '}

        <div id = "wine" className="row justify-content-center">
          <div className="col-md-3 offset-md-2">
              <Card  className="cardSize" isOpen={this.state.showChampagnes} toggle={this.handleWineClick} >
                <CardImg  src="../assets/images/prod-3.jpg" alt="Wines"  toggle={this.handleWineClick}/>
                  <Button color="primary" onClick={this.handleWineClick} > Wines </Button>
              </Card>
          </div>
          <div className="col">
            <Card className = "main-desription">
              <h5> At 76 Liquors, our Wines selection is impressive. 
                We stock a wide variety of specialty wines, imported and domestic. 
                Whether you’re looking for French, Spanish, Italian, California,
                our knowledgeable staff is at your service. </h5>
            </Card>
            </div>
            <div>
            {wines}
          </div>
        </div>
      </div>
    </div>
  );
  
}
}


export default Products;