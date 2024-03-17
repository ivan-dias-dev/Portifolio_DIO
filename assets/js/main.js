function updateProfaleInfo(profileData) {
  let photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;
  console.log(profileData, photo);

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
  console.log(name, job, location, phone, email);
  
}


function updateSokftSkills(profileData){
    let softSkills = document.getElementById("profile.skills.softSkills");
    console.log(profileData.skills.softSkills)
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join(' ')
    
}
function updatehardtSkills(profileData){
    let hardSkills = document.getElementById("profile.skills.hardSkills");
    console.log(profileData.skills.hardSkills)
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
    <li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/></li>
    `).join(' ')
  
}

(async function () {
  const profileData = await fetcjProfileData();
  updateProfaleInfo(profileData);
  updateSokftSkills(profileData)
  updatehardtSkills(profileData)
})();
