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

const allCategoryBoxElements = document.querySelectorAll('.category-box-list .category-box');

function displayList(thisListID) {
    // const blankCategoryBox = document.getElementById('blank-category-box');
    const thisCategoryBox = document.getElementById(thisListID);
    // blankCategoryBox.classList.add('blockDisplayNone');
    for (const categoryBoxElement of allCategoryBoxElements) {
        categoryBoxElement.classList.add('blockDisplayNone');
    }
    thisCategoryBox.classList.remove('blockDisplayNone');
}

koreanCategoryButtonElement.addEventListener('click', function(){displayList('korean-category-box')})
westernCategoryButtonElement.addEventListener('click', function(){displayList('western-category-box')})
chineseCategoryButtonElement.addEventListener('click', function(){displayList('chinese-category-box')})
japaneseCategoryButtonElement.addEventListener('click', function(){displayList('japanese-category-box')})
bbqCategoryButtonElement.addEventListener('click', function(){displayList('bbq-category-box')})
cafeCategoryButtonElement.addEventListener('click', function(){displayList('cafe-category-box')})





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
      name: "칠구네 신림동백순대",
      icon: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
      category: "korean"
    },
    {
      coords: {lat:37.5585, lng:127.0399},
      name: "이돈집",
      icon: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
      category: "korean"
    },
    {
      coords: {lat:37.5586, lng:127.0405},
      name: "더진국수육국밥",
      icon: "http://maps.google.com/mapfiles/ms/micons/red-dot.png",
      category: "korean"
    },
    {
      coords: {lat:37.5585, lng:127.0396},
      name: "베네토피자앤펍",
      icon: "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png",
      category: "western"
    },
    {
      coords: {lat:37.5607, lng:127.0398},
      name: "봄의정원",
      icon: "http://maps.google.com/mapfiles/ms/micons/yellow-dot.png",
      category: "western"
    },
    {
      coords: {lat:37.5593, lng:127.0399}, // 세로, 가로
      name: "용용선생",
      icon: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
      category: "chinese"
    },
    {
      coords: {lat:37.5597, lng:127.0409},
      name: "금룡",
      icon: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
      category: "chinese"
    },
    {
      coords: {lat:37.55855, lng:127.04015},
      name: "마쿠",
      icon: "http://maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
      category: "chinese"
    },
    {
      coords: {lat:37.55855, lng:127.03945}, // 세로, 가로
      name: "히토리 우동",
      icon: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png",
      category: "japanese"
    },
    {
      coords: {lat:37.5587, lng:127.0398}, // 세로, 가로
      name: "하쿠나마타타",
      icon: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png",
      category: "japanese"
    },
    {
      coords:{lat:37.5586, lng:127.0401},
      name: "멘푸라",
      icon: "http://maps.google.com/mapfiles/ms/micons/orange-dot.png",
      category: "japanese"
    },
    {
      coords:{lat:37.5600, lng:127.0396},
      name: "뒷돈산",
      icon: "http://maps.google.com/mapfiles/ms/micons/pink-dot.png",
      category: "bbq"
    },
    {
      coords: {lat:37.5591, lng:127.0403}, // 세로, 가로
      name: "장모족발",
      icon: "http://maps.google.com/mapfiles/ms/micons/pink-dot.png",
      category: "bbq"
    },
    {
      coords: {lat:37.5587, lng:127.0406},
      name: "설빙",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe"
    },
    {
      coords: {lat:37.56025, lng:127.0406},
      name: "짙은",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe"
    },
    {
      coords: {lat:37.5613, lng:127.03955},
      name: "어질 인",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe"
    },
    {
      coords: {lat:37.5602, lng:127.03945},
      name: "띵똥와플",
      icon: "http://maps.google.com/mapfiles/ms/micons/purple-dot.png",
      category: "cafe"
    },
  ];

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    // add marker
    addMarker(markers[i]);
  }

  var infowindow = null;
  var timeoutID = null;

  function openCategory(category) {
    if (category == "korean") {
      displayList('korean-category-box');
    }
    if (category == "western") {
      displayList('western-category-box');
    }
    if (category == "chinese") {
      displayList('chinese-category-box');
    }
    if (category == "japanese") {
      displayList('japanese-category-box');
    }
    if (category == "bbq") {
      displayList('bbq-category-box');
    }
    if (category == "cafe") {
      displayList('cafe-category-box');
    }
  }

  // add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        icon: props.icon
    });

    marker.addListener('click', function() {
      
      if(infowindow) {
        infowindow.close();
        clearTimeout(timeoutID);
      }
      infowindow = new google.maps.InfoWindow({
        content: props.name
      });
      infowindow.open(map, marker); // 마커 누르면 윈도우 생성
      timeoutID = setTimeout(function(){infowindow.close();}, '3000'); // 3초 뒤 윈도우 닫음
      openCategory(props.category);
    });
  }

  const korResButtons = [{ID:'korRes1btn', mIndex: 0}, {ID: 'korRes2btn', mIndex: 1}, {ID: 'korRes3btn', mIndex:2}];
  const wesResButtons = [{ID:'wesRes1btn', mIndex: 3}, {ID:'wesRes2btn', mIndex: 4}];
  const chResButtons = [{ID:'chRes1btn', mIndex: 5}, {ID:'chRes2btn', mIndex: 6}, {ID:'chRes3btn', mIndex: 7}];
  const jpResButtons = [{ID:'jpRes1btn', mIndex: 8}, {ID:'jpRes2btn', mIndex: 9}, {ID:'jpRes3btn', mIndex: 10}];
  const bbqResButtons = [{ID:'bbqRes1btn', mIndex: 11}, {ID:'bbqRes2btn', mIndex: 12}];
  const cafeResButtons = [{ID:'cafeRes1btn', mIndex: 13}, {ID:'cafeRes2btn', mIndex: 14}, {ID:'cafeRes3btn', mIndex: 15}, {ID:'cafeRes4btn', mIndex: 16}];

  for (i = 0; i < korResButtons.length; i++) {
    const thisResButton = document.getElementById(korResButtons[i].ID);
    const thisResMarker = markers[korResButtons[i].mIndex];
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
      map.panTo(marker.getPosition());
      map.setZoom(18.2); // focus 하면 줌 조금 더 당겨
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.name,
      });
      infowindow.open(map, marker);
    })
  }

  for (i = 0; i < wesResButtons.length; i++) {
    const thisResButton = document.getElementById(wesResButtons[i].ID);
    const thisResMarker = markers[wesResButtons[i].mIndex];
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
      map.panTo(marker.getPosition());
      map.setZoom(18.2);
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.name,
      });
      infowindow.open(map, marker);
    })
  }

  for (i = 0; i < chResButtons.length; i++) {
    const thisResButton = document.getElementById(chResButtons[i].ID);
    const thisResMarker = markers[chResButtons[i].mIndex];
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
      map.panTo(marker.getPosition());
      map.setZoom(18.2);
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.name,
      });
      infowindow.open(map, marker);
    })
  }

  for (i = 0; i < jpResButtons.length; i++) {
    const thisResButton = document.getElementById(jpResButtons[i].ID);
    const thisResMarker = markers[jpResButtons[i].mIndex];
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
      map.panTo(marker.getPosition());
      map.setZoom(18.2);
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.name,
      });
      infowindow.open(map, marker);
    })
  }

  for (i = 0; i < bbqResButtons.length; i++) {
    const thisResButton = document.getElementById(bbqResButtons[i].ID);
    const thisResMarker = markers[bbqResButtons[i].mIndex];
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
      map.panTo(marker.getPosition());
      map.setZoom(18.2);
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.name,
      });
      infowindow.open(map, marker);
    })
  }

  for (i = 0; i < cafeResButtons.length; i++) {
    const thisResButton = document.getElementById(cafeResButtons[i].ID);
    const thisResMarker = markers[cafeResButtons[i].mIndex];
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
      map.panTo(marker.getPosition());
      map.setZoom(18.2);
      infowindow = new google.maps.InfoWindow({
        content: thisResMarker.name,
      });
      infowindow.open(map, marker);
    })
  }

  

}
