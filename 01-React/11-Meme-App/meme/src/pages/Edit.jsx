import React, { useState, useRef } from "react";
import Text from "../components/Text";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef(null);

  const addText = () => setCount((prev) => prev + 1);

  const handleDownload = () => {
    if (!memeRef.current) return;

    htmlToImage
      .toJpeg(memeRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        download(dataUrl, "meme.jpeg");
      })
      .catch((err) => console.error("Error while saving meme:", err));
  };

  return (
    <div>
      <div
        style={{ width: "700px", border: "1px solid", padding: "10px" }}
        ref={memeRef}
        className="meme mt-5 mb-5"
      >
        <img src={params.get("url")} width="250px" alt="meme" />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={handleDownload}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;







// import React, { useState, createRef } from "react";
// // import { Button } from 'bootstrap';
// import Text from "../components/Text";
// import { Button } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
// // import {exportComponentAsJPEG} from "react-dom";
// import { exportComponentAsJPEG } from "react-component-export-image";

// const EditPage = () => {
//   const [params] = useSearchParams();
//   console.log(params.get("url"));

//   const [count, setCount] = useState(0);

//   const memeRef = createRef();

//   const addText = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <div
//         style={{ width: "700px", border: "1px solid" }}
//         ref={memeRef}
//         className="meme mt-5 mb-5 "
//       >
//         <img src={params.get("url")} width="250px" />
//         {/* {
//             Array(count).fill(0).map(e => <Text />)
//         } */}
//         {Array(count)
//           .fill(0)
//           .map((e, i) => (
//             <Text key={i} />
//           ))}
//       </div>
//       <Button onClick={addText}>Add Text</Button>
//       <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>
//         Save
//       </Button>
//     </div>
//   );
// };

// export default EditPage;
