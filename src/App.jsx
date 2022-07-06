
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";
import MainMenu from './Components/Menu';
import { Container } from './Components/UnityContainer/styles';
import { ChatDots} from "phosphor-react";
const unityContext = new UnityContext({
  loaderUrl: "buildUnity/testing.loader.js",
  dataUrl: "buildUnity/testing.data.unityweb",
  frameworkUrl: "buildUnity/testing.framework.js.unityweb",
  codeUrl: "buildUnity/testing.wasm.unityweb",
  webglContextAttributes:{
    preserveDrawingBuffer:true,
  }
});
function App() {
  
  return (

     <div className="bg-gray-700">
    <MainMenu/>
    <Container>
    <div className = 'bg-gray-100 absolute bottom-0 right-0 p-10 m-20 rounded-full '>
    <ChatDots size={90} color="#97aa09" />
      </div>
    <Unity
        style = {{width: '100%', height: '100%'}}
        className="unity-moldure"
        unityContext={unityContext}
        />

    </Container>
    
       
    </div>
  
  )
}

export default App;
