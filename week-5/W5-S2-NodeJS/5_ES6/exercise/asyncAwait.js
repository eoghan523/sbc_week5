/* Traditional */
/*
function fetchData(callback) {
  setTimeout(function () {
    callback("Data received");
  }, 1000);
}

fetchData(function (data) {
  console.log(data); // "Data received"
});
*/
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

fetchData().then((data) => console.log(data)); // "Data received"

const fetchDataAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

async function getData() {
  const data = await fetchDataAsync();
  console.log(data); // "Data received"
}

getData();
