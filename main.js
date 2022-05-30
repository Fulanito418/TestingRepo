//Library Build
//Books Properties: 
author (string), 
title (string), 
pages (number), 
isCheckedOut (boolean, initially false) 
ratings (array, initially empty)

/// Movie Properties: 

director (string), 
title (string), 
runTime (number), 

isCheckedOut (boolean, initially false), 
ratings (array, initially empty)

//CD Properties: 
artist (string), 
title (string), 
isCheckedOut (boolean, initially false), 
ratings (array, initially empty)
songs (array of strings)


class Media {
  constructor(author, title, pages, isCheckedOut, ratings) {
    this._author = author;
    this._title = title;
    this._pages = pages;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }

    get author() = this._author;
    get title() = this._title;
    get pages() = this._pages;
    get ischeckedOut() = this._isCheckedOut
    get ratings = this._ratings;

    getAverageRating() {
      return this._ratings.reduce(acc,cur)
    } 
}

/*


class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword() {
      return Math.floor(Math.random() * 10000)
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  */