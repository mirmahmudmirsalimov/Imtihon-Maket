let elList = document.querySelector(".list");
let elBtn1 = document.querySelector(".btn__1");
let elBtn2 = document.querySelector(".btn__2");
let elBtn3 = document.querySelector(".btn__3");
let elBtnClean = document.querySelector(".btn__clean");

const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: "15.99 $",
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },

    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: "20.99 $",
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },

    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: "8.99 $",
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
];

const menu1 = [{
        id: 2,
        title: "diner double",
        category: "lunch",
        price: "13.99 $",
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: "22.99 $",
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: "12.99 $",
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
];

const menu2 = [{
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: "18.99 $",
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: "6.99 $",
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },

    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: "16.99 $",
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]



let maniNarsam = menu;
let maniNarsam1 = menu1;
let maniNarsam2 = menu2;

elBtn1.addEventListener("click", function () {
    elList.innerHTML = null
    render(maniNarsam)
})

elBtn2.addEventListener("click", function () {
    elList.innerHTML = null
    render(maniNarsam1);
})

elBtn3.addEventListener("click", function () {
    elList.innerHTML = null
    render(maniNarsam2);
})

elBtnClean.addEventListener("click", function () {
    elList.innerHTML = null
    elResult.textContent = "Cleaned"
})

function render(array) {
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item"

        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newtitle = document.createElement("h4");
        let newSt = document.createElement("p");
        let newStt = document.createElement("p");

        newH3.classList = "item_title"
        newtitle.classList = "item_title  text-truncate"
        newStt.classList = "item_title"
        newSt.classList = "item_title"


        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        } else {
            newH3.textContent = item.title;
            newSt.textContent = item.desc;
            newImg.src = item.img;
            newImg.width = "212"
            newImg.height = "165"

            newStt.textContent = item.price;
            newtitle.textContent = item.category;
        }




        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newtitle);
        newLi.appendChild(newSt);
        newLi.appendChild(newStt);
        elList.appendChild(newLi);
    }
}