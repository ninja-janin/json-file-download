function displayDownloadableFiles(object, area, prefecture_name) {
  let ssi_template = `<section id="airticket-and-hotel" class="js-check">
  <div class="section__container airhotel">
    <h2 class="heading--title"><span class="heading--text js-area">${object.area.split('/')[0]}</span>おすすめ航空券＋ホテル</h2>
    <div class="slideCardList__container">
      <ul class="slideCardList--col4 kokunai-goto__card js-slideCardList-counter">
        <li class="${object.area.split("/")[1]}--${prefecture_name}-ah01 slideCardList__item--col4" data-display="false"></li>
        <li class="${object.area.split("/")[1]}--${prefecture_name}-ah02 slideCardList__item--col4" data-display="false"></li>
        <li class="${object.area.split("/")[1]}--${prefecture_name}-ah03 slideCardList__item--col4" data-display="false"></li>
        <li class="${object.area.split("/")[1]}--${prefecture_name}-ah04 slideCardList__item--col4" data-display="false"></li>
      </ul>
    </div>
    <div class="align-center section-button pc-only">
      <!-- var oversea_airticket_hotel_url_pc -->
      <a href="${object.oversea_tour_link_pc}" class="button button--twoLine button--type-outline button--icon-arrowRight js-ovs-airticket-hotel">
        <span><span class="js-area"></span>の<br>航空券＋ホテルをもっと見る</span>
      </a>
    </div>
    <div class="align-center sp-only">
      <!-- var oversea_airticket_hotel_url_sp -->
      <a href="${object.oversea_tour_link_sp}" class="button button--twoLine button--type-outline button--icon-arrowRight js-ovs-airticket-hotel">
        <span><span class="js-area"></span>の<br>航空券＋ホテルをもっと見る</span>
      </a>
    </div>
  </div>
</section>
  `
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ssi_template));
  element.innerHTML = `${area}-${prefecture_name}_ah.shtml`; //link text
  element.setAttribute('download', `${area}_ah.shtml`); //file name
  // element.style.display = 'none';
  document.body.appendChild(element);
  document.body.appendChild(document.createElement('br'));

  // element.click();
  // document.body.removeChild(element);
}

let area = ["america", "australia", "austria", "bali", "bangladesh", "beijing", "belgium", "boston", "brazil", "brisbane", "cairns", "cambodia", "canada", "cebu", "china", "croatia", "cuba", "czech", "dubai", "egypt", "fiji", "florence", "france", "germany", "goldcoast", "greece", "guam", "hainan", "hawaii", "hongkong", "hungary", "india", "indonesia", "italy", "jordan", "kenya", "korea", "laos", "lasvegas", "losangeles", "macau", "malaysia", "maldives", "malta", "mauritius", "mexico", "milano", "mongolia", "morocco", "myanmar", "nepal", "netherlands", "newcaledonia", "newyork", "newzealand", "orlando", "palau", "peru", "philippines", "phuket", "poland", "portugal", "rome", "russia", "saipan", "sandiego", "sanfrancisco", "seattle", "seychelles", "shanghai", "singapore", "southafrica", "spain", "srilanka", "switzerland", "sydney", "tahiti", "taiwan", "thailand", "toronto", "turkey", "uae", "united-kingdom", "vancouver", "venice", "vietnam"]
let prefecture = {
 5 : "chubu",
 7 : "chugoku",
 2 : "hokkaido",
 6 : "kansai",
 1 : "kanto",
 8 : "kyushu",
 9 : "okinawa",
 3 : "tohoku",
}

area.forEach((area, index) => {
  $.getJSON(`/data-overseas/${area}.json`, function(data){
    let dataObj = data;
    dataObj.forEach((dataObj, index) => {
      if(dataObj.param && dataObj.param.split("=")[1]) {
        let param = dataObj.param.split("=")[1];
        if(prefecture.hasOwnProperty(param)) {
          displayDownloadableFiles(dataObj, area, prefecture[param])
        }
      }
    });
  })
});


