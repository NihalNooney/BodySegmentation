import React, {useRef} from "react";
import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runBodysegment = async () =>{
    const net = await bodyPix.load();
    console.log("Bodypix model loaded.");
    setInterval(()=>{
      detect(net);
    }, 100);
  };

  const detect = async (net) =>{

    if(
      typeof webcamRef.current!= "undefined" &&
      webcamRef.current!= null &&
      webcamRef.current.video.readyState ===4
    ){
      const video = webcamRef.current.video;
      const videoHeight = video.videoHeight;
      const videoWidth = video.videoWidth;

      webcamRef.current.video.width=videoWidth;
      webcamRef.current.video.height=videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const person = await net.segmentPersonParts(video);
      console.log(person);

      const coloredPartImage = bodyPix.toColoredPartMask(person);

      bodyPix.drawMask(
        canvasRef.current,
        video,
        coloredPartImage,
        0.7,
        0,
        false
      )


    }
  };

  runBodysegment();

  return (
    <div className="App">
     <h1>Body Segmentation</h1>
     <h2>by Nihal N</h2>
     <h4>This application was created using the TensorflowJS body segmentation model. The application is able to distinguish different parts of the body using the user's webcam. Specifically, the application will highlight each body part a different color.</h4>
      <header className="App-header">
        <Webcam ref = {webcamRef}
        style = {{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width:640,
          height:480
        }}/>
        <canvas ref = {canvasRef}
        style = {{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width:640,
          height:480
        }}/>
      </header>
    </div>
  );
}

export default App;
