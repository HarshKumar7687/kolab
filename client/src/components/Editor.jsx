import React, { useEffect, useRef } from 'react'
import Codemirror from 'codemirror';
import "codemirror/mode/javascript/javascript";
// import "codemirror/mode/python/python";
// import "codemirror/mode/go/go";
// import "codemirror/mode/css/css";
// import "codemirror/mode/htmlmixed/htmlmixed";
// import "codemirror/mode/sql/sql";
// import "codemirror/mode/clike/clike";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/fold/foldcode";
import "codemirror/lib/codemirror";
import "codemirror/addon/edit/closetag";
import CodeMirror from 'codemirror';


function Editor({socketRef, roomId, onCodeChange}) {
    const editorRef = useRef(null);
    useEffect(()=>{
        const init = async()=>{
            const editor = CodeMirror.fromTextArea(
              document.getElementById('realTimeEditor'),{
                mode:{name: "javascript", json: true},
                theme: "dracula",
                autoCloseBrackets: true,
                autoCloseTags: true,
                lineNumbers: true,
            });
            editorRef.current = editor;
            editor.setSize(null,"100%");
            editor.on("change",(instance,changes)=>{
                const {origin} = changes;
                const code = instance.getValue();
                onCodeChange(code);


                if(origin !== "setValue"){
                    socketRef.current.emit("code-change",{
                        roomId,
                        code,
                    });
                }
            }); 
        }
        init();
    },[]);

    useEffect(() => {
      if (socketRef.current) {
        socketRef.current.on("code-change",({code})=>{
            if(code !== null){
                editorRef.current.setValue(code);
            }
        });
        socketRef.current.on("clear-code", () => {
            editorRef.current.setValue("");
        });
      }
      return () => {
        if (socketRef.current) {
          socketRef.current.off("code-change");
          socketRef.current.off("clear-code");
        }
      };
    },[socketRef.current]);

  return (
    <div style={{ height: "100%" }}>
      <textarea id="realTimeEditor"></textarea>
    </div>
  )
}

export default Editor
