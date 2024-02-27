function footer () {
    const footerMenuItem = document.getElementsByClassName("footer__menu-item");
    const toggleFooterClass = function() {
        document.querySelectorAll('.footer__menu-item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(footerMenuItem).forEach(function(element) {
        element.addEventListener('click', toggleFooterClass);
    });
}

export default footer;