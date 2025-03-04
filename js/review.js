const btnRewiev = document.getElementById("myBtn");
const nameValue = document.getElementById("nameValue");
const themeValue = document.getElementById("titleValue");
const reviewValue = document.getElementById("descValue");
let list = document.querySelector('.reviews__list');
let x = 1;

btnRewiev.addEventListener('click', (event) => {
  event.preventDefault();
  let item = document.createElement('li');
  let top = document.createElement('div');
  let bottom = document.createElement('div');
  let imgBox = document.createElement('div');
  let img = document.createElement('img');
  let info = document.createElement('div');
  let name = document.createElement('a');
  let title = document.createElement('div');
  let desc = document.createElement('div');
  let tagP = document.createElement('p');
  let dateNow = document.createElement('div');
  
  item.id = 'item'+x;
  item.className = 'reviews__item review';
  top.className = 'review__contact';
  imgBox.className = 'review__img-box';
  img.className = 'review__img';
  info.className = 'review__info';
  name.className = 'review__name';
  bottom.className = 'review__desc';
  title.className = 'review__title';
  desc.className = 'review__desc-text';
  dateNow.className = 'review__date';

  if (!nameValue.value) {
    name.innerHTML = 'Anonimous'
  } else {
    name.innerHTML = nameValue.value
  }
  if (!titleValue.value) {
    title.innerHTML = 'Title'
  } else {
    title.innerHTML = titleValue.value
  }
  if (!descValue.value) {
    tagP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum facere, est illum ducimus aut, neque delectus corrupti molestiae maiores nihil ullam error placeat officiis ut ipsam nesciunt voluptatum? Facere.'
  } else {
    tagP.innerHTML = descValue.value
  }

  img.src = './img/Эллипс.png'
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
  dateNow.textContent = `${formattedDate}`

  list.append(item)
  item.append(top)
  item.append(bottom)
  top.append(imgBox)
  imgBox.append(img)
  top.append(info)
  info.append(name)
  bottom.append(title)
  bottom.append(desc)
  desc.append(tagP)
  bottom.append(dateNow)

  window.scrollTo({
    top: document.getElementById('item'+x).offsetTop,
    behavior: 'smooth'
  });

  nameValue.value = ''
  titleValue.value = ''
  descValue.value = ''
  x++;
})
