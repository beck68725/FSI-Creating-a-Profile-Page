let content = document.querySelector('.js-generated.content')
let header1 = document.createElement('h1')
header1.setAttribute('class', 'dog-name')
header1.append('Rizzo')
content.append(header1)

let div1 = document.createElement('div')
div1.setAttribute('class', 'dog-content')
content.append(div1)

let img1 = document.createElement('img')
img1.setAttribute('class', 'dog-image')
img1.setAttribute('src', './assets/rizzo.jpg')
img1.append('dog-image')
content.append(img1)

let div2 = document.createElement('div')
div2.setAttribute('class', 'dog-details')
content.append(div2)

let header3 = document.createElement('h3')
header3.setAttribute('class', 'dog-details')
header3.append('Description')
content.append(header3)

let paragraph1 = document.createElement('p1')
paragraph1.setAttribute('class', 'dog-details')
paragraph1.append('This-gentle-dog-is-aloof-toward-her-owner,-and-never-comes-when-called.-She-always-acts-as-though-any-stranger-she-meets-will-harm-her,-and-dislikes-other-animals.')
content.append(paragraph1)

let header4 = document.createElement('h3')
header4.setAttribute('class', 'dog-details')
header4.append('Feeding Times:')
content.append(header4)

let list = document.createElement('ul')

let item1 = document.createElement('li')
let item2 = document.createElement('li')
let item3 = document.createElement('li')

item1.textContent = '9:00 am'
item2.textContent = '12:00 pm'
item3.textContent = '5:00 pm'

list.append(item1, item2, item3)
document.body.append(list)



