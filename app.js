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
  const mapImage = document.getElementById("map-image");
  const mapContainer = document.getElementById("map-container");

  const pinpoint1 = document.getElementById("pp1");
  const pinpoint1Rect = pinpoint1.getBoundingClientRect();
  const imageRect = mapImage.getBoundingClientRect();
  const relativePP1Top = pinpoint1Rect.top - imageRect.top;
  const relativePP1Left = pinpoint1Rect.left - imageRect.left;

  let scale = 0.75;
  let translation = { x: 0, y: 0 };
  let isDragging = false;
  let previousMousePosition = null;

  mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
  mapImage.addEventListener("dragstart", (e) => {
    // 이벤트의 기본 동작을 막습니다.
    e.preventDefault();
  });
  mapContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  mapContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const dx = e.clientX - previousMousePosition.x;
      const dy = e.clientY - previousMousePosition.y;

      translation.x += dx;
      translation.y += dy;
      mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
      
      pinpoint1.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  mapContainer.addEventListener("mouseup", () => {
    isDragging = false;
  });

  mapContainer.addEventListener("wheel", (e) => {
    e.preventDefault();

    const scaleFactor = 1.1;
    scale = e.deltaY < 0 ? scale * scaleFactor : scale / scaleFactor;
    if (scale > 1.1) {
      scale = 1.1;
    }
    if (scale < 0.6) {
      scale = 0.6;
    }
    mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
    pinpoint1.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

    const newPP1Top = relativePP1Top * scale;
    const newPP1Left = relativePP1Left * scale;
    pinpoint1.style.top = `${newPP1Top}px`;
    pinpoint1.style.left = `${newPP1Left}px`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // 이전 스크립트 내용은 동일하게 유지됩니다.

  // 지도 확대/축소 및 드래그 기능
  const mapImage = document.getElementById("map-image");
  const mapContainer = document.getElementById("map-container");

  let scale = 0.75;
  let translation = { x: 0, y: 0 };
  let isDragging = false;
  let previousMousePosition = null;

  mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

  const pinpoint1 = document.getElementById("pp1");
  const pinpoint1Rect = pinpoint1.getBoundingClientRect();
  const imageRect = mapImage.getBoundingClientRect();
  const relativePP1Top = pinpoint1Rect.top - imageRect.top;
  const relativePP1Left = pinpoint1Rect.left - imageRect.left;

  mapContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  mapContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const dx = e.clientX - previousMousePosition.x;
      const dy = e.clientY - previousMousePosition.y;

      translation.x += dx;
      translation.y += dy;

      // 지도 이미지가 지정된 범위 내에서만 드래그할 수 있도록 제한
      translation.x = Math.min(0, Math.max(translation.x, mapContainer.clientWidth - mapImage.clientWidth * scale));
      translation.y = Math.min(0, Math.max(translation.y, mapContainer.clientHeight - mapImage.clientHeight * scale));

      mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
      
      pinpoint1.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  mapContainer.addEventListener("mouseup", () => {
    isDragging = false;
  });

  mapContainer.addEventListener("wheel", (e) => {
    e.preventDefault();

    const scaleFactor = 1.1;
    scale = e.deltaY < 0 ? scale * scaleFactor : scale / scaleFactor;
    if (scale > 1.1) {
      scale = 1.1;
    }
    if (scale < 0.6) {
      scale = 0.6;
    }
    mapImage.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
    pinpoint1.style.transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;

    const newPP1Top = relativePP1Top * scale;
    const newPP1Left = relativePP1Left * scale;
    pinpoint1.style.top = `${newPP1Top}px`;
    pinpoint1.style.left = `${newPP1Left}px`;
  });
});
