import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
import Image from "next/legacy/image"
import { montserrat } from "@/utils/fonts"

export const markdownOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className={montserrat.className}>{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => <em className={montserrat.className}>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className={montserrat.className}>{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className={montserrat.className}>{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={montserrat.className}>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={montserrat.className}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={montserrat.className}>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className={montserrat.className}>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className={montserrat.className}>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className={montserrat.className}>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className={montserrat.className}>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className={montserrat.className}>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className={montserrat.className}>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className={montserrat.className}>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <q className={montserrat.className}>{children}</q>
    ),
    [BLOCKS.HR]: (node, children) => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <Image src={node.data.target.fields.file.url} alt="image" />
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
      <div className={montserrat.className}>{children}</div>
    ),
  },
}
