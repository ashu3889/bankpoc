import React ,{Component} from 'react';
import {shufflecards,sortcards} from '../action/action.js';
import { connect } from "react-redux";
import Democard from './democard.js';


class CounterBody extends Component{

render(){



let element =this.props.carddata.map(function(item, i){
  console.log('test' + JSON.stringify(item));
  return (<div className="col-md-2">
	<Democard  data={item.value}  count={item.count} classtype={item.type}  index = {i}/>

	</div>)
 
})

return(<div>
<div  className="col-md-12"> {element}</div>
<button className="btn btn-success shufflecard" onClick ={() => this.props.shufflecards()}>Shuffle cards</button>
<button className="btn btn-primary sortcard" onClick ={() => this.props.sortcards()}>Sort Cards</button>
</div>
)



}
}


function mapStateToProps(state){
return  {
carddata : state.cards,
}

};

export default connect(mapStateToProps,{shufflecards,sortcards})(CounterBody);