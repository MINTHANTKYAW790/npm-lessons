const handleFileUpload = async () => {
    const inputTag = document.getElementById("fileUpload");

    const response = await fetch("http://localhost:3000/fileUpload", {
        method: "POST",
        body: inputTag.files[0],
    });
    console.log(await response.json());
};

// const usersDiv = document.querySelector("#users");
// console.log("This is js");
// let url = "http://localhost:3000/users";
// // fetch(url)
// //     .then((res) => {
// //         return res.json();
// //     })
// //     .then((data) => {
// //         console.log(data);
// //     });

// const getUsers = async () => {
//     const res = await fetch(url);
//     const users = await res.json();
//     console.log(users);
//     for (let i = 0; i < users.length; i++) {
//         usersDiv.innerHTML += `  <div>
//         id : ${users[i].id} <br/>
//         name : ${users[i].name}
//       </div>`;
//     }
// };

// const user = async (name1) => {
//     const response = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(name1),
//     });
//     const status = await response.json();
//     console.log(response);
// };

// const submit = () => {
//     const name = document.querySelector("#name");
//     const name1 = { name: name.value };
//     user(name1);
//     newDiv(name1);
// };

// const newDiv = (name1) => {
//     usersDiv.innerHTML += `  <div>

//         new-name : ${name1.name}
//       </div>`;
// };
// submit();
// getUsers();
