var catsArray = [{
  'id': 1,
  'name':'missy',
  'imgSource': 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=320&h=248',
  'clickCount': 0,
  'nickNames': ['tiger', 'troublemaker']
},
{
  'id': 2,
  'name':'cleopatra',
  'imgSource': 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=320&h=224',
  'clickCount': 0,
  'nickNames': ['panther']
},
{
  'id': 3,
  'name':'fuji',
  'imgSource': 'http://www.pageresource.com/wallpapers/wallpaper/cats-cute-cat-animal-cute-grass-photo.jpg',
  'clickCount': 0,
  'nickNames': ['machine', 'boyscout']

},
{
  'id': 4,
  'name':'makarena',
  'imgSource': 'http://static2.businessinsider.com/image/4f3433986bb3f7b67a00003c/a-parasite-found-in-cats-could-be-manipulating-our-brains.jpg',
  'clickCount': 0,
  'nickNames': ['magic, show']
}];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSource = ko.observable(data.imgSource);
  this.nickNames = ko.observableArray(data.nickNames);

  this.level = ko.computed( function() {
    var title;
    var clicks = this.clickCount();

    if ( clicks  < 0 ) {
      title = 'newborn'

    } else if ( clicks  < 10 ) {
      title = 'newborn';

    } else if ( clicks  < 20 ) {
      title = 'infant';

    } else if ( clicks < 30 ) {
      title = 'teen';

    } else if ( clicks < 40 ) {
      title = 'adolescent';

    } else {
      title = 'adult';
    }

    return title;
  }, this);

}

// make cats show in list

// make currentCat chagne when cat on list is changed

// high five



var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);

  catsArray.forEach( function(cat) {
    self.catList.push( new Cat( cat ));
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.updateCount = function() {
    var cat = self.currentCat();
    cat.clickCount( cat.clickCount() + 1);
  };

  this.showAnotherCat = function(data, event) {
    console.log( data, event );
    self.currentCat(data);
  }
}


ko.applyBindings( new ViewModel() );
