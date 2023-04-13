// Define an array to hold the contacts
let contacts = [];

// Function to add a contact
function addContact(name, email, phone,address) {
    document.getElementById("contact-form").style.display='none';
  // Create a new contact object
  let contact = {
    name: name,
    email: email,
    phone: phone,
    address:address
  };

  // Add the contact to the contacts array
  contacts.push(contact);

  // Update the display
  displayContacts();
}

// Function to edit a contact
function editContact(index, name, email, phone,address) {
    document.getElementById("contact-form").style.display='none';
  // Update the contact object at the given index
  contacts[index].name = name;
  contacts[index].email = email;
  contacts[index].phone = phone;
  contacts[index].address = address;

  // Update the display
  displayContacts();
}

// Function to delete a contact
function deleteContact(index) {
  // Remove the contact from the contacts array
  contacts.splice(index, 1);

  // Update the display
  displayContacts();
}

// Function to display the contacts
function displayContacts() {
  // Get a reference to the element that will display the contacts
  let contactsList = document.getElementById("contacts-list");

  // Clear the current contents of the contacts list
  contactsList.innerHTML = "";

  // Loop through the contacts array and create a new HTML element for each contact
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];

    let contactElement = document.createElement("span");
    contactElement.innerHTML = `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
      ${contact.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${contact.phone}</li>
        <li class="list-group-item">${contact.email}</li>
        <li class="list-group-item">${contact.address}</li>
      </ul>
      <div class="card-body">
    <button type="button" class="btn btn-warning" onclick="showContactForm(${i})">Edit</button>
    <button type="button" class="btn btn-danger" onclick="deleteContact(${i})">Delete</button>
     </div>
    </div>`;
    contactsList.appendChild(contactElement);
  }
}

// Function to show the form for adding/editing contacts
function showContactForm(index) {
    document.getElementById("contact-form").style.display='initial';
  let contactForm = document.getElementById("contact-form");

  if (index === undefined) {
    // No index was provided, so this is an add operation
    contactForm.innerHTML = `  
    <div class="m-5 contact-body">
      <div class="form-row">
          <div class="form-group col-md-6">
              <label for="fullNmae">Name</label>
              <input type="text" class="form-control" id="fullName" placeholder="Full Name">
            </div>
        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email">
        </div>
      </div>
      <div class="form-row">
          <div class="form-group col-md-6">
              <label for="phoneNumber">Phone Number</label>
              <input type="text" class="form-control" id="phoneNumber" placeholder="Phone number">
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="">
            </div>
      </div>   
      <button type="button" class="btn btn-success" onclick="addContact(
          document.getElementById('fullName').value,
          document.getElementById('inputEmail').value,
          document.getElementById('phoneNumber').value,
          document.getElementById('inputAddress').value
        )">Save</button>
        </div>`;
  } else {
    // An index was provided, so this is an edit operation
    let contact = contacts[index];

    contactForm.innerHTML = `
    <div class="m-5 contact-body">
      <div class="form-row">
          <div class="form-group col-md-6">
              <label for="fullNmae">Name</label>
              <input type="text" class="form-control" id="fullName" value="${contact.name}" >
            </div>
        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" value="${contact.email}">
        </div>
      </div>
      <div class="form-row">
          <div class="form-group col-md-6">
              <label for="phoneNumber">Phone Number</label>
              <input type="text" class="form-control" id="phoneNumber" value="${contact.phone}">
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress"value="${contact.address}">
            </div>
      </div>  
      <button class="btn btn-primary" onclick="editContact(
        ${index},
          document.getElementById('fullName').value,
          document.getElementById('inputEmail').value,
          document.getElementById('phoneNumber').value,
          document.getElementById('inputAddress').value
        )">Save</button>
        </div>`;
    }
  }
