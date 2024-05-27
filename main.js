function startLoading() {
    console.log("Iniciando carregamento...");
    var now = new Date();
    var currentTime = now.getTime();

    var storedData = JSON.parse(localStorage.getItem('progress'));
    var randomNumbers = [];

    if (storedData && (currentTime - storedData.timestamp < 5 * 60 * 1000)) {
        // Se os dados estiverem armazenados e o tempo desde a última atualização for inferior a 5 minutos
        randomNumbers = storedData.numbers;
    } else {
        // Gera novos números aleatórios para cada barra de progresso
        var progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(function(progressBar) {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            randomNumbers.push(randomNumber);
        });

        // Salva os números aleatórios no localStorage
        localStorage.setItem('progress', JSON.stringify({ timestamp: currentTime, numbers: randomNumbers }));
    }

    var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(progressBar, index) {
        if (randomNumbers.length > 0) {
            // Aqui você pode acessar randomNumbers[index] com segurança
            progressBar.style.width = randomNumbers[index] + "%";

            // Adiciona o elemento de texto para exibir a porcentagem
            var percentageText = document.createElement('span');
            percentageText.textContent = randomNumbers[index] + "%";
            progressBar.appendChild(percentageText);

            // Define a cor da barra de progresso com base no número aleatório
            if (randomNumbers[index] >= 75) {
                progressBar.style.backgroundColor = 'green';
            } else if (randomNumbers[index] >= 50) {
                progressBar.style.backgroundColor = 'yellow';
            } else if (randomNumbers[index] >= 25) {
                progressBar.style.backgroundColor = 'orange';
            } else {
                progressBar.style.backgroundColor = 'red';
            }
        } else {
            // Lógica para lidar com o caso em que randomNumbers está vazio
            console.log("Nenhum número aleatório disponível.");
        }
    });

    var startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.disabled = true;
        // Desabilita o botão após o carregamento
    }
}






// Inicia o carregamento ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Lista de URLs das imagens 
    var imageUrls = [
        "imgs/ratu.jpeg", 
        "imgs/elefante.jpeg", 
        "imgs/elefante2.jpeg", 
        "imgs/apollo.jpeg", 
        "imgs/arvore.jpeg", 
        "imgs/aztec.jpeg", 
        "imgs/bali.jpeg", 
        "imgs/bandito.jpeg", 
        "imgs/battle.jpeg", 
        "imgs/bikine.jpeg", 
        "imgs/bufalo.jpeg", 
        "imgs/butterfly.jpeg", 
        "imgs/caishenwins.jpeg", 
        "imgs/candybananza.jpeg", 
        "imgs/candyburst.jpeg", 
        "imgs/circus.jpeg", 
        "imgs/Cleopatra.jpeg", 
        "imgs/cocktail (1).jpeg", 
        "imgs/crypt.jpeg", 
        "imgs/cryptogold.jpeg", 
        "imgs/dinasty.jpeg", 
        "imgs/dog.jpeg", 
        "imgs/dragonhatch.jpeg", 
        "imgs/dragonlegend.jpeg", 
        "imgs/dragontiger.jpeg", 
        "imgs/dreansmacau.jpeg", 
        "imgs/dublefortune.jpeg", 
        "imgs/egipty.jpeg", 
        "imgs/emojis.jpeg", 
        "imgs/emperiu favor.jpeg", 
        "imgs/farm.jpeg", 
        "imgs/fish.jpeg", 
        "imgs/furtunegods.jpeg", 
        "imgs/galactea.jpeg", 
        "imgs/garuda.jpeg", 
        "imgs/gemsavio.jpeg", 
        "imgs/gemsaviorconquest.jpeg", 
        "imgs/gemsaviorsword.jpeg", 
        "imgs/genius.jpeg", 
        "imgs/go.jpeg", 
        "imgs/heiststacks.jpeg", 
        "imgs/hiphoppanda.jpeg", 
        "imgs/hollowwin.jpeg", 
        "imgs/hoodvswolf.jpeg", 
        "imgs/hotpot.jpeg", 
        "imgs/icefire.jpeg", 
        "imgs/jewels.jpeg", 
        "imgs/jorney.jpeg", 
        "imgs/jungle.jpeg", 
        "imgs/jurassic.jpeg", 
        "imgs/legendofhouyi.jpeg", 
        "imgs/leprechaun.jpeg", 
        "imgs/legendofperceus.jpeg", 
        "imgs/lion.jpeg", 
        "imgs/lockyneke.jpeg", 
        "imgs/luckypig.jpeg", 
        "imgs/majestic.jpeg", 
        "imgs/majong.jpeg", 
        "imgs/majong2.jpeg", 
        "imgs/marmota.jpeg", 
        "imgs/mask.jpeg", 
        "imgs/medusa.jpeg", 
        "imgs/medusapersus.jpeg", 
        "imgs/mermerdriches.jpeg", 
        "imgs/mines.jpeg", 
        "imgs/monkey.jpeg", 
        "imgs/muaithai.jpeg", 
        "imgs/ninjasamurai.jpeg", 
        "imgs/oriental.jpeg", 
        "imgs/penalty.jpeg", 
        "imgs/phoenix.jpeg", 
        "imgs/piggy gold.jpeg", 
        "imgs/pinguim.jpeg", 
        "imgs/pirata.jpeg", 
        "imgs/plushie.jpeg", 
        "imgs/queenofbounty.jpeg", 
        "imgs/reellove.jpeg", 
        "imgs/rooster.jpeg", 
        "imgs/santasgift.jpeg", 
        "imgs/scolar.jpeg", 
        "imgs/shaolin.jpeg", 
        "imgs/speedcar.jpeg", 
        "imgs/spirited.jpeg", 
        "imgs/sunmoon.jpeg", 
        "imgs/Supermarket.jpg", 
        "imgs/sushioishi.jpeg", 
        "imgs/symbolegipty.jpeg", 
        "imgs/thairivers.jpeg", 
        "imgs/thequeen.jpeg", 
        "imgs/threemonkeys.jpeg", 
        "imgs/treefortune.jpeg", 
        "imgs/vampire.jpeg", 
        "imgs/waysoftheqilin.jpeg",
        "imgs/wildbounty.jpeg", 
        "imgs/wildcoasters.jpeg", 
        "imgs/wildfireworks.jpeg", 
        "imgs/winter.jpeg", 
        "imgs/wizdon.jpeg", 
        "imgs/woon.jpeg"
    ];

    // Container onde as imagens serão adicionadas 
    var galleryContainer = document.getElementById('div1');

    // Contador para as barras de progresso 
    var progressBarCount = 0;
    
    var paragrafoCont = 0;
    // Percorre cada URL da imagem 
    // Percorre cada URL da imagem 
