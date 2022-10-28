import DB from "./DB";
/**
 * channal view###
 * single view####
 * group view#####
 * side bar {
 * single bar##
 * group bar###
 * channal bar###
 * }
 * notifications view###
 */
// id: 1,
//       profile: {
//         name: name,
//         picture: [profilePicture],
//         email: email,
//         friends: [],
//         groups: [],
//         channal: []
//       },
//       group: [],
//       single: [],
//       channal: [],
//       notification: []
class Select {
  constructor(parent) {
    this.base = new DB();
    this.db = this.base.base();
    this.parent = parent;
  }
  all=()=>{
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        this.setDb(res);
      });
  }
  looper(array, id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
    return "";
  }
  chatComposer(array, id,to) {
    let value = this.looper(array, id);
    let content = value.content;
    let pack = {};
    let result = [];
    let friendImg = to.picture;
  
        for (var i = 0; i < content.length; i++) {
          let msg = content[i];
          if (msg.owner) {
            if (this.user !== undefined) {
              pack = {
                id: msg.id,
                userId: msg.userId,
                text: msg.text,
                time: msg.time,
                owner: msg.owner,
                seen: msg.seen,
                img: this.user.picture
              };
            }
          } else {
            pack = {
              id: msg.id,
              userId: msg.userId,
              text: msg.text,
              time: msg.time,
              owner: msg.owner,
              seen: msg.seen,
              img: friendImg
            };
          }
        result.push(pack);
        }
        return { id: id, content: result };
      
  }
  setDb(x){
    this.parent.setDb(x);    
  }
  
  
}

export default Select;







// view(x) {
//   this.parent.setView(x);
// }
// bar(x) {
//   this.parent.setBar(x);
// }
// channal = id => {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       this.view({
//         header: this.looper(res.profile.channal, id),
//         body: this.looper(res.channal, id)
//       });
//     });
// };
// single = id => {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       let to = this.looper(res.profile.friends, id);
//       this.view({
//         header: to,
//         body: this.chatComposer(res.single, id, to)
//       });
//     });
// };
// group = id => {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       this.view({
//         header: this.looper(res.profile.groups, id),
//         body: this.looper(res.group, id)
//       });
//     });
// };
// notification = () => {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       this.view({
//         header: "",
//         body: res.Notifications
//       });
//     });
// };
// singleBar() {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       this.bar(res.profile.friends);
//     });
// }
// groupBar() {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       this.bar(res.profile.groups);
//     });
// }
// channalBar() {
//   this.db.user
//     .where("id")
//     .equals(1)
//     .sortBy("position")
//     .then(res => {
//       res = res[0];
//       this.bar(res.profile.channal);
//     });
// }