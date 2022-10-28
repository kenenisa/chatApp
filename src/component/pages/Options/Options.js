import React from "react";
//style
import './Options.css'
//components
import Group from "./Create/Group/Group";
import Channal from "./Create/Channal/Channal";
import Profile from "./Profile/Profile";
import Friends from "./Friends/Friends";
import Theme from './Theme/Theme';
import Settings from "./Settings/Settings";
import Logout from "./Logout/Logout";
//
class Options extends React.Component {
    render(props) {
        const { page } = this.props;
    if (page === "Group") {
        this.option = <Group />
    } else if (page === "Channal") {
        this.option = <Channal/>
        }
    else if (page === "Profile") {
        this.option = <Profile />
        }
    else if (page === "Friends") {
        this.option = <Friends />
        }
    else if (page === "Theme") {
        this.option = <Theme />
        }
    else if (page === "Settings") {
        this.option = <Settings />
        }
    else if (page === "Logout") {
        this.option = <Logout />
    }
    return <div className="option-box">{this.option}</div>;
  }
}

export default Options;
