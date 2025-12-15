export function initRoadmap () {

    
function createRoadmap() {
    const allSquares = [];
    const lines = document.querySelectorAll('.line');
    
    lines.forEach((line, lineIndex) => {
        const path = line.querySelector('.flow');
        const squaresGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        squaresGroup.classList.add('squares-group');
        
        const totalLength = path.getTotalLength();
        const step = totalLength / 70;
        const fragment = document.createDocumentFragment();

        // const lineSettings = [
        //     { pulseSpeed: 2, pulsePhase: 0 },
        //     { pulseSpeed: 3, pulsePhase: 0.3 },
        //     { pulseSpeed: 4, pulsePhase: 0.6 },
        // ];
        
        for (let i = 0; i < totalLength; i += step) {
            try {
                const point = path.getPointAtLength(i);
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                
                square.setAttribute('x', point.x - 0.5);
                square.setAttribute('y', point.y - 0.5);
                square.setAttribute('width', '1');
                square.setAttribute('height', '1');
                square.setAttribute('fill', path.getAttribute('stroke'));
                square.classList.add('square');

                allSquares.push({
                    element: square,
                    path: path,
                    initialProgress: i / totalLength,
                    pathTotalLength: totalLength
                });
                
                fragment.appendChild(square);
            } catch (e) {
                console.log('Point outside path:', e);
            }
        }
        
        squaresGroup.appendChild(fragment);
        line.appendChild(squaresGroup);
        path.style.opacity = '0';
    });
    
    return allSquares;
}

function startFlowAnimation(squares) {
    function animate(timestamp) {
        const time = timestamp * 0.001;
        const speed = 0.01;
        
        for (let i = 0, len = squares.length; i < len; i++) {
            const square = squares[i];
            const progress = (square.initialProgress + time * speed) % 1;
            const newPoint = square.path.getPointAtLength(progress * square.pathTotalLength);
            
            const pulse = 0.8 + Math.sin(time * 2 + i * 0.1) * 0.4;
            const size = 1 * pulse;
            const offset = size / 2;
            
            square.element.setAttribute('x', newPoint.x - offset);
            square.element.setAttribute('y', newPoint.y - offset);
            square.element.setAttribute('width', size);
            square.element.setAttribute('height', size);
        }
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
}

const squares = createRoadmap();
startFlowAnimation(squares);


}
