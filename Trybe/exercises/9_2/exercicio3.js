// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((number, acc) => number + acc, 0);
  
      (sum < 8000) ? resolve(sum) : reject();
    });
  
    myPromise
      .then(sum => [2, 3, 5, 10].map(number => sum / number)).then(number => console.log(number))
      .catch(() => console.log('Deu ruim!'));
  };
  
  fetchPromise();