var statusBarClass = {
    isVisible: true,

    // Recupere l'etat de la status bar sur la page active
    getStatusbarState: function() {
        return $('.segue-active').attr('data-statusbar');
    },

    // Verifie que l'etat courant de la status bar correspond a celui indique par la page
    verify: function() {
        var statusBarState = this.getStatusbarState();

        if (statusBarState === "false" && this.isVisible) {
            StatusBar.hide();
            this.isVisible = false;
        } else if (statusBarState === "true" && !this.isVisible) {
            StatusBar.show();
            this.isVisible = true;
        }
    }

};