import React, { Component } from "react";
//style
import "./App.css";
//icon
import "./component/icons/font-awesome.min.css";
//page components
import Header from "./component/Home/Header/Header";
import SideBar from "./component/Home/SideBar/SideBar";
import SlideArea from "./component/Home/SlideArea/SlideArea";
import ActionArea from "./component/Home/ActionArea/ActionArea";

//pages
import Auth from "./component/Auth/Auth";

//tools
import Deselect from "./component/Arsenal/Deselect";
// import ClickEffect from "./component/Arsenal/ClickEffect/ClickEffect";

//Database
import Insert from "./component/DB/Insert";
import Select from "./component/DB/Select";

class App extends Component {
  constructor() {
    super();
    this.state = {
      SlideArea: false,
      //route
      route: "home",
      page: "chat",
      //database
      // db: {},
      //frontal-view
      chatType: "group",
      whoId: 2,
      //history
      history: ["chat"]
    };
    //window.setInterval(this.setReload, 100);
  }
  componentWillMount() {
    this.insert = new Insert();
    this.insert.factory();
    this.select = new Select(this);
    this.select.all();
  }
  setDb(value) {
    this.setState({ db: value });
  }
  setView(value) {
    this.setState({ view: value });
  }
  setHistory = (e, a = false) => {
    if (a) {
      this.history = this.state.history;
      this.history.pop();
      this.setState({ history: this.history });
    } else {
      this.history = this.state.history;
      this.history.push(e);
      this.setState({ history: this.history });
    }
  };
  notif = () => {
    this.setState({ page: "Notifications" });
    this.setHistory("Notifications");
  };
  hamClick = () => {
    this.setState({ SlideArea: !this.state.SlideArea });
  };
  deselect = () => {
    this.setState({ SlideArea: false });
  };
  back = () => {
    this.position = this.state.history.length - 1;
    if (this.position < 1) {
      //
    } else {
      this.setState({ page: this.state.history[this.position - 1] });
      this.setHistory("", true);
    }
  };
  options = e => {
    this.setState({ page: e.target.id });
    this.setHistory(e.target.id);
    this.setState({ SlideArea: false });
  };
  setWhoId(x) {
    this.setState({ whoId: Number(x) });
    this.setState({ page: "chat" });
  }
  setChatType(x) {
    this.setState({ chatType: x });
    this.setState({ page:"chat" });
  }
  render() {
    if (this.state.db !== undefined) {
      if (this.state.route === "home") {
        this.route = (
          <div>
            <Header
              ham={this.hamClick}
              notif={this.notif}
              back={this.back}
              page={this.state.page}
              type={this.state.chatType}
              whoId={this.state.whoId}
              db={this.state.db}
            />
            <Deselect deselect={this.deselect}>
              <ActionArea
                db={this.state.db}
                page={this.state.page}
                type={this.state.chatType}
                whoId={this.state.whoId}
              />
            </Deselect>
            <SideBar parent={this} />
            <SlideArea switch={this.state.SlideArea} option={this.options} />
          </div>
        );
      } else if (this.state.route === "auth") {
        this.route = (
          <div>
            <Auth />
          </div>
        );
      } else {
        this.route = (
          <div className="wrong-route">
            <p>Wrong Route</p>
          </div>
        );
      }

      return <div>{this.route}</div>;
    } else {
      return null;
    }
  }
}

export default App;
