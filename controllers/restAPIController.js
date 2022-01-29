const fileSystem  = require('fs');
const APP_CWD     = process.cwd();

exports.getProfessional = (req, res, next) => {
  const FILE_PATH = APP_CWD + '/data/professional.jpg';
  fileSystem.readFile(FILE_PATH, (err, fileContent) => {
    if (err) {
      console.log('readFile ERROR: ', err);
      res.status(500).json({error: 'Server readFile ERROR: ', err});
    } else {
      const base64Image = new Buffer.from(fileContent).toString('base64');
      if (base64Image === '' || base64Image === 'undefiend') {
        console.log('base64Image ERROR: ', base64Image);
        res.status(500).json({error: 'Server ERROR: base64Image'});
      } else {
        res.status(200).json(
          {
            "professionalName":     "Carlos N Reina",
            "base64Image":          base64Image,
            "nameLink":             {"firstName": "Carlos", "url": "https://github.com/cnreina"},
            "primaryDescription":   "Father, programmer, child at hart.",
            "workDescription1":     "AV Design Engineer.",
            "workDescription2":     "SCRUM Master.",
            "linkTitleText":        "Links",
            "linkedInLink":         {"text": "LinkedIn", "link": "https://www.linkedin.com/in/cnreina/"},
            "githubLink":           {"text": "GitHub", "link": "https://github.com/cnreina"}
        });
      }
    }
  });
};




// exports.createPost = (req, res, next) => {
//   const title   = req.body.title;
//   const content = req.body.content;
//   // Create post in db
//   res.status(201).json({
//     message: 'Post created successfully!',
//     post: { id: new Date().toISOString(), title: title, content: content }
//   });
// };

