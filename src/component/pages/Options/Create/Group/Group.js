import React from "react";
import Scroll from "../../../../Arsenal/Scroll";

class Group extends React.Component {
  state = {
    users: [
      { id: 1, name: "kenenisa", img: "favicon.ico", color: "red" },
      { id: 2, name: "alex", img: "favicon.ico", color: "blue" },
      { id: 3, name: "tufa", img: "favicon.ico", color: "green" },
      { id: 4, name: "migena", img: "favicon.ico", color: "yellow" },
      { id: 5, name: "kenenisa", img: "favicon.ico", color: "red" },
      { id: 6, name: "alex", img: "favicon.ico", color: "blue" },
      { id: 7, name: "tufa", img: "favicon.ico", color: "green" },
      { id: 8, name: "migena", img: "favicon.ico", color: "yellow" },
      { id: 9, name: "kenenisa", img: "favicon.ico", color: "red" },
      { id: 10, name: "alex", img: "favicon.ico", color: "blue" },
      { id: 11, name: "tufa", img: "favicon.ico", color: "green" },
      { id: 12, name: "migena", img: "favicon.ico", color: "yellow" }
    ]
  };
  render() {
    return (
      <div className="create">
        <div className="con">
          <div className="left">
            <div className="help">
              <div className="con">
                What's A Group?
              </div>
            </div>
            <div className="form">
              <div className="con">
                <div className="head">Create A Group</div>
                <div className="name-con">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="group_name" id="name" palceholder="Required"/>
                </div>
                <div className="des-con">
                  <label htmlFor="des">Description</label>
                  <input type="text" name="group_des" id="des" palceholder="Optional"/>
                </div>
                <button className="button">Create</button>
              </div>
            </div>
          </div>
          <div className="right">
            <Scroll>
              <div className="head">Add Members</div>
              {/**
               */}
              {this.state.users.map((user, i) => {
                return (
                  <label htmlFor={user.id} key={i}>
                    <div className="user">
                      <div className="img-con">
                        <div className="img" style={{ background: user.color }}>
                          <img src={user.img} alt="" />
                        </div>
                      </div>

                      <div className="text-con">
                        <div className="name">{user.name}</div>
                      </div>

                      <div className="checkbox">
                        <input type="checkbox" name="user" id={user.id} />
                        <div className="fake-checkbox" />
                      </div>
                    </div>
                  </label>
                );
              })}
            </Scroll>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;
