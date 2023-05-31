document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("#category-bar");
  const logoContainer = document.querySelector(".logo-container");

  window.addEventListener("scroll", function () {
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= logoContainer.offsetHeight) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  
});

const koreanCategoryButtonElement = document.getElementById('korean-button');
const westernCategoryButtonElement = document.getElementById('western-button');
const chineseCategoryButtonElement = document.getElementById('chinese-button');
const japaneseCategoryButtonElement = document.getElementById('japanese-button');
const bbqCategoryButtonElement = document.getElementById('bbq-button');
const cafeCategoryButtonElement = document.getElementById('cafe-button');


const resElements = [
  {id: 'korRes1', category: 'korean', index: 0},
  {id: 'korRes2', category: 'korean', index: 1},
  {id: 'korRes3', category: 'korean', index: 2},
  {id: 'wesRes1', category: 'western', index: 3},
  {id: 'wesRes2', category: 'western', index: 4},
  {id: 'chRes1', category: 'chinese', index: 5},
  {id: 'chRes2', category: 'chinese', index: 6},
  {id: 'chRes3', category: 'chinese', index: 7},
  {id: 'jpRes1', category: 'japanese', index: 8},
  {id: 'jpRes2', category: 'japanese', index: 9},
  {id: 'jpRes3', category: 'japanese', index: 10},
  {id: 'bbqRes1', category: 'bbq', index: 11},
  {id: 'bbqRes2', category: 'bbq', index: 12},
  {id: 'cafeRes1', category: 'cafe', index: 13},
  {id: 'cafeRes2', category: 'cafe', index: 14},
  {id: 'cafeRes3', category: 'cafe', index: 15},
  {id: 'cafeRes4', category: 'cafe', index: 16},
]

function displayList(category) {
    for (i = 0; i < resElements.length; i++) {
      const thisRes = document.getElementById(resElements[i].id);
      if (resElements[i].category == category) {
        // console.log(resElements[i].id);
        thisRes.classList.remove('blockDisplayNone');
      }
      else {
        thisRes.classList.add('blockDisplayNone');
      }
    }

    // console.log(category);
}

koreanCategoryButtonElement.addEventListener('click', function(){displayList('korean')})
westernCategoryButtonElement.addEventListener('click', function(){displayList('western')})
chineseCategoryButtonElement.addEventListener('click', function(){displayList('chinese')})
japaneseCategoryButtonElement.addEventListener('click', function(){displayList('japanese')})
bbqCategoryButtonElement.addEventListener('click', function(){displayList('bbq')})
cafeCategoryButtonElement.addEventListener('click', function(){displayList('cafe')})


var markersArray = [];

