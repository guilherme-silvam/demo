document.addEventListener('DOMContentLoaded', function () {
    // Data de lançamento fixa (30 de janeiro de 2025)
    const launchDate = new Date('2025-01-30T00:00:00');

    // Data de início fixa (25 de novembro de 2024 às 11:43)
    const startDate = new Date('2024-11-25T11:43:00');
    
    // Função para atualizar o relógio
    function updateClock() {
        const now = new Date();
        const timeRemaining = launchDate - now;

        if (timeRemaining <= 0) {
            document.getElementById('clock').textContent = 'The website is now live!🚢';
            clearInterval(clockInterval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Exibe a contagem regressiva no formato "xd xxh xxm xxs"
        document.getElementById('clock').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Atualiza o relógio a cada segundo
    const clockInterval = setInterval(updateClock, 1000);

    // Inicializa o relógio imediatamente
    updateClock();
});