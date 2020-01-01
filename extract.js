const {
  concat,
  filter,
  join,
  map,
  pipe,
  replace,
  reverse,
  split,
  toLower
} = require("ramda");
const { createWriteStream, existsSync, writeFileSync } = require("fs");
const https = require("https");
const Json2csvParser = require("json2csv").Parser;

const papercall = require("./Connectaha2020Submissions.json");

function email() {
  const speakers = pipe(
    filter(_ => _.state === "accepted"),
    map(_ => {
      const names = split(" ", _.name);
      const [last, ...rest] = reverse(names);
      return {
        firstName: join(" ", reverse(rest)),
        lastName: last,
        email: _.email
      };
    })
  )(papercall);

  const fields = ["firstName", "lastName", "email"];
  const opts = { fields };

  try {
    const parser = new Json2csvParser(opts);
    const csv = parser.parse(speakers);
    writeFileSync("./emails.csv", csv);
  } catch (err) {
    console.error(err);
  }
}

function extract() {
  const secondSpeakers = pipe(
    filter(_ => _.state === "accepted" && _.confirmed && _.name_2),
    map(_ => {
      const names = split(" ", _.name_2);
      const [last, ...rest] = reverse(names);
      const id = replace(/(&|\.)/g, "", toLower(join("-", names)));
      return {
        id,
        firstName: join(" ", reverse(rest)),
        lastName: last,
        bio: _.bio_2,
        title: _.title,
        description: _.description || _.abstract,
        organization: _.organization_2,
        photoUrl: _.avatar_2
      };
    })
  )(papercall);

  const speakers = pipe(
    filter(_ => _.state === "accepted" && _.confirmed),
    map(_ => {
      const names = split(" ", _.name);
      const [last, ...rest] = reverse(names);
      const id = replace(/(&|\.)/g, "", toLower(join("-", names)));
      return {
        id,
        firstName: join(" ", reverse(rest)),
        lastName: last,
        bio: _.bio,
        title: _.title,
        description: _.description || _.abstract,
        organization: _.organization,
        photoUrl: _.avatar
      };
    }),
    concat(secondSpeakers)
  )(papercall);

  writeFileSync("./speakers.json", JSON.stringify(speakers));
}

function downloadPhotos() {
  const speakers = require("./speakers.json");
  const photoSpeakers = speakers.map(speaker => {
    const location = `./public/photos/speakers/${speaker.id}.png`;
    speaker.photo = `/photos/speakers/${speaker.id}.png`;
    const photo = createWriteStream(location);
    https.get(speaker.photoUrl, response => {
      response.pipe(photo);
      photo.on("finish", () => {
        photo.close(() => {}); // close() is async, call cb after close completes.
      });
    });
    return speaker;
  });

  writeFileSync("./speakers.json", JSON.stringify(photoSpeakers));
}

function updatePhotos() {
  const speakers = require("./speakers.json");
  const photoSpeakers = speakers.map(speaker => {
    const location = `./public/photos/speakers/${speaker.id}.png`;
    speaker.photo = `/photos/speakers/${speaker.id}.png`;
    if (!existsSync(location)) {
      const photo = createWriteStream(location);
      https.get(speaker.photoUrl, response => {
        response.pipe(photo);
        photo.on("finish", () => {
          photo.close(() => {}); // close() is async, call cb after close completes.
        });
      });
    }
    return speaker;
  });

  writeFileSync("./speakers.json", JSON.stringify(photoSpeakers));
}

module.exports = {
  email,
  extract,
  downloadPhotos,
  updatePhotos
};
