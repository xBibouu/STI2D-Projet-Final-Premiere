document.getElementById('START').addEventListener('click', async () => {
    let start = 1; 
      try {
        const response = await fetch('http://127.0.0.1:3000/update-start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ moteurstart: start })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
      }
    
  });

  function getValue() {
    let distance = document.getElementById("dist").value;
    return distance;
  }

  document.getElementById('STOP').addEventListener('click', async () => {
    let stop = 1;
      try {
        const response = await fetch('http://127.0.0.1:3000/update-stop', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ moteurstop: stop})
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
      }
    
  });
  
  document.getElementById('START').addEventListener('click', async () => {
    let dist2 = getValue();
    /*let pas = dist2 * 360.83 / 0.1;*/
    let pas = dist2 / (65 * Math.PI) * 10 * 4;
      try {
        const response = await fetch('http://127.0.0.1:3000/update-pas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ moteurpas: pas })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
      }
    
    
});
