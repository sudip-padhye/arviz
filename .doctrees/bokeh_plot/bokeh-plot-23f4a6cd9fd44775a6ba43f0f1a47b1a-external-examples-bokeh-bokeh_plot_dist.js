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
    
      
      
    
      var element = document.getElementById("a19b1b14-6677-494e-a759-5b3d8e9778a8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a19b1b14-6677-494e-a759-5b3d8e9778a8' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;bc85b504-a748-455b-8d8d-b54739a0f727&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65063&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65130&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65090&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65120&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65121&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65122&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65124&quot;}},&quot;id&quot;:&quot;65123&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65132&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65158&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65098&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65101&quot;},{&quot;id&quot;:&quot;65105&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65102&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65139&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65144&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65113&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65090&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65094&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65092&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65096&quot;}},&quot;id&quot;:&quot;65089&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65065&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65153&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65099&quot;}},&quot;id&quot;:&quot;65098&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65109&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65076&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65078&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65135&quot;}]},&quot;id&quot;:&quot;65134&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65079&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65125&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65112&quot;}},&quot;id&quot;:&quot;65108&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65112&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65067&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65070&quot;},{&quot;id&quot;:&quot;65074&quot;},{&quot;id&quot;:&quot;65134&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65071&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65123&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65125&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65082&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65059&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65063&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65061&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65065&quot;}},&quot;id&quot;:&quot;65058&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65075&quot;},{&quot;id&quot;:&quot;65076&quot;},{&quot;id&quot;:&quot;65077&quot;},{&quot;id&quot;:&quot;65078&quot;},{&quot;id&quot;:&quot;65079&quot;},{&quot;id&quot;:&quot;65080&quot;}]},&quot;id&quot;:&quot;65082&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65138&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65071&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65074&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65103&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65130&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65068&quot;}},&quot;id&quot;:&quot;65067&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65128&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65106&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65096&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;ukkMAiuHhj8bL90kBoG1PzMzMzMzM8M/+n5qvHSTyD8Sg8DKoUXGPyuHFtnO98M/iUFg5dAiuz8730+Nl26yPzvfT42XbqI/ObTIdr6fij/8qfHSTWJwP/yp8dJNYlA/AAAAAAAAAAD8qfHSTWJQPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[14]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65132&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65131&quot;}},&quot;id&quot;:&quot;65120&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65131&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65107&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65075&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65058&quot;},{&quot;id&quot;:&quot;65089&quot;}]},&quot;id&quot;:&quot;65141&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65153&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65068&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65151&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65103&quot;}},&quot;id&quot;:&quot;65102&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65136&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65137&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65138&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65140&quot;}},&quot;id&quot;:&quot;65139&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65106&quot;},{&quot;id&quot;:&quot;65107&quot;},{&quot;id&quot;:&quot;65108&quot;},{&quot;id&quot;:&quot;65109&quot;},{&quot;id&quot;:&quot;65110&quot;},{&quot;id&quot;:&quot;65111&quot;}]},&quot;id&quot;:&quot;65113&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65136&quot;}},&quot;id&quot;:&quot;65140&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65081&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65067&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65070&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65137&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65102&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65105&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65061&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65072&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65092&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65144&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65128&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65072&quot;}},&quot;id&quot;:&quot;65071&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65059&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65094&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65158&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65157&quot;}},&quot;id&quot;:&quot;65136&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65110&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65111&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65121&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65157&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65122&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65120&quot;}},&quot;id&quot;:&quot;65124&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65081&quot;}},&quot;id&quot;:&quot;65077&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65123&quot;}]},&quot;id&quot;:&quot;65135&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65099&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65080&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65151&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65098&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65101&quot;,&quot;type&quot;:&quot;Grid&quot;}],&quot;root_ids&quot;:[&quot;65141&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"bc85b504-a748-455b-8d8d-b54739a0f727","root_ids":["65141"],"roots":{"65141":"a19b1b14-6677-494e-a759-5b3d8e9778a8"}}];
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