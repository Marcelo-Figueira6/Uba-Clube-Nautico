document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); 

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                showStatusMessage("Por favor, preencha todos os campos obrigatórios.", "error");
                return;
            }

            showStatusMessage("Enviando mensagem...", "loading");

            setTimeout(() => {
                showStatusMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success");
                form.reset(); 
            }, 1500);
        });
    }

    function showStatusMessage(message, type) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.className = type; 

            if (type !== 'loading') {
                setTimeout(() => {
                    formStatus.textContent = "";
                    formStatus.className = "";
                }, 5000);
            }
        }
    }
});

