import { StyleSheet } from "react-native"; 

const Styles = StyleSheet.create({
    default:{
        width: '100%',
        height: '100vh',
        // backgroundColor: 'red',
    },
    container: {
        flex: 1,
    },
    d_flex:{
       flexDirection: 'row',
    },
    header_h:{
        // display: 'flex',
        flexDirection: 'row',
        backgroundColor:'black',
        // width: '100%',
        height: 70,
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 20,
        // marginBottom: '3rem',
    },
    menu_sections:{
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'white', 
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
    },
    pointer:{
        cursor:'pointer'
    },
    latBar: {
        width: 250,
        height: 'calc(100vh - 70px)',
        // backgroundColor: 'blue'
        borderRightWidth: 1,
        borderRightColor: 'blue'
    },
    latBarContent: {
        padding: '20px'
    },
    testeo: {
        color: 'red',
        backgroundColor: 'orange'
    },
    content: {
        padding: '20px',
        backgroundColor: 'orange',
       width: '100%'
    }
})

export {Styles}