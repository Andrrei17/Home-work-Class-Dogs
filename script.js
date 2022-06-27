const p = document.querySelectorAll('p');

console.log (p); 




class Dogs {
    constructor (breed, name, voice){
        this.breed = breed;
        this.name = name;

        this.voice = voice;
        }
     
}


let chappy = new Dogs ('Terrier', 'Chappy', 'Uaf - Uaf');
let steve = new Dogs ('Hasky', 'Steve', 'Gav - Gav');
let ralf = new Dogs ('American Cocker Spaniel', 'Raf - Raf');
let cortney = new Dogs ('Bearded Collie', 'Cortney', 'Af - Af');

// console.log(cortney)

function findNames (dog) {
    return Object.entries(dog).filter(i => i.includes('name'));
}
 console.log (findNames(cortney))

function findBreed (dog) {
   return Object.entries(dog).filter(i => i.includes('breed'));
}

function findVoice (dog) {
    let obj = {};
    for (let key in dog){
        if (key === 'voice'){
            obj[key] = dog[key];
        }
        
    }
    return obj;
}

console.log (findVoice(chappy));