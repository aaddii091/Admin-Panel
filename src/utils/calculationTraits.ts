export const calcExtroversion = (data: any) => {
  console.log('calcExtroversion Data: ', data);
  return 20 + Number(data[0]) - Number(data[5]) + Number(data[10]) - Number(data[15]) + Number(data[20]) - Number(data[25]) + Number(data[30]) - Number(data[35]) + Number(data[40]) - Number(data[45]);
}
export const calcAgreeableness = (data: any) => {
  return 14 - Number(data[1]) + Number(data[6]) - Number(data[11]) + Number(data[16]) - Number(data[21]) + Number(data[26]) - Number(data[31]) + Number(data[36]) - Number(data[41]) + Number(data[46]);
}
export const calcConscientiousness = (data: any) => {
  return 14 + Number(data[2]) - Number(data[7]) + Number(data[12]) - Number(data[17]) + Number(data[22]) - Number(data[27]) + Number(data[32]) - Number(data[37]) + Number(data[42]) + Number(data[47]) + 2;
}
export const calcNeuroticism = (data: any) => {
  return 38 - Number(data[3]) + Number(data[8]) - Number(data[13]) + Number(data[18]) - Number(data[23]) - Number(data[28]) - Number(data[33]) - Number(data[38]) - Number(data[43]) - Number(data[48]) - 6;
}
export const calcOpennessToExperience = (data: any) => {
  return 8 + Number(data[4]) - Number(data[9]) + Number(data[14]) - Number(data[19]) + Number(data[24]) - Number(data[29]) + Number(data[34]) + Number(data[39]) + Number(data[44]) + Number(data[49]) + 4;
}