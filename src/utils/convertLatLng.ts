const ConvertDMSToDD = (degrees, minutes, seconds, direction) => {
  var dd = degrees + minutes / 60 + seconds / (60 * 60);
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
};

export function convertDD(input: string) {
  var parts = input.split(/[^\d\w\.]+/);
  var lat = ConvertDMSToDD(
    parseFloat(parts[0]),
    parseFloat(parts[1]),
    parseFloat(parts[2]),
    parts[3]
  );
  var lng = ConvertDMSToDD(
    parseFloat(parts[4]),
    parseFloat(parts[5]),
    parseFloat(parts[6]),
    parts[7]
  );
  return [lat, lng];
}
