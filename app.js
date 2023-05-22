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

  // const mapImage = document.getElementById("map-image");
  // const mapContainer = document.getElementById("map-container");

  // let scale = 1;
  // let translation = { x: 0, y: 0 };
  // let isDragging = false;
  // let previousMousePosition = null;

  // mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
  // mapImage.addEventListener("dragstart", (e) => {
  //   // 이벤트의 기본 동작을 막습니다.
  //   e.preventDefault();
  // });
  // mapContainer.addEventListener("mousedown", (e) => {
  //   isDragging = true;
  //   previousMousePosition = { x: e.clientX, y: e.clientY };
  // });

  // mapContainer.addEventListener("mousemove", (e) => {
  //   if (isDragging) {
  //     const dx = e.clientX - previousMousePosition.x;
  //     const dy = e.clientY - previousMousePosition.y;

  //     translation.x += dx;
  //     translation.y += dy;
  //     mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

  //     previousMousePosition = { x: e.clientX, y: e.clientY };
  //   }
  // });

  // mapContainer.addEventListener("mouseup", () => {
  //   isDragging = false;
  // });

  // mapContainer.addEventListener("wheel", (e) => {
  //   e.preventDefault();

  //   const scaleFactor = 1.1;
  //   scale = e.deltaY < 0 ? scale * scaleFactor : scale / scaleFactor;
  //   mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
  // });
});




// document.addEventListener("DOMContentLoaded", function () {
//   // 이전 스크립트 내용은 동일하게 유지됩니다.

//   // 지도 확대/축소 및 드래그 기능
//   const mapImage = document.getElementById("map-image");
//   const mapContainer = document.getElementById("map-container");

//   let scale = 1;
//   let translation = { x: 0, y: 0 };
//   let isDragging = false;
//   let previousMousePosition = null;

//   mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

//   mapContainer.addEventListener("mousedown", (e) => {
//     isDragging = true;
//     previousMousePosition = { x: e.clientX, y: e.clientY };
//   });

//   mapContainer.addEventListener("mousemove", (e) => {
//     if (isDragging) {
//       const dx = e.clientX - previousMousePosition.x;
//       const dy = e.clientY - previousMousePosition.y;

//       translation.x += dx;
//       translation.y += dy;

//       // 지도 이미지가 지정된 범위 내에서만 드래그할 수 있도록 제한
//       translation.x = Math.min(0, Math.max(translation.x, mapContainer.clientWidth - mapImage.clientWidth * scale));
//       translation.y = Math.min(0, Math.max(translation.y, mapContainer.clientHeight - mapImage.clientHeight * scale));

//       mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

//       previousMousePosition = { x: e.clientX, y: e.clientY };
//     }
//   });

//   mapContainer.addEventListener("mouseup", () => {
//     isDragging = false;
//   });

//   mapContainer.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scaleFactor = 1.1;
//     scale = e.deltaY < 0 ? scale * scaleFactor : scale / scaleFactor;
//     mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
//   });
// });



function initMap() {

  // map options
  var options = {
    zoom: 17.3,
    center: {lat:37.5600, lng:127.0400} // 세로, 가로
  }

  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // array of markers
  var markers = [
    { // 왕십리역
      coords:{lat:37.5619, lng:127.0385},
      iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content: '<h1>WangSimNi Station</h1>'
    },
    {coords:{lat:37.5572, lng:127.0454},}, // 한양대학교
    // {coords:{lat:37.5590, lng:127.0400}}, // 그 사이
    {
      coords:{lat:37.5600, lng:127.0396},
      content: "뒷돈산",
      title: "kmarker1"
    }, // 뒷돈산
    {
      coords:{lat:37.5586, lng:127.0402},
      content: "멘푸라",
      title: "kmarker2"
    }, // 멘푸라
    {
      coords:{lat:37.5605, lng:127.0406},
      content: "칠구네 신림동백순대",
      title: "kmarker3"
    } // 칠구네 신림동백순대
  ];

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    // add marker
    addMarker(markers[i]);
  }

  // add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon: props.iconImage
        title: props.title
    });

    // check for custom icon
    if(props.iconImage) {
        marker.setIcon(props.iconImage); // set icon
    }
    if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
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
