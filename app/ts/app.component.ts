import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    myvideos:Array<Video>;

    constructor(){
      this.myvideos = [
        new Video(1, "Angular js tutorial" , "f8qBeaGe2S4", "tutorial description"),
        new Video(2, "Jayen tutorial" , "fyfY5aqbLNI", "Jayen description")
      ]
    }
}
