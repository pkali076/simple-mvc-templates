// There is no reason for the name here except as an
// example of how to set something for the POST
let name = [];

const hostIndex = (req, res) => {
  res.render('index', {
    title: 'Home',
    pageName: 'Home Page',
    userName: name,
  }); //what view do I want this to load?
  //anything that ends in .handlebars is a view template

  //title is considered a variable, and the value is replaced in each variable called title
};

const hostPage1 = (req, res) => {
  return res.render('page1'),{
    title: 'Page 1',
    names: ['philip, batman, allison'],
  };
};

const hostPage2 = (req, res) => {
  return res.render('page2');
};

const getName = (req, res) => {
  return res.json({name});
};

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname){
    return res.status(400).json({
      error: 'firstname and lastname are both required',
      id: 'setNameMissingParams',
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({name});
};

const notFound = (req, res) => {
  return res.render('notFound', {
    page: req.url,
  })
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
