(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("875900ac-144a-49b2-b4d6-34da671a38ac");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '875900ac-144a-49b2-b4d6-34da671a38ac' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;985c8c44-e64a-420a-b571-65fa3226f559&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67403&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67406&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67453&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67431&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67457&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67460&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67469&quot;},{&quot;id&quot;:&quot;67467&quot;}]},&quot;id&quot;:&quot;67470&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67461&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67418&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67419&quot;}},&quot;id&quot;:&quot;67413&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67432&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67414&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;6hrOy7Vnhj+qRrZP+t6OPzY5z2kfq5M/Fk/Dq8Hmlz/2ZLftYyKcP2u91RcDL6A/XMjPONRMoj9M08lZpWqkPzzew3p2iKY/LOm9m0emqD8c9Le8GMSqPwz/sd3p4aw//Ams/rr/rj92CtMPxo6wP+4PUKCunbE/ZhXNMJessj/eGkrBf7uzP1Ygx1FoyrQ/ziVE4lDZtT9GK8FyOei2P74wPgMi97c/Nja7kwoGuT+uOzgk8xS6PyZBtbTbI7s/n0YyRcQyvD8XTK/VrEG9P49RLGaVUL4/B1ep9n1fvz9ALpNDMzfAP/yw0YunvsA/uDMQ1BtGwT90tk4ckM3BPzA5jWQEVcI/7LvLrHjcwj+oPgr17GPDP2TBSD1h68M/IESHhdVyxD/cxsXNSfrEP5hJBBa+gcU/mEkEFr6BxT+YSQQWvoHFP9zGxc1J+sQ/IESHhdVyxD9kwUg9YevDP6g+CvXsY8M/7LvLrHjcwj8wOY1kBFXCP3S2ThyQzcE/uDMQ1BtGwT/8sNGLp77AP0Auk0MzN8A/B1ep9n1fvz+PUSxmlVC+PxdMr9WsQb0/n0YyRcQyvD8mQbW02yO7P647OCTzFLo/Nja7kwoGuT++MD4DIve3P0YrwXI56LY/ziVE4lDZtT9WIMdRaMq0P94aSsF/u7M/ZhXNMJessj/uD1Cgrp2xP3YK0w/GjrA//Ams/rr/rj8M/7Hd6eGsPxz0t7wYxKo/LOm9m0emqD883sN6doimP0zTyVmlaqQ/XMjPONRMoj9rvdUXAy+gP/Zkt+1jIpw/Fk/Dq8Hmlz82Oc9pH6uTP6pGtk/63o4/6hrOy7Vnhj/qGs7LtWeGPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[80]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5mcO+iXjAUDmZw76JeMBQHNdQnL24QFA6jlppVXdAUCaqmBEXtMBQJzdR9/TwgFAYY8trFKsAUBlYxvSJowBQHUGN7g7ZAFAYVTAcQ0xAUCgy0RCovMAQPNnu421qgBApBgnGQdXAEDF7yrWB/T/PykyW7fJKP8/eRh/mHdK/j+cAEt/Xl79P6lJnM3DZfw/KrtN0ypk+z+jOZhPg1v6P8G7Hr2yUvk/aXw8f5hJ+D/aKiZt2z/3P9UyKtUmO/Y/x+wqsV479T/WZ85vwUD0P3VZVhUcTPM/JnYInHJl8j/rLaIa3IXxP2RoFx7ksvA/oibYmADW7z/Ezb0/h2HuP5v8nZQXD+0/gMKBRYjj6z85rU+WPNvqP7P4JO1zAOo/PrYn36BN6T/PHg1EtMroP2NaN3Q0eeg/Bme4fStZ6D8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[80]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67457&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67456&quot;}},&quot;id&quot;:&quot;67430&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67408&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67430&quot;}},&quot;id&quot;:&quot;67434&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;VMxCXjIJxj8QT4GmppDGP8zRv+4aGMc/iFT+No+fxz9E1zx/AyfIPwBae8d3rsg/vNy5D+w1yT94X/hXYL3JPzTiNqDURMo/8WR16EjMyj+t57MwvVPLP2lq8ngx28s/Je0wwaVizD/hb28JGurMP53yrVGOcc0/WXXsmQL5zT8V+CridoDOP9F6aSrrB88/jf2ncl+Pzz8kQHPdaQvQP4KBkgEkT9A/4MKxJd6S0D8+BNFJmNbQP5xF8G1SGtE/+oYPkgxe0T9YyC62xqHRP1jILrbGodE/WMgutsah0T/6hg+SDF7RP5xF8G1SGtE/PgTRSZjW0D/gwrEl3pLQP4KBkgEkT9A/JEBz3WkL0D+N/adyX4/PP9F6aSrrB88/Ffgq4naAzj9ZdeyZAvnNP53yrVGOcc0/4W9vCRrqzD8l7TDBpWLMP2lq8ngx28s/reezML1Tyz/xZHXoSMzKPzTiNqDURMo/eF/4V2C9yT+83LkP7DXJPwBae8d3rsg/RNc8fwMnyD+IVP42j5/HP8zRv+4aGMc/EE+BpqaQxj9UzEJeMgnGP1TMQl4yCcY/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[54]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALkPfRNCnwJAuQ99E0KfAkCooEhNN6UCQGeRwLUVpgJA6oGeqX+hAkA1Us5+rZkCQOaWwJOwjQJAS05jkNh/AkAXVWueNHACQJpn7uhsXwJApwzT5ApMAkCjmjsGijoCQFD16DLRJwJAqry6wLAWAkAtr54sUgcCQMfYdp9W+gFAOTAQLVvvAUDKCu2PO+UBQJWsthZ73QFAt9Lr0XjYAUC69/G2zdQBQK0R8xSH1AFAPpbJoHrVAUCAIj6eAdgBQI5TqBD82wFABaTLpjreAUCl3w6IGOEBQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[54]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67459&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67458&quot;}},&quot;id&quot;:&quot;67435&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67456&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67430&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67431&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67432&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67434&quot;}},&quot;id&quot;:&quot;67433&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67462&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67403&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67406&quot;},{&quot;id&quot;:&quot;67410&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67407&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67433&quot;},{&quot;id&quot;:&quot;67438&quot;},{&quot;id&quot;:&quot;67443&quot;},{&quot;id&quot;:&quot;67448&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67450&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67421&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67395&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67399&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67397&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67401&quot;}},&quot;id&quot;:&quot;67394&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67420&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67401&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67407&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67410&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67436&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67420&quot;}},&quot;id&quot;:&quot;67415&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67395&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67437&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67417&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67435&quot;}},&quot;id&quot;:&quot;67439&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;tglO2oDl0T8US23+OinSP3KMjCL1bNI/0M2rRq+w0j8uD8tqafTSP4xQ6o4jONM/6pEJs9170z9I0yjXl7/TP6YUSPtRA9Q/BFZnHwxH1D9il4ZDxorUP8DYpWeAztQ/HhrFizoS1T98W+Sv9FXVP9qcA9SumdU/ON4i+Gjd1T+WH0IcIyHWP/RgYUDdZNY/UqKAZJeo1j+w45+IUezWPw4lv6wLMNc/bGbe0MVz1z/Kp/30f7fXPyjpHBk6+9c/hio8PfQ+2D/ka1throLYP0KteoVoxtg/oO6ZqSIK2T/+L7nN3E3ZP1xx2PGWkdk/urL3FVHV2T8Z9BY6CxnaP3c1Nl7FXNo/dzU2XsVc2j93NTZexVzaPxn0FjoLGdo/urL3FVHV2T9ccdjxlpHZP/4vuc3cTdk/oO6ZqSIK2T9CrXqFaMbYP+RrW2Gugtg/hio8PfQ+2D8o6RwZOvvXP8qn/fR/t9c/bGbe0MVz1z8OJb+sCzDXP7Djn4hR7NY/UqKAZJeo1j/0YGFA3WTWP5YfQhwjIdY/ON4i+Gjd1T/anAPUrpnVP3xb5K/0VdU/HhrFizoS1T/A2KVngM7UP2KXhkPGitQ/BFZnHwxH1D+mFEj7UQPUP0jTKNeXv9M/6pEJs9170z+MUOqOIzjTPy4Py2pp9NI/0M2rRq+w0j9yjIwi9WzSPxRLbf46KdI/tglO2oDl0T+2CU7agOXRPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[68]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSvBYQS9+T9JK8FhBL35P/XxEG1RwPk/b0w6Paa3+T9hUy5agab5P9T1kOS/j/k/ebOy9j94+T+LBalm82P5P0XowWbIWPk/uKCtn1dd+T/5gsxDTHL5P48YZ9B7m/k/q6mGnVjZ+T+bw6nX4jD6P3swGy2envo/xiF5TzYj+z8zkScIarv7P/0lLrwpZfw/F07rrW0Z/T8q33SRgNn9PyJ0ENX5nv4/vbVGe/Bj/z+7ReKTOxUAQED2ZnVecwBAo1bRWIHLAECW4UR+VR4BQAivYm2vaQFAyJ/X2c+sAUAT1MrDJOgBQC3KOYoLGwJArUT8YF1FAkD8osSdAGYCQLLrId8UgQJA8hXAcHyTAkAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[68]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67461&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67460&quot;}},&quot;id&quot;:&quot;67440&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67411&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67442&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67440&quot;}},&quot;id&quot;:&quot;67444&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67399&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67394&quot;},0,0]]},&quot;id&quot;:&quot;67467&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67435&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67436&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67437&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67439&quot;}},&quot;id&quot;:&quot;67438&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67441&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[204]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[204]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67463&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67462&quot;}},&quot;id&quot;:&quot;67445&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67447&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67455&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67445&quot;}},&quot;id&quot;:&quot;67449&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67404&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67440&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67441&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67442&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67444&quot;}},&quot;id&quot;:&quot;67443&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67463&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67416&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67453&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67408&quot;}},&quot;id&quot;:&quot;67407&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67446&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67458&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67455&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67404&quot;}},&quot;id&quot;:&quot;67403&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67411&quot;},{&quot;id&quot;:&quot;67412&quot;},{&quot;id&quot;:&quot;67413&quot;},{&quot;id&quot;:&quot;67414&quot;},{&quot;id&quot;:&quot;67415&quot;},{&quot;id&quot;:&quot;67416&quot;},{&quot;id&quot;:&quot;67417&quot;},{&quot;id&quot;:&quot;67418&quot;}]},&quot;id&quot;:&quot;67421&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67459&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67412&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67450&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67468&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67469&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67445&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67446&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67447&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67449&quot;}},&quot;id&quot;:&quot;67448&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67419&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67421&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67411&quot;},{&quot;id&quot;:&quot;67412&quot;},{&quot;id&quot;:&quot;67413&quot;},{&quot;id&quot;:&quot;67414&quot;},{&quot;id&quot;:&quot;67415&quot;},{&quot;id&quot;:&quot;67416&quot;},{&quot;id&quot;:&quot;67417&quot;},{&quot;id&quot;:&quot;67418&quot;}]},&quot;id&quot;:&quot;67468&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67397&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;67470&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"985c8c44-e64a-420a-b571-65fa3226f559","root_ids":["67470"],"roots":{"67470":"875900ac-144a-49b2-b4d6-34da671a38ac"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();