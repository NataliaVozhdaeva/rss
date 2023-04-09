console.log('hi');

/* async function getData() {
  const requestURL = '../assets/pets.json';

  const response = await fetch(requestURL);
  let result = await response.json();
  console.log(result);
  return result;
}
console.log(result); */

async function getData() {
  await fetch('../assets/pets.json', {
    mode: 'no-cors',
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
}
getData();
