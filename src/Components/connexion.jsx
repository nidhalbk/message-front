import React, { useContext } from 'react';
import { graphql, compose } from 'react-apollo';
import GET_ALL_USERS from './garphql/queries/getAllUsers';
import ADD_USER from './garphql/mutations/addUser';
import CONNECT_USER from './garphql/mutations/connectUser';

class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new: false,
    };
  }

  getAllUsers() {
    const { data } = this.props;
    if (data.loading) {
      return <option disabled>loading Users...</option>;
    }

    return data.getAllUser && data.getAllUser.map((user) => (
      <option value={user._id} key={user._id}>
        {user.userName}
(
        {user.name}
)
      </option>
    ));
  }

  async handelSubmit(e) {
    e.preventDefault();
    this.props.client.resetStore();
    window.sessionStorage.clear();
    if (this.state.new) {
      const { data } = await this.props.createUser({
        variables: {
          name: e.target.name.value,
          userName: e.target.userName.value,
        },
      });

      const { createUser } = data;
      this.props.connectUser({
        variables: {
          id: createUser._id,
          ...createUser,
        },
      });
    } else {
      const user = this.props.data.getAllUser.find(
        (u) => u._id === e.target.selectUser.value
      );
      this.props.connectUser({
        variables: {
          __typename: 'currentUser',

          id: user._id,
          ...user,
        },
      });
    }
    this.props.hideModal();
  }


  addInput() {
    if (this.state.new) {
      return (
        <div name="new-user">
          <input
            type="text"
            className="input-name"
            name="name"
            placeholder="your Name"
          />
          <input
            type="text"
            className="input-username"
            name="userName"
            placeholder="your Username"
          />
        </div>
      );
    }
    return '';
  }

  handelChange(e) {
    e.preventDefault();
    if (e.target.value === 'new') {
      e.target.remove();
      return this.setState({ new: true });
    }
    return '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit.bind(this)}>
          <select
            name="selectUser"
            className="select-username"
            onChange={(e) => this.handelChange(e)}
          >
            <option>Select your username</option>
            <option value="new">you don&apost find your username</option>
            {this.getAllUsers()}
          </select>
          {this.addInput()}
          <button type="submit" className="button-submit">
            Choose
          </button>
        </form>
      </div>
    );
  }
}
export default compose(
  graphql(GET_ALL_USERS),
  graphql(ADD_USER, { name: 'createUser' }),
  graphql(CONNECT_USER, { name: 'connectUser' })
)(Connexion);
