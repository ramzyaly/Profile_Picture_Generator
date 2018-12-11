import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      x:'', 
      y:''
    }
  }
  convert(){
    var y = this.refs.img.value;
    var calculate = Math.floor(Math.random() * 10) + 1;
    var link = `https://robohash.org/${y}?set=set${calculate}`;

    this.setState({x:link})
  }

  render() {
    
    return (
      <div className="container" style={{background: 'lightblue'}}>
      <center>
        <div className="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{padding: '30px'}}>
          <input className="form-control" ref='img' type="text" placeholder="Ketik nama Anda..."/>
          <button onClick={()=>{this.convert()}} className="btn btn-success btn-md m-3">Buat Profile Picture!</button>
            <div>
            <div><img className="rounded-circle img-fluid" style={{background: 'white'}} src={this.state.x} y={this.img} alt=""/></div>
            </div>
        </div>
      </center>
      </div>
	)
  }
}

export default App;