imageUrls.forEach(function(url, index) { 
    // Cria o elemento da imagem 
    var imgElement = document.createElement('img'); 
    imgElement.src = url; 
    imgElement.alt = "Foto " + (index + 1);

    // Cria o container da imagem
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Cria o elemento da barra de progresso
    var progressBar = document.createElement('div');
    progressBar.classList.add('progress-container');
    progressBar.innerHTML = '<div class="progress-bar" id="progressBar' + progressBarCount + '"></div>';
    
    /*var paragrafoCont = document.createElement('p');
    paragrafoCont.classList.add('Paragrafo');
    paragrafoCont.innerHTML = '<p> '
    paragrafoCont + "</p>"*/

    // Adiciona a barra de progresso ao container da imagem
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(progressBar);
    /*imageContainer.appendChild(paragrafoCont);*/

    // Adiciona o container da imagem ao container da galeria
    galleryContainer.appendChild(imageContainer);

    // Incrementa o contador das barras de progresso
    progressBarCount++;
    /*paragrafoCont++;*/
});

    // Seleciona todas as divs com a classe 'image-container' 
    var imageContainers = document.querySelectorAll('.image-container');
    var paragrafoCont = document.querySelectorAll('p');
    
    paragrafoCont.forEach(p =>  {
      // Tab to edit
      p.style['margin-top'] = '2px';
      p.style.color = 'white';
      
      
    });

    // Percorre todas as divs selecionadas 
    imageContainers.forEach(function(container) { 
        // Adiciona estilos CSS 
        container.querySelector('.progress-container').style.width = '110px';
        container.querySelector('.progress-container').style['max-width'] = '200px';
        container.querySelector('.progress-container').style.marginLeft = 'auto'; 
        container.querySelector('.progress-container').style.marginRight = 'auto'; 
        
        
    });
    
    startLoading();
});


