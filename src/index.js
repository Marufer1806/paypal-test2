paypal.Buttons({

   
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '29.04' 
          },
          
        }],
        description: "The classic product T-shirt Crewneck Classic-T SS for men Stedman."
      });
    },

   
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {

        window.location.href = "sucess.html";
    
      });

      
    }

  


  }).render('#paypal-button-container');