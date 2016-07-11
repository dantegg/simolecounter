import React,{PropTypes} from 'react';

class Counter extends React.Component{
  render(){
    const {increment,decrement,counter} = this.props;
    return(
    <div>
      <p>Clicked: {counter} times</p>
      {''}
      <button onClick={increment}>add</button>
      <button onClick={decrement}>decrease</button>
    </div>
    )
  }
}


Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};


export default Counter
