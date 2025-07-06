import { useState } from "react";
import copy from "clipboard-copy";

const CopyToClipboardButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick} className="flex font-semibold text-sm pt-1">
        {isCopied ? "Copied!" : "📋"}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
