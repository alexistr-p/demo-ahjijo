document.addEventListener('DOMContentLoaded', () => {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const currentItem = trigger.parentElement;
            const isOpen = currentItem.classList.contains('active');

            // Cierra las demás preguntas para mantener una vista limpia (Opcional)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-trigger');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Si no estaba abierta, la abre
            if (!isOpen) {
                currentItem.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
});