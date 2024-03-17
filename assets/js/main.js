function updateProfaleInfo(profileData) {
  let photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  let name = document.getElementById("profile.name");
  name.innerText = profileData.name;
  let job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  let location = document.getElementById("profile.location");
  location.innerText = profileData.location;
  let phone = document.getElementById("profile.phone");

  phone.innerText = profileData.phone;
  phone.href = `wa.me/${profileData.phone}`;
  let email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
  
}


function updateSokftSkills(profileData){
    let softSkills = document.getElementById("profile.skills.softSkills");
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join(' ')
    
}
function updatehardtSkills(profileData){
    let hardSkills = document.getElementById("profile.skills.hardSkills");

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
    <li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/></li>
    `).join(' ')
  
}
function updateLanguages(profileData){
  let languages = document.getElementById("languages");
  console.log(profileData.languages)
  languages.innerHTML = profileData.languages.map(language => `
  <li>${language}</li>
  `).join(' ')

}

(async function () {
  const profileData = await fetcjProfileData();
  updateProfaleInfo(profileData);
  updateSokftSkills(profileData)
  updatehardtSkills(profileData)
  updateLanguages(profileData)
})();
