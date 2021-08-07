const splitString = (str, navigations) => {
  let splt = str.split(" & ");
  splt.forEach((spl) => {
    let eql = spl.split(" = ");
    navigations = matchNav(eql[0], navigations);
  });
  return navigations;
};

function matchNav(str, navigations) {
  let index = navigations.findIndex((nav) => {
    return nav === str;
  });
  if (index === -1) {
    navigations.push(str);
  }
  return navigations;
}

export default splitString;
