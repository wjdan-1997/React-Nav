import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { colorsPalette } from '../../styles/styles';


export default function HeaderSteps(props) {
    const steps = [];
    for (let i = 1; i < 5; i++) {
        steps.push(<View
            key={`step-${i}`}
            style={[styles.ellipse, { borderWidth: 1, borderColor: 'gray' },
            props.currentStep === i ? { backgroundColor: "#BEE2FD" } : { borderColor: '#fff' }
            ]}
        >
            <Text style={{ fontWeight: 'bold', color: props.currentStep === i ? colorsPalette.denim.color : colorsPalette.skyBlue.color }}>
                {i.toString()}
            </Text>
        </View>
        );
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {steps}
        </View>
    );
}
function HeaderText(props) {
    return (
        <Text style={[styles.header, props.customStyle]}>
            {props.children}
        </Text>
    )
}

function BodyText(props) {
    console.log("BodyText ==== <> <> <> <> <> props", props)
    // const { size = "M", fontWeigth = "regular" } = props
    // let bodyStyle = undefined
    // let fontFamily = ""

    // switch (size.toUpperCase()) {
    //     case 'L':
    //         bodyStyle = styles.bodyL
    //         break;
    //     case 'M':
    //         bodyStyle = styles.bodyM
    //         break;
    //     case 'S':
    //         bodyStyle = styles.bodyS
    //         break;
    //     default:
    //         throw new Error("Size of Heading must be S, M or L.")
    // }

    // switch (fontWeigth) {
    //     case "regular":
    //         fontFamily = "Ubuntu-Regular"
    //         break;
    //     case "medium":
    //         fontFamily = "Ubuntu-Medium"
    //         break;
    //     case "bold":
    //         fontFamily = "Ubuntu-Bold"
    //         break;
    //     default:
    //         throw new Error("fontWeigth must be regular, medium or bold.")
    // }
    return (
        <Text>
            {props.children}
        </Text>
    )
}

const textStyles = StyleSheet.create({
    header: {
        fontSize: 24,
        lineHeight: 28,
        fontFamily: "Ubuntu-Bold",
        color: "#022959",
    },

    body: {
        fontFamily: "Ubuntu-Regular",
        color: "#022959",
    },
    bodyS: {
        fontSize: 12,
        lineHeight: 14,
    },
    bodyM: {
        fontSize: 14,
        lineHeight: 20,
    },
    bodyL: {
        fontSize: 16,
        lineHeight: 25,
    },

})
const styles = StyleSheet.create({
    imgHeaderBG: {
        height: 172,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
    ellipse: {
        width: 33,
        height: 33,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginHorizontal: 8,
    },
    active: {
        backgroundColor: "#BEE2FD",
    },
    unactive: {
        borderWidth: 1,
        borderColor: '#fff',
    }
})
