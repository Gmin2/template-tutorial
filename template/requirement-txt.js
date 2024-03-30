import { File, Text } from "@asyncapi/generator-react-sdk"

export default function requirementTxt({ asyncapi, params }) {
    return (
        <File name="requirements.txt">
            <Text>paho-mqtt==1.6.1</Text>
        </File>
    )
}