function initMap() {

  var mapStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers:[{visibility: "off"}]
    }
  ];

  // map options
  var options = {
    zoom: 17.3,
    center: {lat:37.5600, lng:127.0400}, // 세로, 가로
    styles: mapStyles
  }
  


  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // array of markers
  var markers = [
    {
      coords:{lat:37.5605, lng:127.0406},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>칠구네 신림동백순대</p> <img src='images/백순대.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
      category: "korean",
      index: 0
    },
    {
      coords: {lat:37.5585, lng:127.0399},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>이돈집</p> <img src='images/이돈집.png' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
      category: "korean",
      index: 1
    },
    {
      coords: {lat:37.5586, lng:127.0405},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>더진국수육국밥</p> <img src='images/더진국.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
      category: "korean",
      index: 2
    },
    {
      coords: {lat:37.5585, lng:127.0396},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>베네토피자앤펍</p> <img src='images/veneto.png' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png",
      category: "western",
      index:3
    },
    {
      coords: {lat:37.5607, lng:127.0398},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>봄의정원</p> <img src='images/봄의정원.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png",
      category: "western",
      index:4
    },
    {
      coords: {lat:37.5593, lng:127.0399}, // 세로, 가로
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>용용선생</p> <img src='images/용용선생.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
      category: "chinese",
      index:5
    },
    {
      coords: {lat:37.5597, lng:127.0409},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>금룡</p> <img src='images/금룡.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
      category: "chinese",
      index:6
    },
    {
      coords: {lat:37.55855, lng:127.04015},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>마쿠</p> <img src='images/maku.png' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
      category: "chinese",
      index:7
    },
    {
      coords: {lat:37.55855, lng:127.03945}, // 세로, 가로
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>히토리 우동</p> <img src='images/hitori.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png",
      category: "japanese",
      index:8
    },
    {
      coords: {lat:37.5587, lng:127.0398}, // 세로, 가로
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>하쿠나마타타</p> <img src='images/hakunamatata.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png",
      category: "japanese",
      index:9
    },
    {
      coords:{lat:37.5586, lng:127.0401},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>멘푸라</p> <img src='images/menpura.png' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png",
      category: "japanese",
      index:10
    },
    {
      coords:{lat:37.5600, lng:127.0396},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>뒷돈산</p> <img src='images/뒷돈산.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/pink-dot.png",
      category: "bbq",
      index:11
    },
    {
      coords: {lat:37.5591, lng:127.0403}, // 세로, 가로
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>장모족발</p> <img src='images/장모족발.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/pink-dot.png",
      category: "bbq",
      index:12
    },
    {
      coords: {lat:37.5587, lng:127.0406},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>설빙</p> <img src='images/설빙.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe",
      index:13
    },
    {
      coords: {lat:37.56025, lng:127.0406},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>짙은</p> <img src='images/짙은.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe",
      index:14
    },
    {
      coords: {lat:37.5613, lng:127.03955},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>어질 인</p> <img src='images/어질인.jpeg' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe",
      index:15
    },
    {
      coords: {lat:37.5602, lng:127.03945},
      content: "<p style='margin:0 0 0.4rem 0.3rem; font-size:1rem; font-weight:bold; text-align:center; color:rgb(0, 100, 255)'>띵똥와플</p> <img src='images/띵똥.png' style='height:100px; object-fit:cover; margin-left:0.3rem; border-radius:4px;'/>",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe",
      index:16
    },
  ];

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    // add marker
    addMarker(markers[i]);
  }




  function displayRes(index) { // 해당 식당만 표시
    for (i = 0; i < resElements.length; i++) {
      const thisRes = document.getElementById(resElements[i].id);
      if (resElements[i].index == index) {
        // console.log(resElements[i].id);
        thisRes.classList.remove('blockDisplayNone');
      }
      else {
        thisRes.classList.add('blockDisplayNone');
      }
    }

    
  }
  
  
  var infowindow = null;
  // var timeoutID = null;
  
  
  // add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      // icon: props.icon
    });

    markersArray.push(marker);
    // console.log(markersArray);
    
    marker.addListener('click', function() {
      
      if(infowindow) {
        infowindow.close();
        // clearTimeout(timeoutID);
      }
      infowindow = new google.maps.InfoWindow({
        content: props.content
      });
      infowindow.open(map, marker); // 마커 누르면 윈도우 생성
      // timeoutID = setTimeout(function(){infowindow.close();}, '3000'); // 3초 뒤 윈도우 닫음
      // openCategory(props.category);
      displayRes(props.index); // 클릭된 식당 정보만 표시됨
    });


  }
  


  // category bar button을 누르면 해당 카테고리에 해당하는 마커들만 보임
  function clearOverlays() { // 모든 마커 삭제(표시 안 됨)
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }
  

  function displayCategoryMarkers(category) {
    // console.log(category)
    clearOverlays();
    var latLng = new google.maps.LatLng(37.5600, 127.0400);
    map.setCenter(latLng);
    map.setZoom(17.3);
    // map.setCenter(127.0400, 37.5600, 17.3);
    

    for (i = 0; i < markers.length; i++) {
      if (markers[i].category == category) {
        addMarker(markers[i]);
        // console.log(markers[i].coords)
      }

    }
  }

  koreanCategoryButtonElement.addEventListener('click', function(){displayCategoryMarkers('korean')})
  westernCategoryButtonElement.addEventListener('click', function(){displayCategoryMarkers('western')})
  chineseCategoryButtonElement.addEventListener('click', function(){displayCategoryMarkers('chinese')})
  japaneseCategoryButtonElement.addEventListener('click', function(){displayCategoryMarkers('japanese')})
  bbqCategoryButtonElement.addEventListener('click', function(){displayCategoryMarkers('bbq')})
  cafeCategoryButtonElement.addEventListener('click', function(){displayCategoryMarkers('cafe')})





  // 왼쪽에서 식당 이름 눌리면 해당 마커 포커스
  const ResButtons = [{ID:'korRes1btn', mIndex: 0}, {ID: 'korRes2btn', mIndex: 1}, {ID: 'korRes3btn', mIndex:2}, 
  {ID:'wesRes1btn', mIndex: 3}, {ID:'wesRes2btn', mIndex: 4},
  {ID:'chRes1btn', mIndex: 5}, {ID:'chRes2btn', mIndex: 6}, {ID:'chRes3btn', mIndex: 7},
  {ID:'jpRes1btn', mIndex: 8}, {ID:'jpRes2btn', mIndex: 9}, {ID:'jpRes3btn', mIndex: 10},
  {ID:'bbqRes1btn', mIndex: 11}, {ID:'bbqRes2btn', mIndex: 12},
  {ID:'cafeRes1btn', mIndex: 13}, {ID:'cafeRes2btn', mIndex: 14}, {ID:'cafeRes3btn', mIndex: 15}, {ID:'cafeRes4btn', mIndex: 16}];

  for (i = 0; i < ResButtons.length; i++) {
    const thisResButton = document.getElementById(ResButtons[i].ID);
    const thisResMarker = markers[ResButtons[i].mIndex];
    thisResButton.addEventListener('click', function() {
      // 지금 열려 있는 info window 다 지워
      if (infowindow) {
        infowindow.close();
      }
      // 지금 클릭된 식당의 마커 포커스, info window open
      const marker = new google.maps.Marker({
        position: thisResMarker.coords,
        map:map,
      });
      markersArray.push(marker);
      map.panTo(marker.getPosition());
      map.setZoom(18.2); // focus 하면 줌 조금 더 당겨
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.content,
      });
      infowindow.open(map, marker);
    })
  }


}
