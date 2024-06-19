const user = {
    id: "1",
    name: "Jon",
    lastname: "Bon Jovi",
    email: "jon@bonjovi.com",
    avatar: "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
    about: "Here is my discography",
};

const users = {
    0: { name: 'Tico', lastname: "Torres" },
    1: { name: 'Richie', lastname: "Sambora" },
    2: { name: 'Alec John', lastname: "Such" },
    3: { name: 'David', lastname: "Bryan" },
    
}

export function getUser() {
    return user;
}

export function getUsers() {
    return users;
}