import React ,{Component} from 'react';
import styles from './cards.css';
import { deletecards} from '../action/action.js';
import { connect } from "react-redux";



 class Card extends Component{


render(){

return(
<div >
<div className={`card template ${ this.props.classtype }`}>

  <button type="button" onClick ={() => this.props.deletecards(this.props.count)} id="closebutton"  className="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

  <span className="rank">{this.props.data}</span>  
</div>

</div>)
}
}

function mapStateToProps(state){
return  {
carddata : state.cards,
}

};

export default connect(mapStateToProps,{deletecards})(Card);
