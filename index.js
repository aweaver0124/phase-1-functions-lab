const hq = 42

function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - hq);
}

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * 264;
}


function distanceTravelledInFeet(hq, pickup) {
return Math.abs((pickup - hq) * 264)
}

function calculatesFarePrice(hq, pickup) {
  let fare = (distanceTravelledInFeet(pickup, hq))
  if (fare <= 400) {
    return 0;

  } else if (fare > 2500){
    return 'cannot travel that far'

  } else if (fare > 2000){
    return 25;

  } else if (fare > 400){
    return (fare - 400) * 0.02

  }

}