let imgdata0 = {
    photo: 'images/BEA_0005.png',
};

let imgdata1 = {
    photo: 'images/BEA_0008.png',
};

let imgdata2 = {
    photo: 'images/BEA_0017.png',
};

let imgdata3 = {
    photo: 'images/BEA_0027.png',
};

let imgdata4 = {
    photo: 'images/BEA_0036.png',
};

let imgdata5 = {
    photo: 'images/BEA_0046.png',
};

let imgdata6 = {
    photo: 'images/BEA_0050.png',
};

let imgdata7 = {
    photo: 'images/BEA_0052.png',
};

let imgdata8 = {
    photo: 'images/BEA_0064.png',
};

let imgdata9 = {
    photo: 'images/BEA_0065.png',
};

let imgdata10 = {
    photo: 'images/BEA_9965v.png',
};

let imgdata11 = {
    photo: 'images/BEA_9972.png',
};

let imgdata12 = {
    photo: 'images/BEA_9992.png',
};

let imgdata13 = {
    photo: 'images/BEA_2021_1.png',
 };

let imgdata14 = {
    photo: 'images/BEA_2021_2.png',
};
let currentPhoto = 0;
let imagesData = [imgdata0, imgdata1, imgdata2, imgdata3, imgdata4, imgdata5, imgdata6, imgdata7, imgdata8, imgdata9, imgdata10, imgdata11, imgdata12, imgdata13, imgdata14];

imagesData.forEach((arrayNumber, index) => {
    $('#thumbs').append(`<div class="thumb" data-index=${index}></div>`);
    $('.thumb:last-of-type').css(`background-image`, `url(./${arrayNumber.photo})`);
    $('.thumb:last-of-type').append(`<div class="tooltip" data-index=${index}></div>`);
    $(`.tooltip[data-index=${index}]`).text(imagesData[index].title);
});

function loadImage(imgNumber) {
    $('#image').attr('src', imagesData[imgNumber].photo);
    $(`.thumb[data-index=${imgNumber}]`).toggleClass(`thumbActive`);
    $(`.thumbActive[data-index != ${imgNumber}]`).toggleClass('thumbActive');
};

loadImage(currentPhoto);

$('#rightButton').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++; 
    } else {
        currentPhoto = 0;
    }
    loadImage(currentPhoto); 
});

$('#leftButton').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;    
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadImage(currentPhoto);
});

$('.thumb').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);  
    if (currentPhoto != numberIndex) {
        loadImage(numberIndex);
        currentPhoto = numberIndex;
    };
});
