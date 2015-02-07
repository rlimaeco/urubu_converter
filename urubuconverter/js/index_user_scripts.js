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
        //var input2 = document.getElementById("input2").value;
        
        fx.settings = { from: unidade1, to: unidade2 };
        
        var saida = fx.convert(input1);
        document.getElementById("input2").value = saida;
        
        //console.log(input1);
        //console.log(saida);
        

    });
    
        /* button  #mudar */
    $(document).on("click", "#mudar", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("unidade1").value;
        var unidade2 = document.getElementById("unidade2").value;
        document.getElementById("unidade1").value = unidade2;
        document.getElementById("unidade2").value = unidade1;
        
        
    });
    
        /* listitem  Unidades */
    
    
        /* listitem  Unidades */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         activate_subpage("#units"); 
    });
    
        /* listitem  Comprimento */
    
    
        /* listitem  Comprimento */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         activate_subpage("#comprimento"); 
    });
    
        /* button  #unitmudar */
    $(document).on("click", "#unitmudar", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("unitselect1").value;
        var unidade2 = document.getElementById("unitselect2").value;
        document.getElementById("unitselect1").value = unidade2;
        document.getElementById("unitselect2").value = unidade1;
    });
    
        /* button  Converter */
    $(document).on("click", ".uib_w_39", function(evt)
    {
        
        /* your code goes here */ 
        var unidade1 = document.getElementById("unitselect1").value;
        var unidade2 = document.getElementById("unitselect2").value;

        var input1 = document.getElementById("unit1").value;
        var a = math.unit(parseFloat(input1), unidade1); 
        var saida = a.to(unidade2);
      
        
        document.getElementById("unitresposta").value = saida;
        
        
    });
    
        /* button  #volumemudar */
    $(document).on("click", "#volumemudar", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("volumeselect1").value;
        var unidade2 = document.getElementById("volumeselect2").value;
        document.getElementById("volumeselect1").value = unidade2;
        document.getElementById("volumeselect2").value = unidade1;
    });
    
        /* button  #volumeconverter */
    $(document).on("click", "#volumeconverter", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("volumeselect1").value;
        var unidade2 = document.getElementById("volumeselect2").value;

        var input1 = document.getElementById("volume1").value;
        var a = math.unit(parseFloat(input1), unidade1); 
        var saida = a.to(unidade2);
        document.getElementById("volumeresposta").value = saida;
    });
    
        /* listitem  Volume */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         activate_subpage("#volume"); 
    });
    
        /* button  #massamudar */
    $(document).on("click", "#massamudar", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("massaselect1").value;
        var unidade2 = document.getElementById("massaselect2").value;
        document.getElementById("massaselect1").value = unidade2;
        document.getElementById("massaselect2").value = unidade1;
    });
    
        /* button  #massaconverter */
    $(document).on("click", "#massaconverter", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("massaselect1").value;
        var unidade2 = document.getElementById("massaselect2").value;

        var input1 = document.getElementById("massa1").value;
        var a = math.unit(parseFloat(input1), unidade1); 
        var saida = a.to(unidade2);
        document.getElementById("massaresposta").value = saida;
    });
    
        /* listitem  Massa */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         activate_subpage("#massa"); 
    });
    
        /* button  #areamudar */
    $(document).on("click", "#areamudar", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("areaselect1").value;
        var unidade2 = document.getElementById("areaselect2").value;
        document.getElementById("areaselect1").value = unidade2;
        document.getElementById("areaselect2").value = unidade1;
    });
    
        /* button  #areaconverter */
    $(document).on("click", "#areaconverter", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("areaselect1").value;
        var unidade2 = document.getElementById("areaselect2").value;

        var input1 = document.getElementById("area1").value;
        var a = math.unit(parseFloat(input1), unidade1); 
        var saida = a.to(unidade2);
        document.getElementById("arearesposta").value = saida;
    });
    
        /* listitem  Área */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         activate_subpage("#area"); 
    });
    
        /* listitem  Tempo */
    $(document).on("click", ".uib_w_33", function(evt)
    {
         activate_subpage("#velocidade"); 
    });
    
        /* button  #tempomudar */
    $(document).on("click", "#tempomudar", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("temposelect1").value;
        var unidade2 = document.getElementById("temposelect2").value;
        document.getElementById("temposelect1").value = unidade2;
        document.getElementById("temposelect2").value = unidade1;
    });
    
        /* button  #tempoconverter */
    $(document).on("click", "#tempoconverter", function(evt)
    {
        /* your code goes here */ 
        var unidade1 = document.getElementById("temposelect1").value;
        var unidade2 = document.getElementById("temposelect2").value;

        var input1 = document.getElementById("tempo1").value;
        var a = math.unit(parseFloat(input1), unidade1); 
        var saida = a.to(unidade2);
        document.getElementById("temporesposta").value = saida;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
