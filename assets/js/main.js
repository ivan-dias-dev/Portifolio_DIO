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

(async function () {
  const profileData = await fetcjProfileData();
  updateProfaleInfo(profileData);
})();
