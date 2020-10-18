export const truncateTeamName = (str) => {
    if (str === "Manchester United") {
      return "Man United";
    } else if (str === "Manchester City") {
      return "Man City";
    } else if (str === "Crystal Palace") {
      return "C.Palace";
    }  else if(str === "Sheffield Utd") {
      return "Sheffield"
    }
     else {
      return str;
    }
  };