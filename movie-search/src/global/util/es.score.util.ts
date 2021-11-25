export const getEsRankScore = (target:string, delimiter= "," ): JSON => {
  const scores:JSON = JSON.parse("{}");
  target.split(delimiter).forEach((item, i)=>{
    scores[item] = 1/(i+1);
  });
  return scores;
};

export const getKeyStringsFromEsRankScore = (scores:string|JSON) => {
  if(typeof scores === "string"){
   scores = JSON.parse(scores);
  }
  return Object.keys(scores).join(",");
};
