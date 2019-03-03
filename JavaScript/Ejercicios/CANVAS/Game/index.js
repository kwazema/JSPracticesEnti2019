


const draw = () => {


    const canvas = document.getElementById('canvas');

    if (canvas.getContext) { // Que hace y que significa?
        const ctx = canvas.getContext('2d');

        //-------- Init var Rectangle ----------//

        angle = Math.random() * 360, // start angle (for HSL)
        angleDlt = 60, // 60° ahead
        step = 1; // "speed" for change



        //------- Declare Functions ----------//

        function createGradient() {
            var gr = ctx.createLinearGradient(0, 0, 500, 0);               // create gradient
            gr.addColorStop(0, "hsl(" + (angle % 360) + ",100%, 50%)");    // start color
            gr.addColorStop(0.5, "hsl(" + ((angle + (angleDlt/2)) % 360) + ",100%, 50%)");
            gr.addColorStop(1, "hsl(" + ((angle + angleDlt) % 360) + ",100%, 50%)");
            ctx.fillStyle = gr;                                            // set as fill style
            ctx.fillRect(0, 0, 500, 150);                                  // fill area
        }

        const drawInformation = () => {
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(10, 120, 50, 50);
            //ctx.arc(20, 20, 50,)
        
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(30, 30, 50, 50);
        
        }

        
        //------------ Init Circle --------------//

        let posX = Math.random() * (innerWidth - 150);
        let posY  = Math.random() * (innerHeight - 150);
        let velocityX = Math.random() * 100;
        let velocityY = Math.random() * 100;
        let radius = 30;

        class Circle {
            constructor(posX, posY) {
                this.posX = posX;
                this.posY = posY;
            };

            draw() {
                console.log("Pintar");

                ctx.beginPath();
                ctx.arc(this.posX, this.posY, 30, 0, Math.PI * 2);
                ctx.stroke();
            };
        }

        const circle = new Circle(200, 200);
        

        const animateCircles = () => {
            requestAnimationFrame(animateCircles);

            ctx.clearRect(0, 0, innerWidth, innerHeight);

            circle.draw();

            ctx.beginPath();
            ctx.arc(posX, posY, radius, 0, Math.PI * 2);
            ctx.stroke();

            if (posX + (radius + 38) > innerWidth || posX - radius <= 0)
            {
                velocityX = -velocityX;
            }

            if (posY + radius > innerHeight || posY - radius <= 0)
            {
                velocityY = -velocityY;
            }

            posX += velocityX;
            posY += velocityY;
        };
        animateCircles();

        // Loop for ever!
        const animateRectangle = () => {
            requestAnimationFrame(animateRectangle) // Funcion que se llama a si misma a cada freme


            createGradient();
            ctx.clearRect(8,8,484,134);
            angle += step;                                               // increase angles
            
            drawInformation();
        };
        animateRectangle();
    }
};

draw();
