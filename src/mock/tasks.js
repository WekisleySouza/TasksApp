function generateId() {
    return Math.floor(Math.random() * 10000);
}

export default [
    {
        id: generateId(),
        title: "Comprar mantimentos",
        description: "Comprar frutas, vegetais e leite",
        createdAt: new Date('2024-08-18T09:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Estudar JavaScript",
        description: "Completar os exercícios sobre arrays e objetos",
        createdAt: new Date('2024-08-18T10:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Reunião de trabalho",
        description: "Reunião semanal com a equipe de desenvolvimento",
        createdAt: new Date('2024-08-18T11:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Limpar a casa",
        description: "Aspirar o chão e limpar os móveis",
        createdAt: new Date('2024-08-18T12:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Responder emails",
        description: "Responder emails pendentes do trabalho",
        createdAt: new Date('2024-08-18T13:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Planejar viagem",
        description: "Pesquisar hotéis e reservar passagens para as férias",
        createdAt: new Date('2024-08-18T14:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Fazer exercício",
        description: "Caminhar no parque por 30 minutos",
        createdAt: new Date('2024-08-18T15:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Preparar jantar",
        description: "Cozinhar uma refeição saudável para o jantar",
        createdAt: new Date('2024-08-18T16:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Estudar inglês",
        description: "Revisar gramática e praticar conversação",
        createdAt: new Date('2024-08-18T17:00:00'),
        doneAt: null
    },
    {
        id: generateId(),
        title: "Ler um livro",
        description: "Continuar a leitura do livro 'Clean Code'",
        createdAt: new Date('2024-08-18T18:00:00'),
        doneAt: null
    }
];
