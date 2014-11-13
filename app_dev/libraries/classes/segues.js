var Segue = {

    /**
     *
     * Ajoute une segue a la scene
     * @params array params
     * 
     * Segue.add ({
     *    id: 'details',
     *    segue: 'right',
     *    template: {
     *        url: '',
     *        vars: {
     *            names: ['Romain', 'Jonathan']
     *        }
     *    },
     *    header: {
     *        url: '',
     *        vars: {
     *            title: 'Utilisateurs',
     *            back: 'home'
     *        }
     *    }
     * });
     *
     */
    add: function (params)
    {
        if (!params.segue) {
            params.segue = 'right';
        }

        /** status bar **/
        if (!params.statusBar) {
            params.statusBar = 'false';
        } else {
            params.statusBar = 'true';
        }

        /** template **/
        if (!params.template) {
            params.template = [];
        }
        if (!params.template.url) {
            params.template.url = 'partials/segues/default.html';
        }
        if (!params.template.vars) {
            params.template.vars = [];
        }

        /** header **/
        if (!params.header) {
            params.header = [];
        }
        if (!params.header.url) {
            params.header.url = 'partials/headers/default.html';
        }
        if (!params.header.vars) {
            params.header.vars = [];
        }

        $('#segues').append(
            '<section id="'+ params.id +'" data-statusbar="'+ params.statusBar +'" class="segue segue-'+ params.segue +'"></section>'
        );
        var $newSegue = $('#'+ params.id);

        $.get(params.header.url, function (tpl) {
            tpl = Handlebars.compile(tpl);
            var html = tpl(params.header.vars);
            $newSegue.prepend(html);
        });

        $.get(params.template.url, function (tpl) {
            tpl = Handlebars.compile(tpl);
            var html = tpl(params.template.vars);
            $newSegue.append(html);
        });
    },

    /**
     *
     * Supprime une segue de la scene
     *
     */
    delete: function (segue)
    {
        $('[id='+ segue +']').remove();
    },

    /**
     *
     * Affiche une segue
     *
     */
     display: function (segue)
     {
        var $leave = $('[id=segues] .segue-active');
        var $come = $('[id=segues] [id='+ segue +']');

        if ($leave.hasClass('segue-left') && $come.hasClass('segue-left')) {
            $leave.removeClass('segue-left').addClass('segue-right');
        }

        if ($leave.hasClass('segue-right') && $come.hasClass('segue-right')) {
            $leave.removeClass('segue-right').addClass('segue-left');
        }

        $leave.removeClass('segue-active');
        $come.addClass('segue-active');
     }

};