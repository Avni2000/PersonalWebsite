import { getAssetPath } from "./utils";
export default function Resume(props: { name: string }) {
    return (
        <a
            href={getAssetPath("files/Avni-Badiwale.pdf")}
            download=""
            style={{ color: "black" }}
          >{props.name}</a>

    )

}