import React, { useRef, useState } from 'react';
import { PolotnoContainer, usePolotno } from 'polotno/canvas';
import { Toolbar } from 'polotno/toolbar';

export default function PolotnoEditor() {
    const containerRef = useRef();
    const [canvas, setCanvas] = useState();
  
    usePolotno(containerRef, (canvas) => {
      setCanvas(canvas);
    });
  
    return (
      <div>
        <Toolbar canvas={canvas} />
        <PolotnoContainer ref={containerRef} />
      </div>
    );
  }
  