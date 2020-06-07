function initMap() {
   var uluru = {
      lat: -23.540259,
      lng: -46.833384
   };
   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13.5,
      center: uluru
   });

   // Locais Coordenadas
   const cadaDaBelezaCoord = {lat: -23.520200,lng: -46.837227};
   const farma100Coord = {lat: -23.530621,lng: -46.842772};
   const plazaShoopingCoord = {lat: -23.552857,lng: -46.837828};
   const terminalLuizBortolossoCoord = {lat: -23.523877,lng: -46.815816};
   const delReyTransportesCoord = {lat: -23.527654,lng: -46.848979};
   const ettCarapicuibaCoord = {lat: -23.540259,lng: -46.833384};
   const bazarPopularCoord = {lat: -23.52992,lng: -46.85356};
   const BazarPapelariaRoseCoord = {lat: -23.540048,lng: -46.855339};
   const kolpingNovaCarapicuibaCoord = {lat: -23.556763,lng: -46.846060}
   const ecobierPlazaCoord = {lat: -23.553487,lng: -46.837248}

   // Locais marcacao
   const casaDaBeleza = new google.maps.Marker({position: cadaDaBelezaCoord,map: map});
   const farma100 = new google.maps.Marker({position: farma100Coord,map: map});
   const plazaShooping = new google.maps.Marker({position: plazaShoopingCoord,map: map});
   const terminalLuizBortolosso = new google.maps.Marker({position: terminalLuizBortolossoCoord,map: map});
   const delReyTransportes = new google.maps.Marker({position: delReyTransportesCoord,map: map});
   const ettCarapicuiba = new google.maps.Marker({position: ettCarapicuibaCoord,map: map});
   const bazarPopular = new google.maps.Marker({position: bazarPopularCoord,map: map});
   const BazarPapelariaRose = new google.maps.Marker({position: BazarPapelariaRoseCoord,map: map});
   const kolpingNovaCarapicuiba = new google.maps.Marker({position: kolpingNovaCarapicuibaCoord,map: map});
   const ecobierPlaza = new google.maps.Marker({position: ecobierPlazaCoord,map: map});

   const localArr = [
      {
         local: casaDaBeleza,
         titulo: "Casa da Beleza",
         endereco: "Av. Celeste, nº45",
         horario: "2ª a 6ª das 09:00 às 19:00hrs e sábado das 09:00 às 17:00hrs"
      },
      {
         local: farma100,
         titulo: "Farma 100",
         endereco: "Rua. Jose Fernandes Teixeira Zuza, nº137",
         horario: "Todos os dias das 08:00 às 19:40hrs"
      },
      {
         local: plazaShooping,
         titulo: "Plaza Shopping Carapicuíba",
         endereco: "Estrada Ernestina Vieira, 149 – Vila Dirce – Subsolo",
         horario: "2ª a 6ª das 09:00 às 18:00hrs e sábado das 09:00 às 13:00hrs"
      },
      {
         local: terminalLuizBortolosso,
         titulo: "Terminal Luiz Bortolosso – KM 21",
         endereco: "Av dos Autonomistas, 8000",
         horario: "2ª a 6ª das 08:30 as 17:30hrs e sábado das 08:30 às 12:30hrs"
      },
      {
         local: delReyTransportes,
         titulo: "Del Rey Transportes",
         endereco: "Av Marginal , 1234",
         horario: "2ª a 6ª das 08:00 às 17:30hrs"
      },
      {
         local: ettCarapicuiba,
         titulo: "ETT Carapicuíba",
         endereco: "Estrada Cabreúva , 160",
         horario: "2ª a 6ª das 07:30 às 16:30hrs"
      },
      {
         local: bazarPopular,
         titulo: "Bazar Popular (Ariston)",
         endereco: "Av. Comendador Dante Carraro, 1073 - Ariston",
         horario: "2ª a sábado das 08:00 as 18:00hrs e Domingo 09:00 as 12:30hrs"
      },
      {
         local: BazarPapelariaRose,
         titulo: "Bazar e Papelaria Rose",
         endereco: "Rua. Rafard, 278 - Ariston",
         horario: "2ª a 6º das 10:00 as 18:00hrs aos sábado das 10:00 as 18:00hrs e Domingo 10:00 as 13:00hrs"
      },
      {
         local: kolpingNovaCarapicuiba,
         titulo: "Comunidade Kolping Nova Carapicuiba (Jd. Maria Beatriz)",
         endereco: "Rua Campo Erê, 3000",
         horario: "2ª a sábado das 09:00 as 19:00hrs"
      },
      {
         local: ecobierPlaza,
         titulo: "Ecobier (Plaza Shopping Carapicuíba)",
         endereco: "Estrada Ernestina Vieira, 149 – Vila Dirce – 1º Andar",
         horario: "OBS. Atendimento de apoio as recargas somente após o expediente da Central do Cartão PEC."
      }
   ];

   localArr.forEach(local => {
      local.local.addListener('click', function () {

         const contentString = `
         <div id="content">
            <div id="siteNotice">
            </div>
            <h3 id="firstHeading" class="firstHeading">${local.titulo}</h3>
            <div id="bodyContent">
               <p>
                  <strong>Endereço: </strong> ${local.endereco} <br>
                  <strong>Horário de atendimento: </strong> ${local.horario}
               </p>
            </div>
         </div>`;

         const infowindow = new google.maps.InfoWindow({
            content: contentString
         });
         infowindow.open(map, local.local);
      });
   });

   
}

initMap();