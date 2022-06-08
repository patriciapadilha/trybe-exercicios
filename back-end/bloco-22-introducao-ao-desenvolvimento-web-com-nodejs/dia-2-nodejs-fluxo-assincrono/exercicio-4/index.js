// 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;

// function readAllSimpsons () {
//     const simpsonsJson = 'simpsons.json';
    
//     fs.readFile(simpsonsJson, 'utf8')
//       .then((content) => {
//         const simpsons = JSON.parse(content);
//         simpsons.map((elemento) => 
//           console.log(`${elemento.id} - ${elemento.name}`)
//         )
//       })
//       .catch((err) => {
//         console.error(`Não foi possível ler o arquivo ${simpsonsJson}\n Erro: ${err}`);
//         process.exit(1);
//       });
// }

// // com async/await

async function readAllSimpsonsAsync () {
    const content = await fs.readFile('./simpsons.json', 'utf8')
    const simpsons = JSON.parse(content);
    simpsons.map((elemento) => 
      console.log(`${elemento.id} - ${elemento.name}`)
    )
}

// readAllSimpsons();

// 2 Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsonById(id) {
   const content = await fs
    .readFile('./simpsons.json', 'utf-8');
  
   const simpsons = JSON.parse(content);

   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

   if (!chosenSimpson) {
     throw new Error('id não encontrado');
   }
    return chosenSimpson;
 }

async function main1() {
    const simpson = await getSimpsonById(11);
    console.log(simpson);
}

// main1();

// 3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function filterSimpsons() {
   const content = await fs
   .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(content);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
   // console.log(newArray);
   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
   // modifica no arquivo simpsons.json
}

async function main2() {
    await filterSimpsons();
}

// main2();

// 4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function copySimpsons() {
    const content = await fs
    .readFile('./simpsons.json', 'utf-8');
   
   const simpsons = JSON.parse(content);
   const newArray = simpsons.filter((simpson) => simpson.id <= '4');
   console.log(newArray);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
    // modifica no arquivo simpsons.json
 }
 
 async function main3() {
     await copySimpsons();
 }
 
// main3();

// 5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addSimpsons() {
    const content = await fs
    .readFile('./simpsonFamily.json', 'utf-8');

   const simpsons = JSON.parse(content);

   simpsons.push({ id: '5', name: 'Nelson Muntz' });

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
 }
 
 async function main4() {
     await addSimpsons();
 }
 
// main4();

// 6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function removeAndReplaceSimpsons() {
    const content = await fs
    .readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(content);

    const remove = simpsons.filter((simpson) => simpson.id !== '8');

    const replace = [ ...remove, { id: '15', name: 'Maggie Simpson' } ]

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(replace));
}

 async function main5() {
     await removeAndReplaceSimpsons();
 }
 
 main5();