const INF = Infinity;
let dist = [];
let size = 0;
let k = 0;
let changedCells = [];

function generateMatrixInput() {
    document.getElementById('message-text').textContent = 'Please enter the cost matrix';

    size = parseInt(document.getElementById('node-count').value);
    const area = document.getElementById('matrix-input-area');
    area.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = (i === j) ? '0' : '∞';
            input.id = `cell-${i}-${j}`;
            rowDiv.appendChild(input);
        }
        area.appendChild(rowDiv);
    }
}

function startSimulation() {
    document.getElementById('message-text').textContent = 'No updates yet. Click "Next Step" to begin.';

    dist = [];
    k = 0;

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const val = document.getElementById(`cell-${i}-${j}`).value;
            if (val === '∞') row.push(INF);
            else row.push(parseInt(val));
        }
        dist.push(row);
    }

    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.controls').style.display = 'block';

    renderMatrix();
}

function nextStep() {
    if (k >= size) {
        changedCells = [];
        renderMatrix();
        document.getElementById('message-text').textContent = 'All steps completed.';
        return;
    }

    changedCells = [];
    let messages = [];

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (dist[i][k] !== INF && dist[k][j] !== INF) {
                let newDist = dist[i][k] + dist[k][j];
                if (newDist < dist[i][j]) {
                    messages.push(`dist[${i}][${j}] updated from ${dist[i][j] === INF ? '∞' : dist[i][j]} to ${newDist} using path ${i} → ${k} → ${j}`);
                    dist[i][j] = newDist;
                    changedCells.push(`${i}-${j}`);
                }
            }
        }
    }

    if (messages.length === 0) {
        document.getElementById('message-text').textContent = `Node ${k} used as intermediate. No updates this round.`;
    } else {
        document.getElementById('message-text').innerHTML = `Node ${k} used as intermediate.<br><br>${messages.join('<br><br>')}`;
    }

    k++;
    renderMatrix();
}

function reset() {
    dist = [];
    k = 0;
    changedCells = [];
    document.getElementById('matrix-container').innerHTML = '';
    document.getElementById('matrix-input-area').innerHTML = '';
    document.getElementById('message-text').textContent = 'Please enter number of nodes';

    document.querySelector('.input-section').style.display = 'block';
    document.querySelector('.controls').style.display = 'none';
}

function renderMatrix() {
    const container = document.getElementById('matrix-container');
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'matrix-row';

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            if (changedCells.includes(`${i}-${j}`)) {
                cell.classList.add('updated');
            }

            cell.textContent = (dist[i][j] === INF) ? '∞' : dist[i][j];
            rowDiv.appendChild(cell);
        }

        container.appendChild(rowDiv);
    }
}
