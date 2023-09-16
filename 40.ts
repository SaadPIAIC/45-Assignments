interface Album{
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artistName: string, albumTitle: string, numTracks?: number): Album //  an optional tracks parameter
{
 const album: Album = { artist: artistName, title: albumTitle };
 if (numTracks) {
   album.tracks = numTracks;
 }
 return album;
}

const album1 = make_album("Babu","Gabu");
const album2 = make_album("Pagal","Chagal",11);
const album3 = make_album("Insaan","Ginsaan",21);

console.log(album1);
console.log(album2);
console.log(album3);