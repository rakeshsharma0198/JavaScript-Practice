

const fibRec2 = (position) => {
  if(position < 3) { return 1}
  else{ return fibRec2(position - 1) + fibRec2(position - 2) }
}


console.log(fibRec2(12))
