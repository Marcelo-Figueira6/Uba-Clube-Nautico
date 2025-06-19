document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
    const bookingForm = document.getElementById('booking-form');
    const selectedEventIdInput = document.getElementById('selected-event-id');
    const activityDisplayInput = document.getElementById('activity-display');
    const submitButton = bookingForm.querySelector('.btn-submit-booking');
    const bookingMessageDiv = document.getElementById('booking-message');

    let selectedEventElement = null;

    if (eventList) {
        eventList.addEventListener('click', (e) => {
            const button = e.target.closest('.btn-select-event');
            if (!button) return; 
            const eventItem = button.closest('.event-item');
            if (!eventItem) return;

            const eventId = eventItem.dataset.eventId;
            const eventName = eventItem.dataset.eventName;

            if (selectedEventElement) {
                selectedEventElement.classList.remove('selected');
                const prevButton = selectedEventElement.querySelector('.btn-select-event');
                if (prevButton) prevButton.textContent = 'Selecionar';
            }

            eventItem.classList.add('selected');
            button.textContent = 'Selecionado';
            selectedEventElement = eventItem;

            if (selectedEventIdInput) selectedEventIdInput.value = eventId;
            if (activityDisplayInput) activityDisplayInput.value = eventName;
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Solicitar Agendamento';
            }

            if (bookingForm) {
                bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            if (!selectedEventIdInput.value) {
                displayBookingMessage('Por favor, selecione uma atividade primeiro.', 'error');
                return;
            }

            console.log('Form submitted (simulated):');
            const formData = new FormData(bookingForm);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            displayBookingMessage('Sua solicitação de agendamento foi enviada com sucesso! Entraremos em contato em breve para confirmação.', 'success');
   
        });
    }

    function displayBookingMessage(message, type) {
        if (bookingMessageDiv) {
            bookingMessageDiv.textContent = message;
            bookingMessageDiv.className = `booking-message ${type}`;
            bookingMessageDiv.style.display = 'block';

        }
    }
});
