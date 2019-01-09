const {
  filter, join, map, pipe, replace, reverse, split, toLower,
} = require('ramda')
const { writeFileSync } = require('fs')

const papercall = require('../../../Downloads/Connectaha Submissions (6).json')


function extract () {
  const speakers = pipe(
    filter(_ => _.state === 'accepted'),
    map(_ => {
      const names = split(' ', _.name)
      const [last, ...rest] = reverse(names)
      const id = replace(/(&|\.)/g, '', toLower(join('-', names)))
      return {
        id,
        firstName: join(' ', reverse(rest)),
        lastName: last,
        bio: _.bio,
        title: _.title,
        description: _.description,
        organization: _.organization,
        photo: '/photos/',
      }
    })
  )(papercall)

  writeFileSync('./speakers.json', JSON.stringify(speakers))
}

module.exports = {
  extract,
}
