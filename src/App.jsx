import { useRef } from "react";
import { DisplaySection } from "./components/DisplaySection";
import { Jumbotron } from "./components/Jumbotron";
import { Nav } from "./components/Nav";
import { SoundSection } from "./components/SoundSection";
import { WebgiViewer } from "./components/WebgiViewer";

function App() {
  const webViewerRef = useRef(null);
  const contentRef = useRef(null);

  const handleScrollToPreview = () => {
    webViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handleScrollToPreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webViewerRef} />
    </div>
  );
}

export default App;
