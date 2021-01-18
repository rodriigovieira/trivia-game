/**
 * This function will decode
 * all HMTL entities that are in the string.
 * This helper function was made due to problems
 * in the strings that were coming from the API.
 * 
 * @param {string} text the text to replace the strings
*/
export const decodeHTMLEntities = (text: string): string =>{
  const decodedString = text?.replace(
    /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});/ig,
    (tag: string): string => {
    const entities: Record<string, string> = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&#039;': "'",
      '&quot;': '"' 
    }
    
    return entities[tag] || tag
  });

  return decodedString;
}