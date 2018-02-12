
console.log("GT 25")

// create map object of article
// create map object of note
// create variable answer value 'true'
//
// loop{
//   if answer === false { return false }
//   compare values of keys if equal or greater then asnser ? ture : false
// }
//
// return answer

const hrnote = (note, article) => {

  let answer = true

  const mapNote = note.split(" ")
    .reduce((pv, cv) => {
      pv[cv] = (pv[cv] + 1 )|| 1
      return pv
    }, {})

  const mapArt = article.split(" ")
    .reduce((pv, cv) => {
      pv[cv] = (pv[cv] + 1) || 1
      return pv
    } ,{})


    Object.keys(mapNote).forEach((x) => {
      if(mapNote[x] > mapArt[x] || mapArt[x] === undefined){ answer = false }
    })

    return answer
}

const note = 'this is a secret note for you from a secret admirer'
const maga = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
console.log( hrnote(note, maga) );



// let mag_obj = mag_arr.reduce((pv, cv) => {
//   pv[cv] = (pv[cv] + 1) || 1
//   return pv
// }, {})
