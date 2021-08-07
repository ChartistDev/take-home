function capitalize(input, seperator) {
  var words = input.split(seperator);
  var CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(
      element[0].toUpperCase() + element.slice(1, element.length)
    );
  });
  return CapitalizedWords.join(seperator);
}

export default capitalize;
