import React, {useState, useRef, useEffect, useCallback} from "react";

function Form() {
  const [text, updateText] = useState("");
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text; // write it to the ref
  });

  const handleSubmit = useCallback(() => {
    const currentText = textRef.current; // Read it from the ref
    alert(currentText);
  }, [textRef]); // Don't recreate handleSubmit like [text] would do

  return (
    <>
      <input value={text} onChange={e => updateText(e.target.value)} />
      <ExpensiveTree onSubmit={handleSubmit} />
    </>
  );
}

