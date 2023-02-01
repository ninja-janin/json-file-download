$.getJSON(`/paramsData.json`, function(data){
  let dataObj = data;
  let tempAreaName;
  let count = 1;

  dataObj.forEach((dataObj, index) => {
    let areaName = dataObj.area.split('/')[1];
    let finalCount;
    setTimeout(() => {
      if (tempAreaName !== areaName) {
        tempAreaName = areaName;
        finalCount = count++;

        let finalJsonFile = data.filter(function (data) {
          let area = data.area.split('/')[1];
          return area === areaName;
        })
        console.log(finalCount, ":", areaName, ":", finalJsonFile)

        //DownloadJSON
        const blob = new Blob([JSON.stringify(finalJsonFile)], { type: "octet-stream" });
        const href = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), {
          href,
          sytle: "display:none",
          download: `${finalCount}:${areaName}.json`
        });
        document.body.appendChild(a)
        a.click();
        URL.revokeObjectURL(href);
        a.remove();
      }
    }, 1000);
  });

})


