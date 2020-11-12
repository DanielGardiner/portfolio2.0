function fluidType({
  minFontSize = "16px",
  maxFontSize = "20px",
  minVw = "300px",
  maxVw = "1800px",
} = {}) {
  const minFontSizeNoUnit = minFontSize.replace(/px/, "");
  const maxFontSizeNoUnit = maxFontSize.replace(/px/, "");
  const minVwNoUnit = minVw.replace(/px/, "");
  const maxVwNoUnit = maxVw.replace(/px/, "");

  if (parseInt(minFontSizeNoUnit) >= parseInt(maxFontSizeNoUnit)) {
    throw "minFontSize larger than maxFontSize";
  }

  if (parseInt(minVwNoUnit) >= parseInt(maxVwNoUnit)) {
    throw "minVw larger than maxVw";
  }

  return `calc(${minFontSize} + (${maxFontSizeNoUnit} - ${minFontSizeNoUnit}) * ((100vw - ${minVw}) / (${maxVwNoUnit} - ${minVwNoUnit})))`;
}

export { fluidType };
