import React from 'react';
import './App.css';
import AppMes from './component/AppMes';
import SignUp from './SignUp';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // khỏi tạo state ẩn hiện ChatMessages
      isShowMes: false,
    }
  }
  handleTogleMes() {
    this.setState({
      isShowMes: !this.state.isShowMes
    });

  }

  render() {
   
    let isShowMes = this.state.isShowMes;
    let elem = <SignUp
      onClickAdd={this.handleTogleMes.bind(this)}/>;

    if (isShowMes === true) {
      elem = <AppMes isShowMes={isShowMes}/>
    }

    return (
      <div className="app__content">
        {elem}
      </div>
    )
  }
}