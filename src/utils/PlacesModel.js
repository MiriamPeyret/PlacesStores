class PlacesModel {
    constructor(types, open_now, location, id) {
      this[id] = {
        types: types,
        open_now: open_now,
        location: location
      }
    }
  }
  
  // const ejemplo = new TaskClass('Hogar', 'Tarea', true, 'bdhjsjed3a');
  // console.log(ejemplo);
  
  module.exports = { PlacesModel };
  