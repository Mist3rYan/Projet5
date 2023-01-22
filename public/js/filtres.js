//variables pour gestion couleur menu nav
let lienAll = document.querySelector("body > main > nav > ul > li:nth-child(1) > a")
let lienBap = document.querySelector("body > main > nav > ul > li:nth-child(2) > a")
let lienBeb = document.querySelector("body > main > nav > ul > li:nth-child(3) > a")
let lienCou = document.querySelector("body > main > nav > ul > li:nth-child(4) > a")
let lienFam = document.querySelector("body > main > nav > ul > li:nth-child(5) > a")
let lienGro = document.querySelector("body > main > nav > ul > li:nth-child(6) > a")
let lienMar = document.querySelector("body > main > nav > ul > li:nth-child(7) > a")
let lienPor = document.querySelector("body > main > nav > ul > li:nth-child(8) > a")
let select = document.querySelector("body > main > nav > select");

//filtres menu nav
document.querySelector(".opt-all").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "block");
    lienAll.style.color = "#47555E";
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-bap").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    lienBap.style.color = "#47555E";
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-beb").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    lienBeb.style.color = "#47555E";
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-cou").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    lienCou.style.color = "#47555E";
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-fam").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    lienFam.style.color = "#47555E";
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-gro").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    lienGro.style.color = "#47555E";
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-mar").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    lienMar.style.color = "#47555E";
    if(lienPor.style.color = "#47555E") {lienPor.style.color = "white"};
});

document.querySelector(".opt-por").addEventListener("click", () => {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "block");
    if(lienAll.style.color = "#47555E") {lienAll.style.color = "white"};
    if(lienBap.style.color = "#47555E") {lienBap.style.color = "white"};
    if(lienBeb.style.color = "#47555E") {lienBeb.style.color = "white"};
    if(lienCou.style.color = "#47555E") {lienCou.style.color = "white"};
    if(lienFam.style.color = "#47555E") {lienFam.style.color = "white"};
    if(lienGro.style.color = "#47555E") {lienGro.style.color = "white"};
    if(lienMar.style.color = "#47555E") {lienMar.style.color = "white"};
    lienPor.style.color = "#47555E";
});

//filtre par catégorie select
select.addEventListener('change', () => {
    console.log(select.value);
    if(select.value == "Toutes les photos") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "block");
    }
    else if(select.value == "Baptême") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    }
    else if(select.value == "Bébé") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    }
    else if(select.value == "Couple") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    }
    else if(select.value == "Famille") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    }
    else if(select.value == "Grossesse") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    }
    else if(select.value == "Mariage") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "block");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "none");
    }
    else if(select.value == "Portrait") {
    Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display = "none");
    Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display = "block");
    }
});
