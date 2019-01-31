import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class DataService {

  constructor(  private http: HttpClient) {}

  getplayListDetails(){
    return this.http
    .get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCJT3Lo_NZri-bHJXVuYv3ew&key=AIzaSyAWuk33_ilAg98GlctU-CjXLZdI53RydOs')
    .toPromise()
    .then((res: Response) => {
      console.log(res);
      for( let i in res.items){
          var pid = res.items[i].contentDetails.relatedPlaylists.uploads;
          this.getVids(pid);
      }
      debugger;
      //return res;
    });
  }

  getVids(pid) {
     return this.http
     .get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=' + pid + '&key=AIzaSyAWuk33_ilAg98GlctU-CjXLZdI53RydOs')
     .toPromise()
     .then((res: Response) => {
       console.log(res);
       debugger;
  //     for( let i in res.items){
  //         var pid = res.items[i].contentDetails.relatedPlaylists.uploads;
  //         getVids(pid);
       });
  }
  
  getPlayList(): Promise<any> {
    //getPlayList(requestParams: any, forUserName:any , key: any): Promise<any> {
    

    /* youtube api call sample:
    GET {base_URL}/playlists?part=snippet
                        &channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw
                        &key={YOUR_API_KEY}
    */

    //https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=UCJT3Lo_NZri-bHJXVuYv3ew&key=AIzaSyAWuk33_ilAg98GlctU-CjXLZdI53RydOs

    let reqParam = {
      part: 'contentDetails',
      forUserName: 'UCJT3Lo_NZri-bHJXVuYv3ew',
      key: 'AIzaSyAWuk33_ilAg98GlctU-CjXLZdI53RydOs'
    }

    
    return this.http.get('https://www.googleapis.com/youtube/v3/channels')
      .toPromise()
      .then((res: Response) => {
        return res;
      })
      .catch((error: any) => {
        return Promise.reject();
      });
   
  }

}

/*
  READ ME HOW TO MAKE A CALL TO YOUTUBE API 

  First get the id of the uploaded play list
  GET https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=CHANNEL_ID&key=API_KEY

  The id will be under the uploaded 
  then you can use the uploaded playlistitems 
  GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAYLIST_ID&key=API_KEY
*/ 



/* ref site 
  https://stackoverflow.com/questions/31140083/youtube-api-returning-wrong-result-counts
*/