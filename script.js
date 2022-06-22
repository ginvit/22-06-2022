/// ---- Esercizi 22-06

// per tutti gli esercizi avremo:
//const array = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach
// 1)fare console.log() di ogni elemento di array
// 2)fare un console.log() di ogni elemento, dopo un set timeout di (elemento * index)
// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

// filter
// 1)tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]

// 2)tenere solo i numeri in comune con questo array:
// [10, 1, 2, 5, 6]
// utility: Array.includes oppure Array.indexOf
// risultato: [1,2,5,6]

// forEach 1
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  elementsArray = (element, index, array) => {
    console.log(element);
  };
  const elementList = array.forEach(elementsArray);
  elementList;
  console.clear(); //oppure
  const prova = array.forEach((e, i, a) => {
    console.log(e);
  });
  prova;
})();
// forEach 2
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  array.forEach((e, i, a) => {
    setTimeout(() => {
      console.log(e);
    }, 1000 * i);
  });
})();
// filter 1
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const numberPari = array.filter((e, i, a) => {
    return e % 2 === 0;
  });

  console.log(numberPari);
})();
// filter 2
(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const array2 = [10, 1, 2, 5, 6];
  sameNumber = (e, i, a) => array2.includes(e);

  console.log(array.filter(sameNumber));
})();
