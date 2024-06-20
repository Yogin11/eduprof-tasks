const user = {
  id: "1",
  name: "Jon",
  lastname: "Bon Jovi",
    email: "jon@bonjovi.com",
  
//   avatar: "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  avatar: "https://d.wattpad.com/story_parts/12/images/15d1472d2f6a6307134322722012.jpg",
  about: "Here is my discography",
};

const users = {
  0: {
    name: "Tico",
    lastname: "Torres",
    email: "tico@torres.com",
    id: 15,
    avatar: "https://www.drummerworld.com/drummerworld2/ticotorres436v.jpg",
    //   "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Here is my discography",
  },
  1: {
    name: "Richie",
    lastname: "Sambora",
    email: "richie@sambora.com",
    id: 31,
    avatar: "https://avatars.dzeninfra.ru/get-zen_doc/9716076/pub_6433026653745a2018eb2672_643302685a0876026f09b64c/scale_1200",
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Here is my discography",
  },
  2: {
    name: "Alec John",
    lastname: "Such",
    email: "alec@such.com",
    id: 10,
    avatar: "https://i.pinimg.com/736x/fc/79/82/fc79820a9cb3317f107dbf753d613760.jpg",
    //   "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Here is my discography",
  },
  3: {
    name: "David",
    lastname: "Bryan",
    email: "david@bryan.com",
    id: 53,
    avatar:
      "https://sun3-11.userapi.com/c855416/v855416676/1ea862/_JA8RZlc0oc.jpg",
    //   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Here is my discography",
  },
};

export function getUser(usersId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == usersId) {
      return users[i];
    }
  }
  return user;
}

export function getUsers() {
  return users;
}
