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
    
      
      
    
      var element = document.getElementById("804cc853-236f-4fb6-af05-cf14e0024bec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '804cc853-236f-4fb6-af05-cf14e0024bec' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;d0a4ad69-b546-413b-8e1c-ab41925186a0&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66582&quot;}},&quot;id&quot;:&quot;66576&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66608&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66567&quot;}},&quot;id&quot;:&quot;66566&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66583&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66575&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66566&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66569&quot;},{&quot;id&quot;:&quot;66573&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66570&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66596&quot;},{&quot;id&quot;:&quot;66601&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66603&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66584&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66558&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66562&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66560&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66564&quot;}},&quot;id&quot;:&quot;66557&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66608&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66612&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66580&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66606&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66571&quot;}},&quot;id&quot;:&quot;66570&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66583&quot;}},&quot;id&quot;:&quot;66578&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66566&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66569&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66570&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66573&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66564&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66571&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66594&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66595&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66574&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66577&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66579&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66606&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66558&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66593&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66594&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66595&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66597&quot;}},&quot;id&quot;:&quot;66596&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;5eNUQxofCMCxV7gNZjsBwKjniWBgmvy/MEyL1IoA/L+cP7XNwNr7v7vkIwDXpvu/wOvQ+n/6+r8PIJf8ern6v2GAD7YLHfq/Kep5NqPR9r/gTlv92u/1vzk0XOsUfPW/zQnqDxRi9L+VC3nzHgH0vz4uN+bKf/O/6HwhS5wg87+i+36BT7jyv1b7eJOLgvK/RXZ+jPgZ8r8+RjHKOFrxv/cFCMcNrPC/csJPP4M38L9dvDnJkbLrv7S340ZcEei/E9tXEY2757/q0/mjL9vmv19jSNyqJOW/ygpM/HKr479oZikjRqziv5NEuZIRPeK/msP/l5+q4b+b4LrouUzfvxSOXrqVGt2/QUYi8AGE278SqKd33e7av0fRSjRkydi/MQNXITlV2L9Av1hUKgrWv7CmA0tTptW/mH7SB1j+07+0UB6NMK3Sv7jNxCi7xtG/aRJMVatG0b9j9Wqp3HfOv0nzMkfw7s2/diBPiAxqyr9ZHWYvYGC8v30FMWpqC6O/+GhWJQDUlz8pWnlKWG6eP+9MiAQafrA/Wz+jRIB9tz/ay5HlzES8P+0ZW9P3v7w/DChFqTKgxj85CXN/OKvKPyG5kMgJQs8/REQJUYpTzz989spIArjQP/oCwxNLTtI/i/lnrK7e1j9f/TC/ESbXP8vJ0sp3Ftk/OgQg0CeJ2z9iKjLX7yPcP0Shs62VPN0/+so+nhUI3z+mC7TcPIvfP7PhYrPjgeA/Gz3GIYmp4D9OF87mq0ziP55OJWxZduI/mTmJrSIO4z+24wAScb/kPy01rhL8p+U/Rb5mKaus5T+sbex70zfmP220j4QyNec/P25dKuJW6j9Ctq4zt87tP2D9wCM74e0/ri/m4Cu67j+AdoIwboHwP5Ku2yzKjvA/IWDRD7qv8D8f+8Bvu8jyP83b5lL81/U/mC7kAqg/9j8ZQ1OONAb4PywVuMNzFfk/8Kl43VkJ+j8g27HRgfH7P9mNum1EGv8/nJjkIpq6AEAOsjdRK94AQKxpVYYd6wBAoK373X6PAUBM5tHgyAEFQHvoB72hHgVAPGVfnfhmBUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;bHCs8paD3z+eUI/kM4ntPywMu8/PsvE/6Fm6lbr/8T8yYCWZnxLyP6IN7n+ULPI/IIqXAsCC8j/4b7SBQqPyP9A/+CR68fI/7ArDZC6X9D+QWFKBEgj1P+TlUYr1QfU/GvsK+PXO9T82ekOGcP/1P+Fo5IwaQPY/jEFv2rFv9j8vgkA/2KP2P1WCQza6vvY/3sTAuQPz9j/hXOea41L3PwT9exz5qfc/xx5YYD7k9z/pkLGNWxP5PxMSR+6o+/k/OwmquxwR+j8GiwEXNEn6Pyjn7UjVtvo/Tv3sQCMV+z9mpjV37lT7P9uuUZu7cPs/Gg8AGliV+z/to+jCaBb8Pz4utEitXPw/OLf7wX+P/D/+CgtRJKL8P9eldnnT5vw/mh/V21j1/D8Y6HS1uj79PyqLn5Y1S/0/LbAF/zSA/T/qNVzuWar9P0lm55oox/0/s31WlSrX/T+qUGk1ghj+P8vQjPsQIf4/+Q17N19Z/j8Vz4T+/Bz/P+o7V1bSs/8/aVYlANQXAEBaeUpYbh4AQDQhEmj4QQBA/YwSAfZdAEAvR5YzE3EAQGhsTd//cgBAQClKlQG1AEBKmPvDWdUAQMmFRE4Q+gBAIkqIUpz6AEBor4wkgAsBQDAwPLHkJAFAmX/G6uptAUDWD/MbYXIBQJ0srXxnkQFARAACfZK4AUCmInP9PsIBQBQ621rJ0wFAsOzjWYHwAUC6QMvNs/gBQDZcbHY8EAJAo8c4JDEVAkDqwtl8lUkCQNSphC3LTgJAMyexVcRhAkB3HEAi7pcCQKbGVYL/tAJAydcsZZW1AkC2jX1v+sYCQI72kVCm5gJAyK1LRdxKA0DI1nXm1rkDQKwfeGQnvANA9sUcfEXXA0CgnSCMWyAEQKTrNouyIwRACFj0g+4rBEDIPvDbLrIEQPO2uRT/dQVApgu5AOqPBUDG0JQjjQEGQEsF7vBcRQZAfCped1aCBkDIdmx0YPwGQHajbhuRxgdATkxyEU1dCEAH2ZuoFW8IQNa0KsOOdQhA0Nb9br/HCEAm82hw5IAKQD70g95QjwpAnrKvTnyzCkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66612&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66611&quot;}},&quot;id&quot;:&quot;66598&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66593&quot;}},&quot;id&quot;:&quot;66597&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66581&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66598&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66599&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66600&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66602&quot;}},&quot;id&quot;:&quot;66601&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66599&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66562&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66609&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66610&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66598&quot;}},&quot;id&quot;:&quot;66602&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66610&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66609&quot;}},&quot;id&quot;:&quot;66593&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66600&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66574&quot;},{&quot;id&quot;:&quot;66575&quot;},{&quot;id&quot;:&quot;66576&quot;},{&quot;id&quot;:&quot;66577&quot;},{&quot;id&quot;:&quot;66578&quot;},{&quot;id&quot;:&quot;66579&quot;},{&quot;id&quot;:&quot;66580&quot;},{&quot;id&quot;:&quot;66581&quot;}]},&quot;id&quot;:&quot;66584&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66560&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66603&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66582&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66567&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66611&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;}],&quot;root_ids&quot;:[&quot;66557&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"d0a4ad69-b546-413b-8e1c-ab41925186a0","root_ids":["66557"],"roots":{"66557":"804cc853-236f-4fb6-af05-cf14e0024bec"}}];
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