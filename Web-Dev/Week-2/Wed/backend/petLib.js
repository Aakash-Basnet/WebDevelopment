let petArray=[]

function getAll() {
    return petArray;
}

// console.log("getAll called:",getAll());
 let nextId=1;
function addOne(name,species,age,color,weight) {
    if(!name || !species || !age || !color || !weight){
        return("Missing required pet information");
    }


    const newPet = {
        id:nextId++,
        name,
        species,
        age,
        color,
        weight,
};
petArray.push(newPet);
return newPet;

}
let res1=addOne("Fluffy","cat",3,"white",5)
// console.log(res1)
let res2=addOne("tommy","dog",5,"black",10)
// console.log(res2)
// console.log("getAll called:",getAll());

function findById(id) {
    const pet=petArray.find((item)=>item.id==id)
    if(pet){
        return pet;
    }
    return null;

}

// console.log("findById called:",findById(1));
// console.log("findById called:",findById(10));

function updateOneById(id, updatedData) {
    const pet=findById(id);
    if(pet){
         if (updatedData.name) {
      pet.name = updatedData.name;
    }
    if (updatedData.species) {
      pet.species = updatedData.species;
    }
    if (updatedData.age) {
      pet.age = updatedData.age;
    }
    if (updatedData.color) {
      pet.color = updatedData.color;
    }
    if (updatedData.weight) {
      pet.weight = updatedData.weight;
    }
    return pet;
    }
    return false;
}
// console.log("getall called:",getAll());
// console.log("updateOneById called:",updateOneById(1,{age:6,weight:20}));
// console.log("getall called:",getAll());

function deleteOneById(id) {
    const pet=findById(id);
    if(pet){
        const initialLength=petArray.length;
        petArray=petArray.filter((item)=>item.id!==id);
        return petArray.length<initialLength;

    }
}
// console.log("getall called:",getAll());
// console.log("deleteOneById called:",deleteOneById(1));
// console.log("getall called:",getAll());