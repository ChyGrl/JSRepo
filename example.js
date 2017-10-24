function employee (name, manager) {
  return {
    name: name,
    manager: manager
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */
function underlings (manager, employees) {
  var Folks = [];
  employees.forEach( (data) => {
      if (data.manager === manager) {
          Folks.push(data.name)
      }
  }) 

  employees.forEach( function () {
      
  })
  
  return Folks;
}

module.exports = {
  employee,
  underlings
}