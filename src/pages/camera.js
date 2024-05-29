import React, { useState, useRef, useEffect} from "react";
import {Camera, CameraType} from "react-camera-pro";
import styled from "styled-components";
import { createWorker } from 'tesseract.js';
import translateText from '../GoogleTranslate';




const Wrapper = styled.div({
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: "1",
});

const rounded = styled.div({
  width: "50%",
  backgroundColor: "black",
  paddingBottom: "35px",
  zIndex: "1",
})

const CameraDisplay = styled.div({
  position: "fixed",
  display: "initial",
  width: "20%",
  height: "20%",
  left: "11%",
  zIndex: "1"
})



const TakePhotoButton = styled.button({
  background: "url('https://img.icons8.com/ios/50/000000/compact-camera.png')",
  backgroundPosition: "center",
  backgroundSize: "50px",
  backgroundRepeat: "no-repeat",
  width: "100px",  
  height: "100px",
  border: "solid 4px black",
  borderRadius: "50%",
  zIndex: "2",
});

const TranslateButton = styled.button({
  width: "100px",  
  height: "100px",
  border: "solid 4px black",
  borderRadius: "50%",
  zIndex: "2",
})

const PhotoDisplay = styled.div({
  position: "relative",
  width: "0%",
  height: "20%",
  left: "11%",
  top: "-140px"
})

const PhotoButton = styled.div({
  position: "relative",
  display:"initial",
  right: "0%",
  top: "78%",
  width: "20%",
  height: "20%",
  zIndex: "2"
})

const TextDisplay = styled.div({
  position: "relative",
  display:"initial",
  width: "20%",
  height: "100%",
  left:"0%",
  top: "73%",
  zIndex: "2"
})

const Component = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en'); // Default: Spanish

  let text;
  let translatedOutput;

  (async () => {
    const worker = await createWorker('jpn');
    const ret = await worker.recognize(image);
    console.log(ret.data.text);
    text = ret.data.text
    setInputText(text);
    if (inputText) {
      const translatedText = await translateText(inputText, targetLanguage);
      translatedOutput = translatedText;
      console.log(translatedText);
      
    }
    await worker.terminate();
  })();

    
  return (
    <Wrapper>
      <CameraDisplay><Camera ref={camera}/></CameraDisplay>
      <PhotoButton><TakePhotoButton onClick={() => setImage(camera.current.takePhoto())}></TakePhotoButton></PhotoButton>
      <TextDisplay>
        <TranslateButton onClick={() => window.alert(translatedOutput)}>Translate</TranslateButton>
      </TextDisplay>
      <PhotoDisplay><img src={image}/></PhotoDisplay>
    </Wrapper>

  );
}

export default Component;