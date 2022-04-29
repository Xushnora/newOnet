let twoArr = [];
let oneArr = []
let imgs = [];
let imgs_length = 60;

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 12; j++) {
        let obj = {
            x: i,
            y: j,
        }
        oneArr.push(obj)
    }
}

for (let i = 2; i <= 7; i++) {
    for (let j = 2; j <= 11; j++) {
        let obj = {
            x: i,
            y: j,
        }
        twoArr.push(obj)
    }
}

for (let i = 0; i < 4; i++) {
    pokemons.forEach((item) => {
        imgs.push(item.id)
    })
}

let cardList = document.querySelector('.cardList');

for (let i = 0; i < 100; i++) {
    let aX = Math.floor(Math.random() * imgs_length);
    let bX = Math.floor(Math.random() * imgs_length);
    let temp = imgs[aX];
    imgs[aX] = imgs[bX];
    imgs[bX] = temp;
}
imgs.forEach((item, i) => {
    twoArr[i].i = item
})

oneArr.forEach((item)=>{
    let li = document.createElement('li')
    li.classList = `cardItem x_${item.x} y_${item.y} new_class`
    // li.textContent = `${item.x}, ${item.y}`
    cardList.appendChild(li);
})

cardItems.forEach((item)=>{
    twoArr.forEach((el)=>{
        if (item.className.includes(`x_${el.x}`) && item.className.includes(`y_${el.y}`)) {
            let box = document.createElement('div')
            box.classList = `itemBigBox x_${el.y} y_${el.x}`
            box.id = el.i;
            item.id = el.i;
            item.appendChild(box)
        }
    })
})

let cardItems = document.querySelectorAll(".cardItem")
let items = document.querySelectorAll('.itemBigBox');
let newClass = document.querySelectorAll('.new_class')

items.forEach((imgs)=>{
    pokemons.forEach(item => {
        if (imgs.id == item.id) {
            imgs.innerHTML = `
                <div class = "itemBox" onclick = addId"(${item.id})">
                    <img src="${item.img}" alt="img">
                </div>
            `
        }
    })
})

let oneId = 0;

cardItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        let xxx = e.currentTarget.classList[1].split('_')[1];
        let yyy = e.currentTarget.classList[2].split('_')[1];
        oneId = e.currentTarget.id;

        // console.log(xxx, yyy, oneId);

        newClass.forEach((boxs, index) => {
            boxs.addEventListener('click', (evl) => {
                let xx = evl.currentTarget.classList[1].split('_')[1];
                let yy = evl.currentTarget.classList[2].split('_')[1];
                twoId = evl.currentTarget.id;

                // console.log(xx, yy, twoId);

                if(oneId == twoId) {
                    // console.log('ok');
                    if(xxx == xx && yyy == ((yy - 0)-1) ||
                    xxx == ((xx - 0)+1) && yyy == yy ||
                    xxx == xx && yyy == (yy - 0) + 1 ||
                    xxx == ((xx - 0) - 1) && yyy == yy) {
                        console.log("kirdi");
                        e.target.remove()
                        evl.target.remove()
                    }

                }
            })
        })

    })
})

// items.forEach((item, index)=> {

//     item.addEventListener('click', (el)=> {
        
//         let yCor = el.currentTarget.classList[1].split('_')[1]
//         let xCor = el.currentTarget.classList[2].split('_')[1] 
//         firstId =el.currentTarget.id;
//         console.log( yCor,xCor);
//         console.log(el.target);
//         // console.log(el.currentTarget.id);
//         console.log(item.id);
//     game__item.forEach((card, zdx)=> {

    
//         card.addEventListener('click', (cel)=> {

//             let yCor2 = cel.currentTarget.classList[1].split('_')[1]
//             let xCor2 = cel.currentTarget.classList[2].split('_')[1] 
//             secondId =cel.currentTarget.id;
//             console.log(card.id);
//             // console.log(firstId, secondId);
//             console.log(yCor2, xCor2);
//             if(firstId==secondId) {
//                 if(yCor==yCor2 && xCor==((xCor2-0)+1) ||
//                 yCor==((yCor2-0)+1) && xCor==xCor2 ||
//                 yCor==yCor2 && xCor==((xCor2-0)-1) ||
//                 yCor==((yCor2-0)-1) && xCor==xCor2) {
//                     cel.target.classList.add('bosh')
//                     el.target.classList.add('bosh')
//                     cel.target.remove()
//                     el.target.remove()
//                 }
//                 if(yCor==yCor2 && (xCor==((xCor2-0)+2) ||xCor==((xCor2-0)+3) || 
//                 xCor==((xCor2-0)+4) || xCor==((xCor2-0)+5) || xCor==((xCor2-0)+6) || xCor==((xCor2-0)+7) || xCor==((xCor2-0)+8) || xCor==((xCor2-0)+9) || xCor==((xCor2-0)+10) || xCor==((xCor2-0)+11))) {
//                     cel.target.classList.add('bosh')
//                     el.target.classList.add('bosh')
//                     cel.target.remove()
//                     el.target.remove()
//                 }

//             }
//             // items.forEach(idx=> {
//             //     let yyy = idx.classList[1].split('_')[1]
//             //     let xxx = idx.classList[2].split('_')[1]
    
//             //     if((xxx==xCor && xCor==((nextXTarget-0)+1) && yyy==yCor &&  yCor==nextYTarget)||
//             //     (xxx==xCor && xCor==nextXTarget && yyy==yCor &&  yCor==((nextYTarget-0)+1)) ||
//             //     (xxx==xCor && xCor==((nextXTarget-0)-1) && yyy==yCor &&  yCor==nextYTarget) ||
//             //     (xxx==xCor && xCor==nextXTarget && yyy==yCor &&  yCor==((nextYTarget-0)-1)) )
//             //     {
//             //         idx.remove()
//             //     }
//             // })
//         })
//         })
//     })
//   })
