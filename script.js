const flashcardContainer = document.getElementById('flashcard-container');
const cardFront = flashcardContainer.querySelector('.card-front');
const cardBack = flashcardContainer.querySelector('.card-back');
const prevButton = document.getElementById('prev-card');
const nextButton = document.getElementById('next-card');

// --- SEUS FLASHCARDS AQUI ---
// Você pode adicionar quantos flashcards quiser neste array!
const flashcards = [
    { front: 'Qual a capital da França?', back: 'Paris' },
    { front: 'Quem escreveu "Dom Casmurro"?', back: 'Machado de Assis' },
    { front: 'Qual o símbolo químico da água?', back: 'H₂O' },
    { front: 'Em que ano o Brasil foi descoberto?', back: '1500' },
    { front: 'Qual o maior planeta do nosso sistema solar?', back: 'Júpiter' },
    { front: 'O que significa HTML?', back: 'HyperText Markup Language' }
];

let currentCardIndex = 0;

// Função para atualizar o conteúdo do flashcard
function updateCardContent() {
    // Garante que o flashcard esteja na posição inicial (não virado) ao mudar o conteúdo
    flashcardContainer.classList.remove('flipped');
    // Esconde a resposta até que o flashcard seja virado
    cardBack.classList.add('hidden');

    cardFront.textContent = flashcards[currentCardIndex].front;
    cardBack.textContent = flashcards[currentCardIndex].back;
}

// Evento de clique para virar o flashcard
flashcardContainer.addEventListener('click', () => {
    flashcardContainer.classList.toggle('flipped');
    // Alterna a visibilidade da resposta
    if (flashcardContainer.classList.contains('flipped')) {
        cardBack.classList.remove('hidden');
    } else {
        cardBack.classList.add('hidden');
    }
});

// Evento de clique para o botão "Anterior"
prevButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no botão vire o card
    currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
    updateCardContent();
});

// Evento de clique para o botão "Próximo"
nextButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no botão vire o card
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    updateCardContent();
});

// Inicializa o primeiro flashcard ao carregar a página
updateCardContent();