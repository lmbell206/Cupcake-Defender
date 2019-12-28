var generateLevel = [];
generateLevel[2]= function() {

    backgroundgraphic = document.getElementById('level2background');

    for (i = 0; i < 4;  i++) {
        color_name = randomColor();
        size = randomNumber(35,79);
        horizontal_distance = randomNumber(25,300);
        vertical_distance = randomNumber(3,5);
        aliens[aliens.length] = new alien_obj(i * 120 + 80 ,40, color_name, size, horizontal_distance , vertical_distance);
    }

    thirdwaveInterval = setTimeout(function() {
        size = randomNumber(50,60);
        flower_count = 1;
        for (i = 0; i < flower_count; i = i + 1) {
            color_name = randomColor();
            aliens[aliens.length] = new flower_obj(gamescreenwidth-100, 20, color_name, size);
        }
    }, 6000);

    gameInterval = setInterval(gameLoop, 30);
};

generateLevel[3]=function() {

    backgroundgraphic = document.getElementById('level3background');

    for (i = 0; i < 5 ;  i++) {
        color_name = randomColor();
        size = randomNumber(35,79);
        horizontal_distance = randomNumber(50,200);
        vertical_distance = randomNumber(5,10);
        aliens[aliens.length] = new alien_obj(i * 120 + 80 ,40, color_name, size, horizontal_distance , vertical_distance);
    }

    secondwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        for (i = 0; i < 3 ; i++) {
            aliens[aliens.length] = new triangle_obj(800 - i * 120 ,2, color_name, size, 10 , 3);
        }
    }, 4000);

    thirdwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        for (i = 0; i < 3 ; i++) {
            aliens[aliens.length] = new triangle_obj(800 - i * 120 ,2, color_name, size, 30 , 3);
        }
    }, 4000);

    gameInterval = setInterval(gameLoop, 30);
}

generateLevel[4]=function() {

    backgroundgraphic = document.getElementById('level4background');

    for (i = 0; i < 5 ;  i++) {
        color_name = randomColor();
        size = randomNumber(35,79);
        horizontal_distance = randomNumber(50,200);
        vertical_distance = randomNumber(5,10);
        aliens[aliens.length] = new chocolatecake_obj(i * 120 + 80 ,40, color_name, size, horizontal_distance , vertical_distance);
    }

    secondwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        for (i = 0; i < 5 ; i++) {
            aliens[aliens.length] = new triangle_obj(700 - i * 120 ,2, color_name, size, 15 , 8);
        }
    }, 8000);

    thirdwaveInterval = setTimeout (function() {
        size = 50;
        color_name = randomColor();
        for (i = 0; i < 5 ; i++) {
            aliens[aliens.length] = new flower_obj(800 - i * 120 ,2, color_name, size, 10 , 5);
        }
    }, 8000);

    gameInterval = setInterval(gameLoop, 30);
}
