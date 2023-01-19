
    
    
    document.getElementById("all").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="block");
        
    });

    document.getElementById("bap").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="none");
    });

    document.getElementById("beb").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="none");
    });

    document.getElementById("cou").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="none");
    });

    document.getElementById("fam").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="none");
    });

    document.getElementById("gro").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="none");
    });

    document.getElementById("mar").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="block");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="none");
    });

    document.getElementById("por").addEventListener("click", () =>{
        Array.from(document.getElementsByClassName('bap')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('beb')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('cou')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('fam')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('gro')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('mar')).forEach(element => element.style.display="none");
        Array.from(document.getElementsByClassName('por')).forEach(element => element.style.display="block");
    });
