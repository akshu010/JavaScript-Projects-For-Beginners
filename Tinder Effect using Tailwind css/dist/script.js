alert("Please Use mobile screen for better experience");
let curr = 0;
let isAnimating = false;
let deny = select(".reject");
let accept = select(".accept");
let users = [
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 6,
    location: "Chandigarh, India",
    name: "Anshika",
    age: 22,
    intrests: [
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        intrest: "Editing",
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intrest: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing edit abdb Lorem ipsum dolor sit amet consectetur adipisicing edit abdb",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 5,
    location: "Banglore, India",
    name: "Akshita",
    age: 28,
    intrests: [
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        intrest: "Editing",
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intrest: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing edit abdb Lorem ipsum dolor sit amet consectetur adipisicing edit abdb",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessage: 9,
    location: "California, USA",
    name: "Priyanshi",
    age: 20,
    intrests: [
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        intrest: "Editing",
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intrest: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing edit abdb Lorem ipsum dolor sit amet consectetur adipisicing edit abdb",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=800",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessage: 1,
    location: "Mumbai, India",
    name: "Sania",
    age: 18,
    intrests: [
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        intrest: "Editing",
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intrest: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing edit abdb Lorem ipsum dolor sit amet consectetur adipisicing edit abdb",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.pexels.com/photos/4519118/pexels-photo-4519118.jpeg?auto=compress&cs=tinysrgb&w=800",
    displayPic:
      "https://images.pexels.com/photos/4519122/pexels-photo-4519122.jpeg?auto=compress&cs=tinysrgb&w=800",
    pendingMessage: 1,
    location: "Pune, India",
    name: "Nidhi",
    age: 25,
    intrests: [
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        intrest: "Editing",
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intrest: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing edit abdb Lorem ipsum dolor sit amet consectetur adipisicing edit abdb",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800",
    displayPic:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    pendingMessage: 1,
    location: "Noida, India",
    name: "Neha",
    age: 25,
    intrests: [
      {
        icon: `<i class="ri-image-edit-fill"></i>`,
        intrest: "Editing",
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        intrest: "Music",
      },
      {
        icon: `<i class="ri-restaurant-line"></i>`,
        intrest: "Cooking",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing edit abdb Lorem ipsum dolor sit amet consectetur adipisicing edit abdb",
    isFriend: null,
  },
];
function select(elem) {
  return document.querySelector(elem);
}
function setData(index){
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").innerHTML = users[index].pendingMessage;
  select(".location h2").innerHTML = users[index].location;
  select(".name h1").innerHTML = users[index].name;
  select(".age").innerHTML = users[index].age;

  var clutter = "";
  users[index].intrests.forEach(function (intrest) {
    clutter += ` <div class=" tag text-white flex gap-1 justify-center items-center capitalize bg-white/30 rounded-full px-3 py-1">
                ${intrest.icon}<h3> ${intrest.intrest} </h3>
              </div>`;
  });
  select(".tags").innerHTML = clutter;
  select(
    ".bio p"
  ).innerHTML = `Hello I am ${users[index].name} A passionate explorer with a love for creativity and adventure. Finds joy in simple moments, from quiet evenings with a book to spontaneous road trips.`;
 
}
(function setInitials() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;
  setData(curr);
  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    );
    tl.from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}
function animateText() {
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
    ease: Power4.easeInOut,
    duration: 1,
  });
}

deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  animateText();
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  animateText();
});
function containerCreater() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, `overflow-hidden`);
    console.log(div);
    div.appendChild(element);
    select(".details").appendChild(div);
  });
}

containerCreater();
