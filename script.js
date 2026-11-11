
        // area of triangles
        function solve(){
            let height=document.getElementById('height').value
            let base = document.getElementById('base').value;
            let displayArea=document.getElementById('display')
              let areaOfTriangle= 0.5*base*height;
            displayArea.innerHTML = `<p>${areaOfTriangle} </p>`;
           document.getElementById(areaOfTriangle).value;

        
        }
        
        // area of  square
        function solve(){
            let length=document.getElementById('length').value
             let displayArea=document.getElementById('display-square')
            let areaOfSquare= length*length;
          displayArea.innerHTML = `<p>${areaOfSquare}</p>`;
           document.getElementById(areaOfSquare).value
        }
        // area of circle
        function solve(){
            let radius=document.getElementById('radius').value;
            let pi = 3.142;
            let areaOfCircle =pi*radius*radius;
             let displayArea=document.getElementById('display-circle')
             displayArea.innerHTML = `<p>${areaOfCircle}</p>`;
            document.getElementById(areaOfCircle).value
        }
    //  Area of a quadrilateral
    function solve(){
            let d=document.getElementById('d').value
            let h1= document.getElementById('h1').value;
            let h2 = document.getElementById('h2').value;

            let displayArea=document.getElementById('displayQuadrilateral');
              let areaOfQuadrilateral= 0.5*(d*h1+ d*h2);
            displayArea.innerHTML = `<p>${areaOfQuadrilateral} </p>`;
           document.getElementById(areaOfQuadrilateral).value;
        
        }
// Area of a rhombus
      function solve(){
            let d1=document.getElementById('d1').value
            let d2 = document.getElementById('d2').value;
            let displayArea=document.getElementById('display')
              let areaofRhombus= 0.5*d1*d2;
            displayArea.innerHTML = `<p>${areaOfRhombus} </p>`;
           document.getElementById(areaofRhombus).value;
           }


//    Area of Trapezium
function solve(){
            let a =document.getElementById('a').value
            let h=document.getElementById('h').value
            let b = document.getElementById('b').value;
            let displayArea=document.getElementById('displayTrapezium')
              let areaOfTrapezium= 0.5*( a + base)*height;
            displayArea.innerHTML = `<p>${areaOfTrapezium} </p>`;
           document.getElementById(areaOfTrapezium).value;
        }
               
//    Area of a parallelogram
        function solve(){
            let paraH=document.getElementById('paraH').value
            let paraB = document.getElementById('paraB').value;
            let displayArea=document.getElementById('displayParallelogram')
              let areaOfParallelogram= paraB*paraH;
            displayArea.innerHTML = `<p>${areaOfParallelogram} </p>`;
           document.getElementById(areaOfParallelogram).value;

        
        }

     Area= base*height
     console.log( 'Area of a parallelogram ='  + base*height);
    //  BODY MASS INDEX(BMI)
        function solve(){
            let bodyH=document.getElementById('bodyH').value
            let weight= document.getElementById('weight').value;
            let displayArea=document.getElementById('displayBmi')
              let areaOfParallelogram= weight/(bodyH**2);
            displayArea.innerHTML = `<p>${areaOfParallelogram} </p>`;
           document.getElementById(areaOfParallelogram).value;

        }