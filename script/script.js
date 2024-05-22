document.addEventListener("DOMContentLoaded", function() {
    let dragged;

    document.querySelectorAll('.product__detail-card').forEach(card => {
        card.setAttribute('draggable', true);

        card.addEventListener('dragstart', function(event) {
            dragged = event.target;
            event.target.style.opacity = 0.5;
        });

        card.addEventListener('dragend', function(event) {
            event.target.style.opacity = "";
        });

        card.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        card.addEventListener('dragenter', function(event) {
            if (event.target.classList.contains('product__detail-card')) {
                event.target.style.border = "2px dashed #000";
            }
        });

        card.addEventListener('dragleave', function(event) {
            if (event.target.classList.contains('product__detail-card')) {
                event.target.style.border = "";
            }
        });

        card.addEventListener('drop', function(event) {
            event.preventDefault();
            if (event.target.classList.contains('product__detail-card')) {
                event.target.style.border = "";

                // Intercambiar las tarjetas
                let parent = event.target.parentNode;
                let draggedIndex = Array.prototype.indexOf.call(parent.children, dragged);
                let targetIndex = Array.prototype.indexOf.call(parent.children, event.target);

                if (draggedIndex > targetIndex) {
                    parent.insertBefore(dragged, event.target);
                    parent.insertBefore(event.target, dragged);
                } else {
                    parent.insertBefore(event.target, dragged);
                    parent.insertBefore(dragged, event.target.nextSibling);
                }
            }
        });
    });
});
