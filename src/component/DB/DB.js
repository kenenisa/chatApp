import Dexie from "dexie/dist/dexie/dexie";

class DB {
  constructor() {
    this.db = new Dexie("Chat");
    this.db.version(1).stores({
      user: "id,profile,group,single,channal,notification"
    });
    this.db.open();
    this.isFirstTime();
  }
  isFirstTime(){
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        if(res[0] === null || res[0] === undefined || res[0] === ''){
          this.init("kenenisa","kenenisa@alex.sth","base64");
        }
      });
  }
  init(name, email, profilePicture) {
    this.db.user.put({
      id: 1,
      profile: {
        name: name,
        picture: [profilePicture],
        email: email,
        friends: [],
        groups: [],
        channal: []
      },
      group: [],
      single: [],
      channal: [],
      notification: []
    });
  }
  all() {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        console.log("all");
        console.log(res[0]);
      });
  }
  base(){
    return this.db;
  }
}
export default DB;
//init("hani", "hani@gmail.com", "base64 is on the way");
// newFriend({
//   id: 2,
//   name: "lfsay dflas",
//   email: "alex@sth.com",
//   picture: "base64",
//   lastSeen: "2018 29 19 09:23"
// });
// newGroup({
//   id: 3,
//   name: "lfsay dflas",
//   email: "alex@sth.com",
//   picture: "base64",
//   lastSeen: "2018 29 19 09:23"
// });
// newChannal({
//   id: 3,
//   name: "lfsay dflas",
//   email: "alex@sth.com",
//   picture: "base64",
//   lastSeen: "2018 29 19 09:23"
// });
// newSingleConvo(2);
// newGroupConvo(2);
// newChannalConvo(2);
// newSingleMsg({
//   id: 2,
//   userId: 1,
//   msg: "hi mare",
//   type: "text",
//   time: "23:24"
// });
// newGroupMsg({
//   id: 2,
//   userId: 1,
//   msg: "hi groupp",
//   type: "text",
//   time: "23:24"
// });
// newChannalMsg({
//   id: 2,
//   userId: 1,
//   msg: "hi channal",
//   type: "text",
//   time: "23:24"
// });
// newNotification({
//   id: 12,
//   img: "base64",
//   text: "this guy just hit you up",
//   type: "u",
//   time: "02 0 10 23"
// });
//newProfile("new Base64")
//all();
