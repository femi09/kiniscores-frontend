export const formatDate = (utcDate) => {
  let date = new Date(utcDate);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let formatted_date =
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();

  return formatted_date;
};

export const truncateTeamName = (str) => {
  if (str === "Manchester United FC") {
    return "Man United FC";
  } else if (str === "Manchester City FC") {
    return "Man City FC";
  } else if (str === "Wolverhampton Wanderers FC") {
    return "Wolves FC";
  } else if (str === "Brighton and Holve Albion FC") {
    return "Brighton FC";
  } else if (str === "Newcastle United FC") {
    return "Newcastle FC";
  } else if (str === "Westham United FC") {
    return "Westham FC";
  }
   else if (str === "Westham United FC") {
    return "Westham FC"
   } 

   else if (str === "Westham United FC") {
    return "Westham FC"
   } 
   else if (str === "Westham United FC") {
    return "Westham FC"
   } 
   else if (str === "Westham United FC") {
    return "Westham FC"
   } 
   else if (str === "Westham United FC") {
    return "Westham FC"
   } 
  else {
    return str;
  }
};
