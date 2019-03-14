const arrayImages = [
    'https://ae01.alicdn.com/kf/HTB1f9LMhU1HTKJjSZFmq6xeYFXaj/Art-guy-MAG-Natsu-Dragneel-fairy-tail-anime-Living-room-home-art-decor-wood-frame-fabric.jpg_640x640.jpg',
    'https://www.escapefromtarkov.com/uploads/content/news/content_thumb_22578373032ee61704432f5eae87c611.jpg',
    'https://cdns.kinguin.net/media/category/e/s/escape_from_tarkov_the_forest_level_alpha_15_1515683983.jpg',
    'https://gocdkeys.com/images/captures/escape-from-tarkov-pc-cd-key-3.jpg',
    'https://i.kinja-img.com/gawker-media/image/upload/s--GclG9Pco--/c_scale,f_auto,fl_progressive,q_80,w_800/u0newnh1y0k9nglqbo49.jpg',
    'https://cdn.wccftech.com/wp-content/uploads/2018/12/eft_killa_art-2060x1158.jpg'
];

const imgRandom = () => {
    const number = Math.floor((Math.random() * 6));
    const contentImg = document.getElementById('my-image');
    
    contentImg.src = arrayImages[number];
};
