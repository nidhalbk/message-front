import React, { useState } from 'react';
import './Messaging.css';
import Contact from './Contact/Contact';
import Convesation from './conversation';
import Input from './conversation/inputText';

export default function Messaging() {
  const [selectedUser, setSelectedUser] = useState(0);

  return (
    <>
      <Contact setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
      <div className="col-md-8 col-xl-6 chat">
        <div className="card">
          <div className="card-header msg_head">
            {/* header convesation */}
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <span className="online_icon" />
              </div>
              <div className="user_info">
                <span>
Chat with
                  {' '}
                  {selectedUser.userName}
                </span>
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
            {/* menu convesation */}
            <span id="action_menu_btn">
              <i className="fas fa-ellipsis-v" />
            </span>
            <div className="action_menu">
              <ul>
                <li>
                  <i className="fas fa-user-circle" />
                    View profile
                </li>
                <li>
                  <i className="fas fa-users" />
                    Add to close friends
                </li>
                <li>
                  <i className="fas fa-plus" />
                    Add to group
                </li>
                <li>
                  <i className="fas fa-ban" />
                    Block
                </li>
              </ul>
            </div>
          </div>

          {selectedUser && <Convesation selectedUser={selectedUser} />}
          <div className="card-footer" >
            <Input selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </>
  );
}
