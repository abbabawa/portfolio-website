const getImage = (id) => {
  let res = [];
  if (id === 1) {
    res = [
      "/images/tt1.png",
      "/images/tt2.png",
      "/images/tt3.png",
      "/images/tt4.png",
    ];
  } else if (id === 2) {
    res = [
      "/images/dannyvet.png",
      "/images/dannyvet2.png",
      "/images/dannyvet3.png",
      "/images/dannyvet4.png",
    ];
  } else if (id === 3) {
    res = [
      "/images/pms.png",
      "/images/pms2.png",
      "/images/pms3.png",
      "/images/pms4.png",
    ];
  } else if (id === 4) {
    res = ["/images/tt-web.png"];
  }
  return res;
};

export default getImage;
