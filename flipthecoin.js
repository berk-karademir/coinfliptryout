let currentAngle = 0;
const angles = [3600, 3420]; 
function flp(element) {
    
    const randomAngle = angles[Math.floor(Math.random() * angles.length)];
    
    currentAngle += randomAngle;
    
    element.querySelector('.flip-coin').style.transform = 'rotateX(' + currentAngle + 'deg)';

    
    document.getElementById('sonuç').innerText = '';

    
    setTimeout(() => {
        function determineResult(angle) {
            
            const angleMod = angle % 360;

            
            if (angleMod === angles[0] % 360) {
                return 'YAZI!';
            } else if (angleMod === angles[1] % 360) {
                return 'TURA!';
            } else {
                return '???';
            }
        }

        
        const sonuç = determineResult(currentAngle);
        document.getElementById('sonuç').innerText = sonuç;
    }, 3500); 
  }



let currentRotation = 0;

function h1() {
  const minAngle = 1700;
  const maxAngle = 1880;
  const randomAngle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;

  currentRotation += randomAngle;
  const rotation = `rotateX(${currentRotation}deg)`;

  document.querySelector('h1').style.transform = rotation;
}

