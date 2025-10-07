import { Parser, ProcessNodeDefinitions } from 'html-to-react';

type TransformFn = (src: string) => string;

export const transformImageUri = (htmlString: string, transformFn: TransformFn): string => {
  const transformImgSrc = (node: any): any => {
    if (node.type === 'tag' && node.name === 'img' && node.attribs && node.attribs.src) {
      node.attribs.src = transformFn(node.attribs.src);
    }
    return node;
  };

  return Parser().parseWithInstructions(htmlString, () => true, [
    {
      shouldProcessNode: transformImgSrc,
      processNode: ProcessNodeDefinitions().processDefaultNode,
    },
  ]);
};
