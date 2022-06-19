// Создать 2 кнпоки -
// первая с классом button create(Create flex-box),
// вторая с классом button delete(delete flex-box)
// Создать div с классом flex-box
// создать div с классом flex-block


//при нажатии на кнопку button create
//создать внутри div с классом flex-box кнопки для наших команд с классом flex
//и дать в тексте их команды
//создать внутри блока с классом flex-block -  3 div с классом box и с модификаторами box1,box2,box3


//при нажатии на кнопку button-delete удаляем все данные с flex-box
//и все данные с flex-block

//если у нас уже есть наши кнопки и 3 box
//то при нажатии на btn-create добавить 3 div в flex-block|flex-box не трогаем


//если у нас элементов с классом box более трех -
//то при нажатии на кнопку button-delete, удаляем только 3 последних бокса

//при нажатии на кнопку с классом flex добавить этой кнопке текст : active
//при повторном нажатии удаляем текст active

//при нажатии на одну кнопку с классом flex выполнить
//блок с классом flex-block выполнить команду нажатой кнопки
let properties = ['display:flex',
    'justify-content:space-between',
    'justify-content:center',
    'justify-content:space-around',
    'justify-content:space-evenly',
    'justify-content:flex-start',
    'justify-content:flex-end',
    'flex-wrap:nowrap',
    'flex-wrap:wrap',
    'flex-wrap:wrap-reverse',
    'align-items:center',
    'align-items:flex-start',
    'align-items:flex-end',
    'align-content:center',
    'align-content:flex-start',
    'align-content:flex-end',
    'align-content:space-between',
    'flex-direction:column',
    'flex-direction:column-reverse',
    'flex-direction:row',
    'flex-direction:row-reverse' ,
];
let root = document.querySelector('.root');

let createBtn = document.createElement('button');
createBtn.className = 'button-create';
createBtn.textContent = 'Create flex-box';

let delBtn = document.createElement('button');
delBtn.className = 'button-delete';
delBtn.textContent = 'Delete flex-box';


let flexBox = document.createElement('div');
flexBox.className = 'flex-box';
let flexBlock = document.createElement('div');
flexBlock.className = 'flex-block';

root.append(createBtn,delBtn,flexBox,flexBlock);

createBtn.addEventListener('click', ()=>{

    if (flexBox.children.length === 0){
        properties.forEach((item)=>{

            let flex = document.createElement('button');
            flex.className='flex';
            flex.style.margin = 10 +'px';
            flex.textContent = item;
            flex.style.backgroundColor = 'grey';
            flexBox.append(flex);

            flex.addEventListener('click',()=>{

                if (!flex.textContent.includes('active')){
                    flexBlock.classList.add(flex.textContent + ';');
                    document.querySelectorAll('.flex').forEach(el=>{
                        if (el.textContent.includes(flex.textContent.split(':')[0]) && el.textContent.includes('active')){

                            el.style.backgroundColor = 'grey';
                            el.textContent = el.textContent.slice(0,el.textContent.length-7);
                            flexBlock.classList.remove(el.textContent + ';');
                        }
                    });
                    flex.textContent += ' active';
                    flex.style.backgroundColor = 'blue';

                }
                else{

                    flex.textContent = flex.textContent.slice(0,flex.textContent.length-7);
                    flex.style.backgroundColor = 'grey';
                    flexBlock.classList.remove(flex.textContent + ';')
                }
                flexBlock.style.cssText = flexBlock.className.slice(11);
            })
        });
    }

    for (let i = 1 ; i < 4; i++){
        let box = document.createElement('div');
        box.className = `box box${i}`;
        flexBlock.append(box);
    }



});






delBtn.addEventListener('click', () => {

    if (flexBlock.children.length > 3){
        Array.from(flexBlock.children).forEach((item,idx, array) =>{
            if (idx > array.length - 4){
                item.remove()
            }
        })
    } else {
        Array.from(flexBox.children).forEach((item)=>{
            item.remove()
        });
        Array.from(flexBlock.children).forEach((item)=>{
            item.remove();
        });
    }
});






