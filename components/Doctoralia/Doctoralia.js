import React, { useEffect } from 'react';

const DoctoraliaWidget = () => {
    useEffect(() => {
        // Código JavaScript para cargar el widget de Doctoralia
        !function($_x, _s, id) {
        var js, fjs = $_x.getElementsByTagName(_s)[0];
        if (!$_x.getElementById(id)) {
            js = $_x.createElement(_s);
            js.id = id;
            js.src = "//platform.docplanner.com/js/widget.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
        }(document, "script", "zl-widget-s");
    }, []);

    return (
        <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.com.mx/yeimy-rocio-avila-ponton/psicologo/tuxtla-gutierrez"
        rel="nofollow"
        data-zlw-doctor="yeimy-rocio-avila-ponton"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="false"
        >
        Yeimy Rocio Avila Pontón - Doctoralia.com.mx
        </a>
    );
    };

export default DoctoraliaWidget;