function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function generateRandomTime() {
    var now = new Date();
    var minutes = now.getMinutes();
    var randomMinutes = Math.floor(Math.random() * 5) + 1;
    var newMinutes = (minutes + randomMinutes) % 60;
    var hours = now.getHours() + Math.floor((minutes + randomMinutes) / 60);
    return hours + ":" + (newMinutes < 10 ? "0" : "") + newMinutes;
}










function updateBars() {
    var normalBar = document.querySelector('.bar.normal .text');
    var turboBar = document.querySelector('.bar.turbo .text');
    var validadeBar = document.querySelector('.bar.validade .text');
    var updateButton = document.getElementById('updateButton');

    // Atualiza os valores das barras
    if (normalBar) {
        var randomNumber = generateRandomNumber();
        normalBar.textContent = "Normal: " + randomNumber + "X";
    }

    if (turboBar) {
        var randomNumber = generateRandomNumber();
        turboBar.textContent = "Turbo: " + randomNumber + "X";
    }

    if (validadeBar) {
        var randomTime = generateRandomTime();
        validadeBar.textContent = "Validade: " + randomTime;
    }

    // Desabilita o botão por 30 segundos após ser clicado
    updateButton.disabled = true;
    updateButton.style.backgroundColor = "grey"; // Define a cor de fundo como cinza
    setTimeout(function() {
        updateButton.disabled = false;
        updateButton.style.backgroundColor = ""; // Remove a cor de fundo
    }, 30000); // 30000 milissegundos = 30 segundos

    // Atualiza o texto do botão com o tempo restante
    var timeLeft = 30; // Tempo restante em segundos
    updateButton.textContent = "Próxima atualização em: " + timeLeft + "s";
    var countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            updateButton.textContent = "Próxima atualização em: " + timeLeft + "s";
        } else {
            clearInterval(countdownInterval);
            updateButton.textContent = "Gerar sinal";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adiciona um evento de clique ao botão para chamar a função updateBars
var updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', function() {
    updateBars();
});








