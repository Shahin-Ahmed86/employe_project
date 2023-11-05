/* Start For control modal */

var addProductBtn = document.querySelector('#addProductBtn');
var modal = document.querySelector('.modal')
var closeIcon = document.querySelector('.close-icon')

addProductBtn.onclick = function () {
    modal.classList.add('active')
     
} 

closeIcon.addEventListener('click', function () {
    modal.classList.remove('active')
})

// Start all Global variable

var userData = [];

var id = document.getElementById('id');
var myName = document.querySelector('#my-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var officeCode = document.getElementById('office-code');
var jobTitle = document.getElementById('job-title');
var registerBtn = document.querySelector('#register-btn');
var registerForm = document.querySelector('#register-form');
var imgUrl;
// End all Global variable

// start register js coding
  
registerBtn.onclick = function (e) {
    e.preventDefault();
    getDataFromLocal();
    registrationData()
    registerForm.reset('')
    closeIcon.click('')
}
alert(imgUrl)
if (localStorage.getItem('userData') != null) {
    userData = JSON.parse(localStorage.getItem('userData'));
}



const registrationData = () => {
    userData.push({
        id:         id.value,
        myName:       myName.value,
        lastName:   lastName.value,
        email:      email.value,
        officeCode: officeCode.value,
        jobTitle: jobTitle.value,
        proFile : imgUrl == undefined ? 'img/restoran1.jpg' : imgUrl
    });
    var userString = JSON.stringify(userData)
    localStorage.setItem('userData', userString)
    
}


//  Start Returning Data on Page form Localstorage

var tableData = document.querySelector('#table-data');

const getDataFromLocal = () => {
    tableData.innerHTML = '';
    userData.forEach((data, index) => {
        tableData.innerHTML += `
        <tr index = '${index}'>
                <td>${index+1}</td>
                <td><img src ='${data.proFile}' width= '40' height= '40'> </td>
                <td>${data.id}</td>
                <td>${data.myName}</td>
                <td>${data.lastName}</td>
                <td>${data.email}</td>
                <td>${data.officeCode}</td>
                <td>${data.jobTitle}</td>
                
                <td>
                    <button><i class="fa fa-eye"></i></button>
                    <button id="delete-btn"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
            
           
        `
    })
}
getDataFromLocal();

// image Procesing

var profilePic = document.querySelector('#profile-pic');
var uploadPic = document.querySelector('#upload-file');

uploadPic.onchange = function () {
    if (uploadPic.files[0].size < 1000000) {
        var fReader = new FileReader();
        fReader.onload = function (e) {
            imgUrl = e.target.result;
            profilePic.src = imgUrl;
            console.log(imgUrl)
        }
        fReader.readAsDataURL(uploadPic.files[0]); // Pass the file object here
    } else {
        alert('File Size Is Too Large');
    }
}

 


 

