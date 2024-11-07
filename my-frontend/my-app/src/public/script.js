
const universities = [
    {
      id: 1,
      name: "Superior University",
      departments: [
        {
          id: 1,
          name: "Engineering",
          specializations: [
            {
              id: 1,
              name: "Artificial Intelligence",
              students: [
                { id: 1, name: "Nasrat Azizi", email: "azizi@gmail.com", age: 19 },
                { id: 2, name: "Nasim Bahar", email: "nasimbahar@gmail.com", age: 20 }
              ]
            },
            {
              id: 2,
              name: "Data Science",
              students: [
                { id: 3, name: "Ajmal Ramat", email: "ajmal22@gmail.com", age: 22 },
                { id: 4, name: "Sabahat Noor", email: "noor@gmail.com", age: 22 }
              ]
            },
            {
              id: 3,
              name: "Software Engineering",
              students: [
                { id: 5, name: "Nejad Akbar", email: "akbar22@gmail.com", age: 20 }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Computer Science",
          specializations: [
            {
              id: 1,
              name: "Data Science",
              students: [
                { id: 5, name: "Nejad Akbar", email: "akbar22@gmail.com", age: 20 }
              ]
            },
            {
              id: 2,
              name: "Software Engineering",
              students: [
                { id: 6, name: "Sharif Wafa", email: "wafa21@gmail.com", age: 21 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Rahnaward University",
      departments: [
        {
          id: 1,
          name: "Engineering",
          specializations: [
            {
              id: 1,
              name: "Software Engineering",
              students: [
                { id: 7, name: "Nejad Akbar", email: "akbar22@gmail.com", age: 20 },
                { id: 8, name: "Sharif Wafa", email: "wafa21@gmail.com", age: 21 }
              ]
            },
            {
              id: 2,
              name: "Data Science",
              students: [
                { id: 4, name: "Sabahat Noor", email: "noor@gmail.com", age: 22 },
                { id: 5, name: "Nejad Akbar", email: "akbar22@gmail.com", age: 20 }
              ]
            },
            {
              id: 3,
              name: "Artificial Intelligence",
              students: [
                { id: 1, name: "Nasrat Azizi", email: "azizi@gmail.com", age: 29 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Aria University",
      departments: [
        {
          id: 3,
          name: "Public Policy",
          specializations: [
            {
              id: 1,
              name: "Administration", 
              students: [
                { id: 9, name: "Nasrat Azizi", email: "azizi@gmail.com", age: 22 }
              ]
            },
            {
              id: 2,
              name: "Administration", 
              students: [
                { id: 4, name: "Sabahat Noor", email: "noor@gmail.com", age: 22 }
              ]
            }
          ]
        }
      ]
    }
  ];
  const universitySelect = document.getElementById('university');
  const departmentSelect = document.getElementById('department');
  const specializationSelect = document.getElementById('specialization');
  const studentTableBody = document.querySelector('#table');
  
  /**
   * Populate the university selection dropdown with the list of universities.
   */
  function populateUniversities() {
    universities.forEach(university => {
      const option = document.createElement('option');
      option.value = university.id;
      option.textContent = university.name;
      universitySelect.appendChild(option);
    });
  }
  
  function populateDepartments(universityId) {
    resetDropdown(departmentSelect, 'Departments');
    resetDropdown(specializationSelect, 'Specialization');
  
    const university = universities.find(u => u.id === universityId);
    
    if (university) {
      university.departments.forEach(department => {
        const option = document.createElement('option');
        option.value = department.id;
        option.textContent = department.name;
        departmentSelect.appendChild(option);
      });
      departmentSelect.disabled = false;
    } else {
      departmentSelect.disabled = true;
    }
  }
  

  function populateSpecializations(departmentId) {
    resetDropdown(specializationSelect, 'Specializations');
  
    const university = universities.find(u => u.id === universitySelect.value);
    const department = university?.departments.find(d => d.id === departmentId);
  
    if (department) {
      department.specializations.forEach(spec => {
        const option = document.createElement('option');
        option.value = spec.id;
        option.textContent = spec.name;
        specializationSelect.appendChild(option);
      });
      specializationSelect.disabled = false;
    } else {
      specializationSelect.disabled = true;
    }
  }
  
  // Reset dropdown to a default option
  function resetDropdown(selectElement, defaultText) {
    selectElement.innerHTML = `<option value="">${defaultText}</option>`;
    selectElement.disabled = true;
  }
  
  function showStudents(universityId, departmentId, specializationId) {
    studentTableBody.innerHTML = '';
  
    let students = universities.flatMap(university => {
      if (!universityId || university.id === universityId) {
        return university.departments.flatMap(department => {
          if (!departmentId || department.id === departmentId) {
            return department.specializations.flatMap(spec => {
              return (!specializationId || spec.id === specializationId) ? spec.students : [];
            });
          }
          return [];
        });
      }
      return [];
    });
  
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.email}</td><td>${student.age}</td>`;
      studentTableBody.appendChild(row);
    });
  }
  
  universitySelect.addEventListener('change', function() {
    populateDepartments(this.value);
    showStudents();
  });
  
  departmentSelect.addEventListener('change', function() {
    populateSpecializations(this.value);
  });
    populateSpecializations(this.value);
    showStudents();
  
  // function resetDropdown(selectElement, defaultText) {
  //   selectElement.innerHTML = `<option value="">${defaultText}</option>`;
  //   selectElement.disabled = true;
  // }
  
  specializationSelect.addEventListener('change', function() {
    showStudents();
  });
  
  populateUniversities();
  showStudents(); 
  
  
  export default universities;