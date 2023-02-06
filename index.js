$.getJSON(`/paramsData.json`, function(data){
  let dataObj = data;
  let tempAreaName;
  let count = 1;

  dataObj.forEach((dataObj, index) => {
    let areaName = dataObj.area.split('/')[1];
    let finalCount;

    if (tempAreaName !== areaName) {
      tempAreaName = areaName;
      finalCount = count++;

      let finalJsonFile = data.filter(function (data) {
        let area = data.area.split('/')[1];
        return area === areaName;
      })
      console.log(finalCount, ":", areaName, ":", finalJsonFile)

      //DownloadJSON
      const blob = new Blob([JSON.stringify(finalJsonFile, null, 4)], { type: "application/json" });
      const href = URL.createObjectURL(blob);
      const br = Object.assign(document.createElement("br"))
      const a = Object.assign(document.createElement("a"), {
        href,
        textContent: `${finalCount}.) ${areaName}`,
        download: `${finalCount}:${areaName}.json`
      });
      document.body.appendChild(a)
      document.body.appendChild(br)
      // a.click();
      // URL.revokeObjectURL(href);
      // a.remove();
    }

  });

})


