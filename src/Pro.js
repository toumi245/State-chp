import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pro extends Component {
    state={
      Person:{
        fullName:'Chedli Toumi',
        bio : 'hello iam a web developer  ',
        imgsrc:'https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/196978160_908612049698750_3094604010128074965_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RIv09nhpREIAX_Cf4Gb&tn=kUrhpfakrsC6eZr_&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC4yiDd-iOJjeE0uWCOUpEd36MxFzb0yody_oSAMBWGeA&oe=6411D2F4',
        profession: 'Software Engineer',
      },
      shows:false,
    };
    toggleshow=()=>{
      this.setState({shows: !this.state.shows});
    };
      render() {
      const {fullName,bio,imgsrc,profession}=this.state.Person;
      
      return(
    
          <div>
     
          <Button variant="success" onClick={this.toggleshow}>Show!</Button>
      {this.state.shows && (
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'blue'}}>
        
      <img className='myphoto' src={imgsrc} alt={fullName} />
      <div>
      <h1 style={{color:'#02117d'}}>{fullName}</h1>
      <h2 style={{color:'#0522fe'}}>{profession}</h2>
      <p style={{color:'#0087fe'}}>{bio}</p>
   
      </div>
      </div>
      )}
        </div>
      );
      
    }
    
  }
  export default Pro;
  
  