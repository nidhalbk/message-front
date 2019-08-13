import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Modal from './Components/modal';
import Connexion from './Components/connexion';
import Messaging from './Components/Messaging/Messaging';
import CURRENT_USER from './Components/garphql/queries/getCurrentUser';
import UserContext from './context';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    // localStorage.clear();
  }


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  userConnected= () => {
    // this.props.client.cache.clear();
    const { currentUser } = this.props.data;
    if (currentUser && currentUser.user) { return false; } return true;
  }

  logout = () => {
    this.props.client.resetStore();
    window.sessionStorage.clear();
  }

  render() {
    return (
      <UserContext.Provider value={this.userConnected && this.props.data.currentUser.user}>
        <div>
          <button type="button" onClick={this.logout}>
        open
          </button>
          <div className="App">
            <div className="container-fluid h-100">
              <div className="row justify-content-center h-100">
                <h1>
                  {this.props.data.currentUser && this.props.data.currentUser.user
                && this.props.data.currentUser.user.userName}
                </h1>
                {this.props.data.currentUser.user ? <Messaging /> : null}
              </div>
            </div>
          </div>

          <Modal show={this.state.show || this.userConnected()} handleClose={this.hideModal}>
            <Connexion client={this.props.client} hideModal={this.hideModal} />
            <button type="button" onClick={this.hideModal}> close </button>
          </Modal>
          <button type="button" onClick={this.showModal}>
          open
          </button>
        </div>
      </UserContext.Provider>
    );
  }
}
export default graphql(CURRENT_USER)(App);
