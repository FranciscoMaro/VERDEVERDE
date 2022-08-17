 (async () => {
    const {value: planta} = await  Swal.fire({ 
        title: "Bienvenido!",
        text: 'Aqui encontrarás el tipo de planta que estás buscando',
        //html: "<b class = 'text-success'>Aqui encontrarás el tipo de planta que estás buscando </b>",
        // icon:
         confirmButtonText: "Seleccionar.",
        // footer:
        // width:
        // padding:
        // background:
        // grow:
        // backdrop:
        // timer:
        // timerProgressBar:
        // toast:
        // position:
        // allowOutsideClick:
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:
    
         input: 'select',
         inputPlaceholder: 'planta',
         inputValue: '', 
        inputOptions: {
            limonero: 'limonero',
            "Arbol de Pomelo": 'Arbol de Pomelo',
            Liquidambar: 'Liquidambar',
            Taxodium: 'Taxodium',
            Eucalipto: 'Eucalipto',
        },
        
           customClass: {
            	container:'',
         	    popup: '',
         	    header:'',
         	    title: '',
         	    closeButton: '',
         	    icon: '',
         	    image: '',
         	    content:'',
         	    input: '',
            	actions:'',
         	    confirmButton:'',
            	footer:	'',

           },
        
    
        // showConfirmButton:
        confirmButtonColor: '#41E121',
        // confirmButtonAriaLabel:
    
        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:
    
    
        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    });

    if (planta) {

        Swal.fire ({
            title: `Seleccionaste ${planta}`,
            confirmButtonColor: '#41E121',
        })
    }
 })()




