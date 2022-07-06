
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";

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
    <div className="App">
      <div>
        Main menu
      </div>
      <Unity
        style = {{width: '100%', height: '100%'}}
        className="unity-moldure"
        unityContext={unityContext}
        />

        <div>
          My footer
        </div>
    </div>
  )
}

export default App;
