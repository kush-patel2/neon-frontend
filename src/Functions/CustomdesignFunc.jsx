export const handleSizeButtonClick = (setCustomStyle, setActiveSizeButton) => (size, buttonId) => {
    setCustomStyle((prevStyle) => ({ ...prevStyle, fontSize: size }));
    setActiveSizeButton(buttonId);
  };
  
  export const handleFontButtonClick = (setCustomStyle, setActiveFontButton) => (fontFamily, buttonId) => {
    setCustomStyle((prevStyle) => ({ ...prevStyle, fontFamily }));
    setActiveFontButton(buttonId);
  };
  
  export const handleBackboardButtonClick = (setCustomStyle, setActiveBackboardButton) => (boxShadow, buttonId) => {
    setCustomStyle((prevStyle) => ({ ...prevStyle, boxShadow }));
    setActiveBackboardButton(buttonId);
  };

  export const handleColorButtonClick = (setCustomStyle, setActiveColorButton) => (color, buttonId) => {
    setCustomStyle((prevStyle) => ({ ...prevStyle, color: color }));
    setActiveColorButton(buttonId);
  };