function updateBars1() {
    var normalBar = document.querySelector('.bar.normal1 .text');
    var turboBar = document.querySelector('.bar.turbo1 .text');
    var validadeBar = document.querySelector('.bar.validade1 .text');
    var updateButton1 = document.getElementById('updateButton1');

    // Atualiza os valores das barras
    if (normalBar) {
        var randomNumber = generateRandomNumber();
        normalBar.textContent = "Normal: " + randomNumber + "X";
    }

    if (turboBar) {
        var randomNumber = generateRandomNumber();
        turboBar.textContent = "Turbo: " + randomNumber + "X";
    }

    if (validadeBar) {
        var randomTime = generateRandomTime();
        validadeBar.textContent = "Validade: " + randomTime;
    }

    // Desabilita o botão por 30 segundos após ser clicado
    updateButton1.disabled = true;
    updateButton1.style.backgroundColor = "grey"; // Define a cor de fundo como cinza
    setTimeout(function() {
        updateButton1.disabled = false;
        updateButton1.style.backgroundColor = ""; // Remove a cor de fundo
    }, 30000); // 30000 milissegundos = 30 segundos

    // Atualiza o texto do botão com o tempo restante
    var timeLeft = 30; // Tempo restante em segundos
    updateButton1.textContent = "Próxima atualização em: " + timeLeft + "s";
    var countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            updateButton1.textContent = "Próxima atualização em: " + timeLeft + "s";
        } else {
            clearInterval(countdownInterval);
            updateButton1.textContent = "Gerar sinal";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adiciona um evento de clique ao botão para chamar a função updateBars
var updateButton1 = document.getElementById('updateButton1');
updateButton1.addEventListener('click', function() {
    updateBars1();
});










function updateBars2() {
    var normalBar = document.querySelector('.bar.normal2 .text');
    var turboBar = document.querySelector('.bar.turbo2 .text');
    var validadeBar = document.querySelector('.bar.validade2 .text');
    var updateButton1 = document.getElementById('updateButton2');

    // Atualiza os valores das barras
    if (normalBar) {
        var randomNumber = generateRandomNumber();
        normalBar.textContent = "Normal: " + randomNumber + "X";
    }

    if (turboBar) {
        var randomNumber = generateRandomNumber();
        turboBar.textContent = "Turbo: " + randomNumber + "X";
    }

    if (validadeBar) {
        var randomTime = generateRandomTime();
        validadeBar.textContent = "Validade: " + randomTime;
    }

    // Desabilita o botão por 30 segundos após ser clicado
    updateButton2.disabled = true;
    updateButton2.style.backgroundColor = "grey"; // Define a cor de fundo como cinza
    setTimeout(function() {
        updateButton2.disabled = false;
        updateButton2.style.backgroundColor = ""; // Remove a cor de fundo
    }, 30000); // 30000 milissegundos = 30 segundos

    // Atualiza o texto do botão com o tempo restante
    var timeLeft = 30; // Tempo restante em segundos
    updateButton2.textContent = "Próxima atualização em: " + timeLeft + "s";
    var countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            updateButton2.textContent = "Próxima atualização em: " + timeLeft + "s";
        } else {
            clearInterval(countdownInterval);
            updateButton2.textContent = "Gerar sinal";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adiciona um evento de clique ao botão para chamar a função updateBars
var updateButton2 = document.getElementById('updateButton2');
updateButton2.addEventListener('click', function() {
    updateBars2();
});







function updateBars3() {
    var normalBar = document.querySelector('.bar.normal3 .text');
    var turboBar = document.querySelector('.bar.turbo3 .text');
    var validadeBar = document.querySelector('.bar.validade3 .text');
    var updateButton3 = document.getElementById('updateButton3');

    // Atualiza os valores das barras
    if (normalBar) {
        var randomNumber = generateRandomNumber();
        normalBar.textContent = "Normal: " + randomNumber + "X";
    }

    if (turboBar) {
        var randomNumber = generateRandomNumber();
        turboBar.textContent = "Turbo: " + randomNumber + "X";
    }

    if (validadeBar) {
        var randomTime = generateRandomTime();
        validadeBar.textContent = "Validade: " + randomTime;
    }

    // Desabilita o botão por 30 segundos após ser clicado
    updateButton3.disabled = true;
    updateButton3.style.backgroundColor = "grey"; // Define a cor de fundo como cinza
    setTimeout(function() {
        updateButton3.disabled = false;
        updateButton3.style.backgroundColor = ""; // Remove a cor de fundo
    }, 30000); // 30000 milissegundos = 30 segundos

    // Atualiza o texto do botão com o tempo restante
    var timeLeft = 30; // Tempo restante em segundos
    updateButton3.textContent = "Próxima atualização em: " + timeLeft + "s";
    var countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            updateButton3.textContent = "Próxima atualização em: " + timeLeft + "s";
        } else {
            clearInterval(countdownInterval);
            updateButton3.textContent = "Gerar sinal";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adiciona um evento de clique ao botão para chamar a função updateBars
var updateButton3 = document.getElementById('updateButton3');
updateButton3.addEventListener('click', function() {
    updateBars3();
});







function updateBars4() {
    var normalBar = document.querySelector('.bar.normal4 .text');
    var turboBar = document.querySelector('.bar.turbo4 .text');
    var validadeBar = document.querySelector('.bar.validade4 .text');
    var updateButton4 = document.getElementById('updateButton4');

    // Atualiza os valores das barras
    if (normalBar) {
        var randomNumber = generateRandomNumber();
        normalBar.textContent = "Normal: " + randomNumber + "X";
    }

    if (turboBar) {
        var randomNumber = generateRandomNumber();
        turboBar.textContent = "Turbo: " + randomNumber + "X";
    }

    if (validadeBar) {
        var randomTime = generateRandomTime();
        validadeBar.textContent = "Validade: " + randomTime;
    }

    // Desabilita o botão por 30 segundos após ser clicado
    updateButton4.disabled = true;
    updateButton4.style.backgroundColor = "grey"; // Define a cor de fundo como cinza
    setTimeout(function() {
        updateButton4.disabled = false;
        updateButton4.style.backgroundColor = ""; // Remove a cor de fundo
    }, 30000); // 30000 milissegundos = 30 segundos

    // Atualiza o texto do botão com o tempo restante
    var timeLeft = 30; // Tempo restante em segundos
    updateButton4.textContent = "Próxima atualização em: " + timeLeft + "s";
    var countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            updateButton4.textContent = "Próxima atualização em: " + timeLeft + "s";
        } else {
            clearInterval(countdownInterval);
            updateButton4.textContent = "Gerar sinal";
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adiciona um evento de clique ao botão para chamar a função updateBars
var updateButton4 = document.getElementById('updateButton4');
updateButton4.addEventListener('click', function() {
    updateBars4();
});


