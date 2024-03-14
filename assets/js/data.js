async function fetcjProfileData() {
  const url =
    "https://raw.githubusercontent.com/ivan-dias-dev/Portifolio_DIO/projeto_base/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
