import { data } from "./GetData";

export async function getResultantData() {
  let Data = [];
  let albumData = [];
  let photoData = [];

  await data("albums").then(albumResponse => {
    albumData = albumResponse;
  });
  await data("photos").then(photoResponse => {
    photoData = photoResponse;
  });
  await data("users").then(userResponse => {
    userResponse.forEach(ur => {
      let dataObject = {};
      let albumArray = [];
      dataObject = ur;
      albumData
        .filter(album => album.userId === ur.id)
        .forEach(album => {
          let albumObject = {};
          albumObject = album;
          albumObject["photo"] = photoData.filter(
            photo => photo.albumId === album.id
          );
          albumArray.push(albumObject);
        });
      dataObject["album"] = albumArray;
      Data.push(dataObject);
    });
  });
  return Data;
}
