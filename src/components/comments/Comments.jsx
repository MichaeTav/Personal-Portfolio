import React, { useEffect, useRef } from "react";

const Comments = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current.childNodes.length > 0) return;

    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "michaetav/comments",
      "issue-term": "pathname",
      theme: "photon-dark",
      crossOrigin: "anonymous",
      defer: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
};

export default Comments;
