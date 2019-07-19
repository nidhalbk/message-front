import React from "react";
import convesation from './data'
import Me from './me'
import ConvesationWith from './convesationWith'

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

      return(
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <div className="card-header msg_head">
          {/*header convesation*/}
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <span className="online_icon" />
            </div>
            <div className="user_info">
              <span>Chat with Maryam Naz</span>
              <p>1767 Messages</p>
            </div>
            <div className="video_cam">
              <span>
                <i className="fas fa-video" />
              </span>
              <span>
                <i className="fas fa-phone" />
              </span>
            </div>
          </div>
          {/*menu convesation*/}
          <span id="action_menu_btn">
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="action_menu">
            <ul>
              <li>
                <i className="fas fa-user-circle" /> View profile
              </li>
              <li>
                <i className="fas fa-users" /> Add to close friends
              </li>
              <li>
                <i className="fas fa-plus" /> Add to group
              </li>
              <li>
                <i className="fas fa-ban" /> Block
              </li>
            </ul>
          </div>
        </div>
        {/*body convesation*/}
        <div className="card-body msg_card_body">
        {convesation.map((element)=>(
            element.author==='Me'?<Me pic={element.pic} msg={element.msg} at={element.date}/>:<ConvesationWith pic={element.pic} msg={element.msg} at={element.date}/>
        ))}
        </div>
        {/*footer convesation*/}
        <div className="card-footer">
          <div className="input-group">
            <div className="input-group-append">
              <span className="input-group-text attach_btn">
                <i className="fas fa-paperclip" />
              </span>
            </div>
            <textarea
              name=""
              className="form-control type_msg"
              placeholder="Type your message..."
            />
            <div className="input-group-append">
              <span className="input-group-text send_btn">
                <i className="fas fa-location-arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
