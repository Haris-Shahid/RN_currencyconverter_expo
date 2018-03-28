import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const Input_Height = 48;
const Border_Radius = 4;

export default EStyleSheet.create({
    $btnbgColorBase: '$white',
    $btnbgColorModifier: 0.1,
    container: {
        backgroundColor: '$white',
        width: '90%',
        height: Input_Height,
        borderRadius: Border_Radius,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11
    },
    containerDisabled: {
        backgroundColor: '$lightGray',
    },
    btnContainer: {
        height: Input_Height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: Border_Radius,
        borderBottomLeftRadius: Border_Radius,
    },
    btnTxt: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue', 
    },
    border: {
        height: Input_Height,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
    input: {
        height: Input_Height,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputtxt',
    }
})