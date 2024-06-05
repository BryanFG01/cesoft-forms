jQuery(document).ready(() => {
    jQuery("#btn-crear-proyecto").on("click", () => {
        if (jQuery("#nombre").val() == "") {
            jQuery("#alert-error").show();
        } else {
            jQuery("#alert-error").hide();

            jQuery("#form-crear-proyecto").submit();
        }
    });

    jQuery("#btn-cancelar").on("click", () => {
        location.href = "/admin/proyectos";
    });
});
