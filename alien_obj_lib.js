// this library contains objects to be added to the aliens{} array.
//  they include variables for location and movement tracking
//  they also include functions for drawing and movement logic



//BASIC ALIEN OBJECT
//SQUARE THAT MOVES BACK AND FORTH AND THEN DOWN


var fastcupcake = document.getElementById('fast_cupcake_graphic');
var slowcupcake = document.getElementById('slow_cupcake_graphic');


function alien_obj(x,y,color,size, horizontal_distance, vertical_distance) {
	this.id = "alien";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.horizontal_distance = horizontal_distance;
	this.vertical_distance = vertical_distance;
	this.horizontal_speed = 3;
	this.vertical_speed = 5;
	this.lcount = 0;
	this.rcount = 0;
	this.dcount = 0;
	this.sizetarget = size;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		} else if (this.lcount < this.horizontal_distance) {
			this.x = this.x - this.horizontal_speed;
			this.lcount = this.lcount + 1;
		} else if (this.dcount < this.vertical_distance) {
			this.y = this.y + this.vertical_speed;
			this.dcount= this.dcount + 1;
		} else if (this.rcount < this.horizontal_distance) {
			this.x = this.x + this.horizontal_speed;
			this.rcount = this.rcount + 1;
		} else if (this.dcount < this.vertical_distance + 5) {
			this.y = this.y + this.vertical_speed;
			this.dcount = this.dcount + 1;
		} else {
			this.lcount = 0;
			this.rcount = 0;
			this.dcount = 0;
		}
		if (this.x < 0) {
			this.x = 0;
			this.rcount = 0;
			this.lcount = this.horizontal_distance;
		}
		if (this.x > 960 - this.size) {
			this.x = 960 - this.size;
			this.lcount = 0;
			this.rcount = this.horizontal_distance;
		}
	};
	this.draw = function() {
		ctx.drawImage(fastcupcake, this.x , this.y , this.size , this.size)
	};
}

//TRIANGLE OBJECT
//MOVES DOWN AT AN ANGLE BACK AND FORTH
function triangle_obj(x,y,color,size, horizontal_distance, vertical_distance) {
	this.id = "triangle";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.horizontal_distance = horizontal_distance;
	this.vertical_distance = vertical_distance;
	this.horizontal_speed = 2;
	this.vertical_speed = 1;
	this.lcount = 0;
	this.rcount = 0;
	this.dcount = 0;
	this.sizetarget = size;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		}
		if (this.lcount < this.horizontal_distance) {
			this.x = this.x - this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.lcount = this.lcount + 1;
		} else if (this.rcount < this.horizontal_distance) {
			this.x = this.x + this.horizontal_speed;
			this.y = this.y + this.vertical_speed;
			this.rcount = this.rcount + 1;
		} else {
			this.lcount = 0;
			this.rcount = 0;
			this.dcount = 0;
		}
		if (this.x < 0) {
			this.x = 0;
			this.rcount = 0;
			this.lcount = this.horizontal_distance;
		}
		if (this.x > 960 - this.size) {
			this.x = 960 - this.size;
			this.lcount = 0;
			this.rcount = this.horizontal_distance;
		}
	};
	this.draw = function() {


		ctx.drawImage(slowcupcake, this.x , this.y , this.size , this.size)
	};
}


// FLOWER OBJECT
//  MOVES STRAIGHT DOWN SLOWLY
//  INCREASES IN SIZE OVER TIME
function flower_obj(x,y,color,size) {
	this.id = "flower";
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = 0;
	this.dcount = 0;
	this.sizetarget = size;

	this.move = function(){
		if (this.size < this.sizetarget) {
			this.size = this.size + 1;
		}
		if (this.dcount < 5) {
			this.y = this.y + 6;
			this.size = this.size + 2;
		}
		this.dcount = this.dcount + 1;
		if (this.dcount > 45) {
			this.dcount = 0;
		}

	};
	this.draw = function() {
		ctx.beginPath();
		ctx.lineWidth = "10px";
		ctx.strokeStyle = "black";
		color = randomColor();
		ctx.fillStyle=color;
		ctx.fillRect( this.x + (this.size * 3)/8 , this.y + (this.size * 2)/8 , (this.size * 1) / 8 , (this.size * 1) /8 );
		ctx.fillRect( this.x + (this.size * 1)/8 , this.y + (this.size * 3)/8 , (this.size * 5) / 8 , (this.size * 1) /8 );
		ctx.fillRect( this.x + (this.size * 2)/8 , this.y + (this.size * 4)/8 , (this.size * 3) / 8 , (this.size * 1) /8 );
		ctx.fillRect( this.x + (this.size * 1)/8 , this.y + (this.size * 5)/8 , (this.size * 5) / 8 , (this.size * 1) /8 );
		ctx.fillRect( this.x + (this.size * 2)/8 , this.y + (this.size * 6)/8 , (this.size * 1) / 8 , (this.size * 1) /8 );
		ctx.fillRect( this.x + (this.size * 4)/8 , this.y + (this.size * 6)/8 , (this.size * 1) / 8 , (this.size * 1) /8 );
		ctx.stroke();
	};

}
