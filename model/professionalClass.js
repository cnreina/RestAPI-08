const fileSystem  = require('fs');
const APP_CWD     = process.cwd();
const filePath    = APP_CWD + '/data/professional.json';

module.exports = class ProfessionalClass {
  constructor(tags, imageUrl, price, name, description) {
    this.tags = tags;
    this.imageUrl = imageUrl;
    this.price = price;
    this.name = name;
    this.description = description;
  }

  static getItems(callBack) {
    getItemsFromFile(callBack);
  }

  static getItemsByTag(tags, callBack) {
    getItemsFromFile(items => {
      const item = items.find(currentItem => currentItem.tags === tags);
      callBack(item);
    });
  }

};

const getItemsFromFile = callBack => {
  fileSystem.readFile(filePath, (err, fileContent) => {
    if (err) {
      callBack([]);
    } else {
      this.id = Math.random().toString();
      callBack(JSON.parse(fileContent));
    }
  });
};
