var request = require("request");
const {Opens} = require("./models")

//openAPI 불러오기
var options = {
  method: "GET",
  url: "http://openapi.seoul.go.kr:8088/554950534b7268613131624d597145/json/ListPublicReservationSport/1/10/%ED%85%8C%EB%8B%88%EC%8A%A4%EC%9E%A5?serviceKey=554950534b7268613131624d597145",
  headers: {
    'Accept': 'application / json'
  },
};

//JSON 으로 된 openAPI 보고 적절히 변경
  request(options, async(error, response, ListPublicReservationSport) => {
  if (error) {throw new Error(error);}
  let info = JSON.parse(ListPublicReservationSport);

//DB에 넣기위한 반복문   
  for(i in info['ListPublicReservationSport']['row'] ){
    let MINCLASSNM = info['ListPublicReservationSport']['row'][i]['MINCLASSNM']
    let SVCSTATNM = info['ListPublicReservationSport']['row'][i]['SVCSTATNM']
    let SVCNM = info['ListPublicReservationSport']['row'][i]['SVCNM']
    let PLACENM = info['ListPublicReservationSport']['row'][i]['PLACENM']
    let SVCURL =info['ListPublicReservationSport']['row'][i]['SVCURL']
    let X = info['ListPublicReservationSport']['row'][i]['X']
    let Y = info['ListPublicReservationSport']['row'][i]['Y']
    let AREANM = info['ListPublicReservationSport']['row'][i]['AREANM']
    let IMGURL = info['ListPublicReservationSport']['row'][i]['IMGURL']
//DB에 저장.
    await Opens.create({minclassnm:MINCLASSNM, svcstatnm:SVCSTATNM, svcnm:SVCNM, placenm:PLACENM, svcurl:SVCURL, x:X,y:Y, areanm:AREANM, imgurl:IMGURL })
  }  
});

