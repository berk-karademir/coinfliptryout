let currentRotation = 0;
function headingFlip() {
  const minAngle = 2600;
  const maxAngle = 2780;
  const randomAngle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;

  currentRotation += randomAngle;
  const rotation = `rotateX(${currentRotation}deg)`;

  document.querySelector('.heading-span').style.transform = rotation;
}

let currentAngle = 0;
const angles = [3600, 3420]; 
let headsCount = 0;
let tailsCount = 0;

function flp(element) {
    const randomAngle = angles[Math.floor(Math.random() * angles.length)];
    currentAngle += randomAngle;
    element.querySelector('.flip-coin').style.transform = 'rotateX(' + currentAngle + 'deg)';
    document.getElementById('result').innerText = '';

    setTimeout(() => {
        function determineResult(angle) {
            const angleMod = angle % 360;
            if (angleMod === angles[0] % 360) {
                return 'TAILS!';
            } else if (angleMod === angles[1] % 360) {
                return 'HEADS!';
            } else {
                return '???';
            }
        }

        const result = determineResult(currentAngle);
        document.getElementById('result').innerText = result;

        if (result === 'HEADS!') {
            headsCount++;
            document.getElementById('heads').innerText = `heads: ${headsCount}`;
        } else if (result === 'TAILS!') {
            tailsCount++;
            document.getElementById('tails').innerText = `tails: ${tailsCount}`;
        }
    }, 3500); 
}

function resetCounter() {
    headsCount = 0;
    tailsCount = 0;
    document.getElementById('heads').innerText = 'heads: 0';
    document.getElementById('tails').innerText = 'tails: 0';
}
