(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
     $.getJSON('https://openexchangerates.org/api/latest.json?app_id=f1b783d446244d2b9fddced69eaba96f',function(data) {
                    localStorage.setItem('convrates', JSON.stringify(data));
                    // Check money.js has finished loading:
                    if ( typeof fx !== "undefined" && fx.rates ) {
                        fx.rates = data.rates;
                        fx.base = data.base;
                    } else {
                        // If not, apply to fxSetup global:
                        var fxSetup = {
                            rates : data.rates,
                            base : data.base
                        }
                    }
                });
 function register_event_handlers()
 {
    
    
         
        
        $(document).on("click", ".uib_w_7", function(evt)
        {
         activate_subpage("#messages_page"); 
        });
        $(document).on("click", ".uib_w_8", function(evt)
        {
         activate_subpage("#profile_page"); 
        });
    /* button  #sidemenu_button */
    
    
        /* button  #sidemenu_button */
    
    
        /* listitem  Unidades */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         activate_subpage("#mainsub"); 
    });
    
        /* listitem  Configurações */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#config"); 
    });
    
        /* button  #sidemenu_button */
    $(document).on("click", "#sidemenu_button", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidemenu"));  
    });
    
        /* button  Converter */
    $(document).on("click", ".uib_w_17", function(evt)
    {
        /* your code goes here */ 
        //var input1 = document.getElementById("input1").value;
        //document.getElementById("input2").value = input1;
        
        var data = JSON.parse(localStorage.getItem('convrates'));

            $.each(data, function(key, value){
               //alert(key + ' = ' + value);
                    // Check money.js has finished loading:
                    
                    if ( typeof fx !== "undefined" && fx.rates ) {
                        fx.rates = data.rates;
                        fx.base = data.base;
                    } else {
                        // If not, apply to fxSetup global:
                        var fxSetup = {
                            rates : data.rates,
                            base : data.base
                        }
                        
                    }
             });
        
        var unidade1 = document.getElementById("unidade1").value;
        var unidade2 = document.getElementById("unidade2").value;
        
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        
        fx.settings = { from: unidade1, to: unidade2 };
        
        var saida = fx.convert(input1);
        document.getElementById("input2").value = saida;
        
        console.log(input1);
        console.log(saida);
        

    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
