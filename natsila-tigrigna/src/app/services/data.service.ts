/*
  First get the id of the uploaded play list
  GET https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=CHANNEL_ID&key=API_KEY

  The id will be under the uploaded 
  then you can use the uploaded playlistitems 
  GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAYLIST_ID&key=API_KEY
*/ 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class DataService {

  constructor(  private http: HttpClient) {}

  URL ='https://www.googleapis.com/youtube/v3/';

  getplayListDetails(){

    return this.http
      .get( this.URL + 'channels?part=contentDetails&id=UCJT3Lo_NZri-bHJXVuYv3ew&key=AIzaSyAWuk33_ilAg98GlctU-CjXLZdI53RydOs')
      .toPromise()
      .then((res: Response) => {
        let playListUpload = res["items"];
        console.log(playListUpload);
        for( let i in playListUpload){
            var upload_id = playListUpload[i].contentDetails.relatedPlaylists.uploads;
            return this.getVids(upload_id);
        }
    });
   }

  getVids(uploads) {
     return this.http
     .get( this.URL + 'playlistItems?part=snippet&maxResults=25&playlistId=' + uploads + '&key=AIzaSyAWuk33_ilAg98GlctU-CjXLZdI53RydOs')
     .toPromise()
     .then((res: Response) => {
       console.log(res);
       return res;
  //     debugger;
  //     for( let i in res.items){
  //         var pid = res.items[i].contentDetails.relatedPlaylists.uploads;
  //         getVids(pid);
       });
  }
}

/* ref site 
  https://stackoverflow.com/questions/31140083/youtube-api-returning-wrong-result-counts

  MIX-CLOUND: 
  https://www.mixcloud.com/discover/amharic/


  Developers:
  https://www.mixcloud.com/developers/
   
*/

