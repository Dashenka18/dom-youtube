
// !------------------пробовала выводить просто элементы в консоль-----------------
// const all = document.body;
// console.log(all);

// const head = document.head;
// console.log(head);

// const ul = document.querySelector('li').nextElementSibling; 
// console.log(ul.textContent);


// !------------innerHTML---textContent-----------

// const spisok = document.querySelector('.spisok');

// const spisokContent = spisok.innerHTML;
// console.log(spisokContent); 

// spisok.innerHTML = `<li>yoy</li>`;
// console.log(spisok.innerHTML); 


// const spisok = document.querySelector('.spisok');
// const spisokContent = spisok.textContent;
// const spisokRasmetka = spisok.innerHTML;

// console.log(spisok);
// console.log(spisokContent);
// console.log(spisokRasmetka); 


// !------createElement--------

// const newEl = document.createElement('div');
// console.log(newEl); 

// newEl.innerHTML = `<li>heloo</li>kak dela`;
// console.log(newEl.innerHTML);


// !-----createTextNode--------

// const newText = document.createTextNode('privet');
// console.log(newText.textContent); 


// !------------вставить новый элемент в разметку---------

// const spisok = document.querySelector('.spisok');

// const newElement = document.createElement('div');

// const newElContent = newElement.innerHTML = `privet kak dela`;

// console.log(spisok);
// console.log(newElContent); 

// spisok.before(newElContent); => перед обьектом список
// spisok.after(newElContent); => после обьекта список
// spisok.prepend(newElContent); => внутри в начале обьекта список
// spisok.append(newElContent); => внусти в конце обьекта список  


// !------- insertAdjacentHTML()----------
// .insertAdjacentHTML(куда мы будем вставлять, что мы будем вставлять)

// const spisok = document.querySelector('.spisok');
// const newEl = document.createElement('div');
// const newElContent = newEl.innerHTML = `privet kaka dela`;

// spisok.insertAdjacentHTML("beforebegin", newElContent);
// spisok.insertAdjacentHTML("afterbegin", newElContent);
// spisok.insertAdjacentHTML("beforeend", newElContent);
// spisok.insertAdjacentHTML("afterend", newElContent);


// !----cloneNode(true)---cloneNode---remove---change position----

// const spisok = document.querySelector('.spisok');
// const newEl = document.createElement('p'); 
// const newElContent = newEl.innerHTML = `privet kaka dela`;

// const cloneEl = newEl.cloneNode(true); - глубокое клонированние(со всем содержимым)
// spisok.append(cloneEl); 

// const cloneElp = newEl.cloneNode(); - обычное клонированние, тоесть только тег 
// spisok.prepend(cloneElp);
// spisok.append(cloneElp); 

// spisok.before(newEl);
// newEl.remove(); - сначала вставила, потом удалила обьект newEl


// ----------classes------- className-----

// const spisok = document.querySelector('.spisokJs');

// const spisokClasses = spisok.className; - see how much classes it has
// console.log(spisokClasses);

// spisok.className = 'fuc';  - change all classes to fuc



// ------classes--------classList------------

// const spisok = document.querySelector('.spisok');

// spisok.classList.add('fuc'); - add class
// spisok.classList.remove('fuc'); - удаляет класс
// spisok.classList.toggle('fuc'); - добавляет такой класс, если его нету и наоборот
// const result = spisok.classList.contains('fuc'); 
// console.log(result); - проверяет есть ли такой класс, возвращает true/false

// for (let className of spisok.classList){
//     console.log(className);
// } - can see all classes 


// ---------- style--------

// const spisok = document.querySelector('.spisok');

// spisok.style.color = 'blue'; - change color from white => blue


// --------getComputedStyle()----------

// const p_spisok = document.querySelector('.p-spisok');

// const style = getComputedStyle(p_spisok);
// console.log(style.fontSize);    - search font size for p



// --------Attributes-----------

// const spisok = document.querySelector('.spisok');

// const result = spisok.removeAttribute('name');
// spisok.hasAttribute('name');  
// spisok.getAttribute('name');
// spisok.setAttribute('name');
// spisok.removeAttribute('name'); 
// console.log(result); 