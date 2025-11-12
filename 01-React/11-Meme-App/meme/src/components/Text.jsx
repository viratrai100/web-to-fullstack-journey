import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} style={{ cursor: "move" }}>
        {editMode ? (
          <input
            autoFocus
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onBlur={() => setEditMode(false)}   // Blur se edit mode band
          />
        ) : (
          <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;

























// // import React from 'react';
// // import Draggable from "react-draggable";

// // const Text = () => {
// //   return (
// //     <div>
// //       <Draggable>
// //         <h1>I am a text</h1>
// //       </Draggable>
// //     </div>
// //   )
// // }

// // export default Text;

// import React, { useRef, useState } from "react";
// import Draggable from "react-draggable";

// const Text = () => {
//   const nodeRef = useRef(null);
//   const [editMode, setEditMode] = useState(false);
//   const [val, setVal] = useState("Double Click to Edit");

//   return (
//     <div>
//       <Draggable nodeRef={nodeRef}>
//         <div ref={nodeRef} className="draggable-box">
//           {/* <h1>I am a text</h1> */}
//           { 
//             editMode ? ( <input onDoubleClick={(e) => setEditMode(false)}  value={val} onChange={e => setVal(e.target.value)} /> ): ( <h1 onDoubleClick={(e) => setEditMode(true)} >{val}</h1> )
//           }
//         </div>
//       </Draggable>
//     </div>
//   );
// };

// export default Text;

// import React, { useRef, useState } from "react";
// import Draggable from "react-draggable";

// const Text = () => {
//   const nodeRef = useRef(null);
//   const [editMode, setEditMode] = useState(false);
//   const [val, setVal] = useState("Double Click to Edit");

//   return (
//     <Draggable nodeRef={nodeRef}>
//       <div ref={nodeRef} style={{ cursor: "move" }}>
//         {editMode ? (
//           <input
//             value={val}
//             onChange={(e) => setVal(e.target.value)}
//             onDoubleClick={() => setEditMode(false)}
//           />
//         ) : (
//           <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
//         )}
//       </div>
//     </Draggable>
//   );
// };

// export default Text;