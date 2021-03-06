<!doctype html>
<html>
  <head>
    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/beaverslider.js"></script>
    <script src="js/beaverslider-effects.js"></script>

    <script>
      $(function(){
        var slider = new BeaverSlider({
          type: "slider",
          structure: {
            container: {
              id: "my-slider-id",
              width: 550,
              height: 413
            },
            controls: {
              containerClass: "control-container",
              elementClass: "control-element",
              elementActiveClass: "control-element-active",
              previewMode: false
            },
            player: {
              containerClass: "player-container",
              backClass: "player-back",
              forwardClass: "player-forward",
              pauseClass: "player-pause",
              playClass: "player-play",
              show: "mouseover",
              left: 350,
              top: 5
            },
            messages: {
              containerClass: "message-container",
              left: 15,
              top: 15
            }
          },
          content: {
            images: ["images/homepage/01.jpg","images/homepage/02.jpg", 
                "images/homepage/03.jpg", "images/homepage/04.jpg",
                "images/homepage/05.jpg", "images/homepage/06.jpg",
                "images/homepage/07.jpg", "images/homepage/08.jpg",
                "images/homepage/09.jpg", "images/homepage/10.jpg"],
            messages: ["Presiding on childrens day - Nov 2013",
                "Giving award to best performing children",
                "Teachers attending skype session",
                "Outdoor classes being held",
                "3 school buses",
                "Our school against a beautiful mountainous backdrop",
                "The auditorium",
                "Sports Day",
                "Students at Mettur dam",
                "Students having mid afternoon meals"]            
          },
          animation: {
            effects: effectSets["slider: big set 1"],
            interval: 4000,
            initialInterval: 4000,
            waitAllImages: false,
            changeSameMessage: false,
            showMessages: "linked"
          }
        });
      });
    </script>

    <style>
      /* image-preview control elements */
      .control-container-img {
      /* as far as contorls are displayed as inline-block this puts them to center */
      /* choose left or right or center to put it to left/right/center */
      text-align: left;
      /* change this to the values you need */
      margin-top: 1px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      }
      .control-element-img, .control-element-active-img {
      /* this displays element as inline-block; zoom and *display is a hack for ie7 which does not support inline-block */
      display: inline-block;
      zoom: 1;
      *display: inline;
      /* change this to the values you need */
      width: 150px;
      height: 88px;
      margin: 0;
      cursor: pointer;
      opacity: 0.4;
      filter: alpha(opacity=40)
      }
      .control-element-img:hover {
      opacity: 0.7;
      filter: alpha(opacity=70)
      }
      .control-element-active-img {
      opacity: 1;
      filter: alpha(opacity=100)
      }
      .control-element-img img, .control-element-active-img img {
      width: 150px;
      height: 88px;
      }
            /* messages */
      .message-container {
      background: #424242;
      color: white;
      font-size: 0.9em;
      font-family: PT Sans Narrow;
      padding: 5px;
      }
            /* usual player with images */
      .player-container {
      height: 28px;
      white-space: nowrap;
      }
      .player-pause, .player-play, .player-forward, .player-back {
      /* this displays element as inline-block; zoom and *display is a hack for ie7 which does not support inline-block */
      display: inline-block;
      zoom: 1;
      *display: inline;
      cursor: pointer;
      margin-left: 5px;
      height: 28px;
      width: 33px;
      background-image: url(images/player.png);
      }
      .player-pause {
      background-position: -199px 0;
      width: 28px;
      }
      .player-pause:hover {
      background-position: -161px 0;
      }
      .player-play {
      background-position: -356px 0;
      width: 28px;
      }
      .player-play:hover {
      background-position: -319px 0;
      }
      .player-back {
      background-position: -275px 0;
      }
      .player-back:hover {
      background-position: -234px 0;
      }
      .player-forward {
      background-position: -434px 0;
      }
      .player-forward:hover {
      background-position: -393px 0;
      }
      
    </style>
  </head>

  <body>
    <div id="my-slider-id"></div>
  </body>
</html>