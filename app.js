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


  const koreanCategoryButtonElement = document.getElementById('korean-button');
  const westernCategoryButtonElement = document.getElementById('western-button');
  const chineseCategoryButtonElement = document.getElementById('chinese-button');
  const japaneseCategoryButtonElement = document.getElementById('japanese-button');
  const bbqCategoryButtonElement = document.getElementById('bbq-button');
  const cafeCategoryButtonElement = document.getElementById('cafe-button');
  
  const allCategoryBoxElements = document.querySelectorAll('.category-box-list .category-box');
  
  function displayList(thisListID) {
      const blankCategoryBox = document.getElementById('blank-category-box');
      const thisCategoryBox = document.getElementById(thisListID);
      blankCategoryBox.classList.add('blockDisplayNone');
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

});





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
      name: "칠구네 신림동백순대"
    },
    {
      coords: {lat:37.5585, lng:127.0399},
      name: "이돈집"
    },
    {
      coords: {lat:37.5586, lng:127.0405},
      name: "더진국수육국밥"
    },
    {
      coords: {lat:37.5585, lng:127.0396},
      name: "베네토피자앤펍"
    },
    {
      coords: {lat:37.5607, lng:127.0398},
      name: "봄의정원"
    },
    {
      coords: {lat:37.5593, lng:127.0399}, // 세로, 가로
      name: "용용선생"
    },
    {
      coords: {lat:37.5597, lng:127.0409},
      name: "금룡"
    },
    {
      coords: {lat:37.55855, lng:127.04015},
      name: "마쿠"
    },
    {
      coords: {lat:37.55855, lng:127.03945}, // 세로, 가로
      name: "히토리 우동"
    },
    {
      coords: {lat:37.5587, lng:127.0398}, // 세로, 가로
      name: "하쿠나마타타"
    },
    {
      coords:{lat:37.5586, lng:127.0401},
      name: "멘푸라"
    },
    {
      coords:{lat:37.5600, lng:127.0396},
      name: "뒷돈산"
    },
    {
      coords: {lat:37.5591, lng:127.0403}, // 세로, 가로
      name: "장모족발"
    },
    {
      coords: {lat:37.5587, lng:127.0406},
      name: "설빙"
    },
    {
      coords: {lat:37.56025, lng:127.0406},
      name: "짙은"
    },
    {
      coords: {lat:37.5613, lng:127.03955},
      name: "어질 인"
    },
    {
      coords: {lat:37.5602, lng:127.03945},
      name: "띵똥와플"
    },
  ];

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    // add marker
    addMarker(markers[i]);
  }

  var infowindow = null;
  var timeoutID = null;

  // add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
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
    });
  }

  document.getElementById("korRes1btn").addEventListener("click", function() {
    // Center the map on the marker's position and open the info window
    const markerData = markers.find((m) => m.title === "kmarker1");
    if (markerData) {
      const marker = new google.maps.Marker({
        position: markerData.coords,
        map:map,
        title: markerData.title
      });
      map.panTo(marker.getPosition());
      var infowindow = new google.maps.InfoWindow({
        content: markerData.content,
      });
      infowindow.open(map, marker);
    }
  });

  document.getElementById("korRes2btn").addEventListener("click", function() {
    // Center the map on the marker's position and open the info window
    const markerData = markers.find((m) => m.title === "kmarker2");
    if (markerData) {
      const marker = new google.maps.Marker({
        position: markerData.coords,
        map:map,
        title: markerData.title
      });
      map.panTo(marker.getPosition());
      var infowindow = new google.maps.InfoWindow({
        content: markerData.content,
      });
      infowindow.open(map, marker);
    }
  });

  document.getElementById("korRes3btn").addEventListener("click", function() {
    // Center the map on the marker's position and open the info window
    const markerData = markers.find((m) => m.title === "kmarker3");
    if (markerData) {
      const marker = new google.maps.Marker({
        position: markerData.coords,
        map:map,
        title: markerData.title
      });
      map.panTo(marker.getPosition());
      var infowindow = new google.maps.InfoWindow({
        content: markerData.content,
      });
      infowindow.open(map, marker);
    }
  });

}
