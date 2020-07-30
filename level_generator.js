var generateLevel = [];

generateLevel[1]= function(){
    backgroundgraphic=document.getElementById('level1background');
    backgroundmusic.pause();
	backgroundmusic.src = 'snd/level1music.m4a';
	backgroundmusic.play();

    for (i = 0; i < 8; i++) {
        aliens[i] = new alien_obj(i * 140,20, "green", 30,75, 1);
    }

    gameInterval = setInterval(gameLoop, 30);
};



generateLevel[2]= function() {

    backgroundgraphic = document.getElementById('level2background');
    backgroundmusic.pause();
    backgroundmusic.src = 'snd/level2music.m4a';
    backgroundmusic.play()

    for (i = 0; i < 4;  i++) {
        color_name = randomColor();
        size = 50;
        horizontal_distance = 300;
        vertical_distance = 1;
        aliens[aliens.length] = new triangle_obj(i * 180 + 80 ,0, color_name, size, horizontal_distance , vertical_distance);
    }
    secondwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        horizontal_distance = randomNumber(25,300);
        vertical_distance = randomNumber(2,3);
        for (i = 0; i < 5 ; i++) {
            aliens[aliens.length] = new triangle_obj(i * 120 ,-250, color_name, size, 300 , 3);
        }
    }, 1000);

    thirdwaveInterval = setTimeout(function() {
        size = randomNumber(50,60);
        flower_count = 1;
        for (i = 0; i < flower_count; i = i + 1) {
            color_name = randomColor();
            aliens[aliens.length] = new flower_obj(gamescreenwidth/2, -120, color_name, size);
        }
    }, 4000);

    gameInterval = setInterval(gameLoop, 30);
};

generateLevel[3]=function() {

    backgroundgraphic = document.getElementById('level3background');
    backgroundmusic.pause();
    backgroundmusic.src = 'snd/level3music.m4a';
    backgroundmusic.play();

    for (i = 0; i < 5 ;  i++) {
        color_name = randomColor();
        size = randomNumber(35,79);
        horizontal_distance = randomNumber(50,200);
        vertical_distance = randomNumber(5,10);
        aliens[aliens.length] = new alien_obj(i * 120 + 80 ,20, color_name, size, horizontal_distance , vertical_distance);
    }

    secondwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        for (i = 0; i < 3 ; i++) {
            aliens[aliens.length] = new triangle_obj(i * 120 ,-200, color_name, size, 10 , 3);
        }
    }, 1000);

    thirdwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        for (i = 0; i < 6 ; i++) {
            aliens[aliens.length] = new triangle_obj(800 - i * 120 ,-300, color_name, size, 200, 5);
        }
    }, 2000);

    gameInterval = setInterval(gameLoop, 30);
}

generateLevel[4]=function() {

    backgroundgraphic = document.getElementById('level4background');
    backgroundmusic.pause();
    backgroundmusic.src = 'snd/level4music.m4a';
    backgroundmusic.play();

    for (i = 0; i < 3 ;  i++) {
        color_name = randomColor();
        size = randomNumber(35,79);
        horizontal_distance = randomNumber(50,400);
        vertical_distance = randomNumber(5,8);
        aliens[aliens.length] = new chocolatecake_obj(i * 120 + 80 ,20, color_name, size, horizontal_distance , vertical_distance);
    }

    secondwaveInterval = setTimeout (function() {
        size = 30;
        color_name = randomColor();
        for (i = 0; i < 5 ; i++) {
            aliens[aliens.length] = new triangle_obj(700 - i * 120 ,-100, color_name, size, 15 , 4);
        }
    }, 1000);

    thirdwaveInterval = setTimeout (function() {
        size = 50;
        color_name = randomColor();
        for (i = 0; i < 5 ; i++) {
            aliens[aliens.length] = new flower_obj(800 - i * 120 ,-200, color_name, size, 10 , 5);
        }
    }, 8000);

    gameInterval = setInterval(gameLoop, 30);
}

generateLevel[5] = function(){
    aliens[aliens.length]=new boss_obj();
    gameInterval = setInterval(gameLoop, 30);
}
