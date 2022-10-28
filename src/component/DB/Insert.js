import DB from "./DB";

class Insert {
  constructor() {
    this.base = new DB();
    this.db = this.base.base();
  }
  factory() {
    this.putter({
      id: 1,
      profile: {
        id: 2,
        name: "keneneisa",
        picture: "favicon.ico",
        email: "kenenisaalemayhu@gmail.com",
        friends: [
          {
            id: 1,
            name: "alex",
            email: "alex@sth.com",
            picture: "favicon.ico",
            online: false,
            lastSeen: "09:23"
          },
          {
            id: 2,
            name: "keni",
            email: "keni@sth.com",
            picture: "favicon.ico",
            online: false,
            lastSeen: "08:02"
          },
          {
            id: 3,
            name: "hawi",
            email: "hawi@sth.com",
            picture: "",
            online: false,
            lastSeen: "22:13"
          },
          {
            id: 4,
            name: "kenenisa alemayhu",
            email: "kenenisa@sth.com",
            picture: "",
            online: true,
            lastSeen: "08:02"
          },
          {
            id: 5,
            name: "Babi Alemayhud tufa",
            email: "Babi@sth.com",
            picture: "favicon.ico",
            online: false,
            lastSeen: "11:54"
          }
        ],
        groups: [
          {
            id: 1,
            name: "the group",
            picture: "favicon.ico",
            online: 0,
            members: 5
          },
          {
            id: 2,
            name: "the group two",
            picture: "",
            online: 5,
            members: 7
          }
        ],
        channal: [
          {
            id: 1,
            name:
              "the channal is good but why did it broke last time i saw it in the balkony",
            picture: "favicon.ico"
          },
          {
            id: 2,
            name: "balkony",
            picture: "favicon.ico"
          }
        ]
      },
      group: [
        {
          id: 1,
          content: [
            {
              id: 1,
              text: "the group text message",
              ownerId: 1,
              time: "22 0 10 23",
              sender: false,
              seen: false
            },
            {
              id: 2,
              text: "the group text fadsfadfessage",
              ownerId: 1,
              time: "02 0 10 23",
              sender: {
                id: 1,
                name: "dula",
                img: "favicon.ico"
              },
              seen: true
            },
            {
              id: 3,
              text: "the grodsfaup textfd message",
              ownerId: 1,
              time: "22 0 0 23",
              sender: {
                id: 1,
                name: "hani",
                img: "favicon.ico"
              },
              seen: false
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              text: "the group 2 text message",
              ownerId: 2,
              time: "22 0 10 23",
              sender: {
                id: 1,
                name: "dula",
                img: "favicon.ico"
              },
              seen: true
            },
            {
              id: 2,
              text: "the group 2 text fadsfadfessage",
              ownerId: 2,
              time: "02 0 10 23",
              sender: {
                id: 2,
                name: "hawi",
                img: ""
              },
              seen: true
            },
            {
              id: 3,
              text: "the grodsfaup 2 textfd message",
              ownerId: 2,
              time: "22 0 0 23",
              sender: false,
              seen: false
            }
          ]
        }
      ],
      single: [
        {
          id: 1,
          content: [
            {
              id: 1,
              userId: 1,
              text: "hi",
              time: "23:21",
              owner: true,
              seen: false
            },
            {
              id: 2,
              userId: 1,
              text: "hello",
              time: "23:21",
              owner: true,
              seen: false
            },
            {
              id: 3,
              userId: 1,
              text: "i'm alex, do u know me?",
              time: "23:21",
              owner: false,
              seen: false
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              userId: 2,
              text: "hi",
              time: "23:21",
              owner: true,
              seen: false
            },
            {
              id: 2,
              userId: 2,
              text: "is anybody there",
              time: "23:21",
              owner: true,
              seen: false
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              id: 1,
              userId: 3,
              text: "hello",
              time: "23:21",
              owner: true,
              seen: false
            },
            {
              id: 2,
              userId: 3,
              text: "is anybody there",
              time: "23:21",
              owner: false,
              seen: false
            }
          ]
        },
        {
          id: 4,
          content: [
            {
              id: 1,
              userId: 4,
              text: "hi",
              time: "23:21",
              owner: false,
              seen: false
            },
            {
              id: 2,
              userId: 4,
              text: "is anybody there",
              time: "23:21",
              owner: false,
              seen: false
            }
          ]
        },
        {
          id: 5,
          content: [
            {
              id: 1,
              userId: 5,
              text: "hello my darling",
              time: "23:21",
              owner: true,
              seen: false
            },
            {
              id: 2,
              userId: 5,
              text: "is the bank open, there",
              time: "23:21",
              owner: false,
              seen: false
            }
          ]
        },
        {
          id: 6,
          content: [
            {
              id: 1,
              userId: 6,
              text: "hey fucking guy",
              time: "23:21",
              owner: true,
              seen: false
            },
            {
              id: 2,
              userId: 6,
              text: "What did you say?",
              time: "23:21",
              owner: false,
              seen: false
            }
          ]
        }
      ],
      channal: [
        {
          id: 1,
          content: [
            {
              id: 1,
              userId: 1,
              title: "message",
              body: "the group 2 text message",
              img: "favicon.ico",
              author: "alex",
              seenAmount: 2000,
              time: "24:29"
            },
            {
              id: 2,
              userId: 1,
              title: "the group",
              body: "the group 2 text message",
              img: "",
              author: "kenenisa",
              seenAmount: 2000,
              time: "24:29"
            },
            {
              id: 2,
              userId: 1,
              title: "",
              body: "the group 2 text message",
              img: "",
              author: "hawi",
              seenAmount: 2000,
              time: "24:29"
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              userId: 2,
              title: "the group 2 text message",
              body:
                "the group 2 text message was sent out today and they said we will fuck you up",
              img: "favicon.ico",
              author: "alan",
              seenAmount: 2000,
              time: "24:29"
            },
            {
              id: 1,
              userId: 2,
              title: "the message of the channal with the id two will fly",
              body:
                "the group 2 text message was sent out today and they said we will fuck you up",
              img: "favicon.ico",
              author: "alan",
              seenAmount: 2000,
              time: "24:29"
            }
          ]
        }
      ],
      Notifications: [
        {
          id: 0,
          img: "favicon.ico",
          text: "some one just sent u a friend request",
          type: "r",
          time: "19:05"
        },
        {
          id: 1,
          img: "favicon.ico",
          text: "guy changed his propfile picture",
          type: "n",
          time: "23:34"
        },
        {
          id: 2,
          img: "favicon.ico",
          text: "we have updated to 2.2.1",
          type: "u",
          time: "00:45"
        }
      ]
    });
  }
  putter(e) {
    this.db.user.put(e);
  }
  checkDuplication(array, id) {
    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return true;
        }
      }
    }

    return false;
  }
  newFriend(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];

        if (!this.checkDuplication(res.profile.friends, obj.id)) {
          res.profile.friends.push(obj);
          this.putter(res);
        }
      });
    this.newSingleConvo(obj.id);
  }
  newGroup(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];

        if (!this.checkDuplication(res.profile.groups, obj.id)) {
          res.profile.groups.push(obj);
          this.putter(res);
        }
      });
    this.newGroupConvo(obj.id);
  }
  newChannal(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];

        if (!this.checkDuplication(res.profile.channal, obj.id)) {
          res.profile.channal.push(obj);
          this.putter(res);
        }
      });
    this.newChannalConvo(obj.id);
  }
  newSingleConvo(id) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        var obj = {
          id: id,
          content: []
        };
        if (!this.checkDuplication(res.single, id)) {
          res.single.push(obj);
          this.putter(res);
        }
      });
  }
  newGroupConvo(id) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        var obj = {
          id: id,
          content: []
        };
        if (!this.checkDuplication(res.group, id)) {
          res.group.push(obj);
          this.putter(res);
        }
      });
  }
  newChannalConvo(id) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        var obj = {
          id: id,
          content: []
        };
        if (!this.checkDuplication(res.channal, id)) {
          res.channal.push(obj);
          this.putter(res);
        }
      });
  }
  newSingleMsg(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        for (var i = 0; i < res.single.length; i++) {
          if (res.single[i].id === obj.userId) {
            if (!this.checkDuplication(res.single[i].content, obj.id)) {
              res.single[i].content.push(obj);
              this.putter(res);
            }
          }
        }
      });
  }
  newGroupMsg(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        for (var i = 0; i < res.group.length; i++) {
          if (res.group[i].id === obj.userId) {
            if (!this.checkDuplication(res.group[i].content, obj.id)) {
              res.group[i].content.push(obj);
              this.putter(res);
            }
          }
        }
      });
  }
  newChannalMsg(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        for (var i = 0; i < res.channal.length; i++) {
          if (res.channal[i].id === obj.userId) {
            if (!this.checkDuplication(res.channal[i].content, obj.id)) {
              res.channal[i].content.push(obj);
              this.putter(res);
            }
          }
        }
      });
  }
  newProfile(pic) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        res.profile.picture.push(pic);
        this.putter(res);
      });
  }
  newNotification(obj) {
    this.db.user
      .where("id")
      .equals(1)
      .sortBy("position")
      .then(res => {
        res = res[0];
        if (!this.checkDuplication(res.notification, obj.id)) {
          res.notification.push(obj);
          this.putter(res);
        }
      });
  }
}

export default Insert;
