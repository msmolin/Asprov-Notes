import {Dimensions} from 'react-native'

const {windowHeight, windowWidth} = Dimensions.get('window');
export const styles = {
    allNotesContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    editNoteContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    emptyListContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 56
    },
    emptyList: {
        fontFamily: 'Lato-Bold',
        fontSize: 16
    },

    addNotesContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    textInputContainer: {
        flex: 4
    },
    inputTitleStyle: {
        height: 60,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        fontFamily: 'Lato-Regular',
        fontSize: 20
    },
    inputDescriptionStyle: {
        flex:1,
        flexDirection:'row',
        height: windowHeight - 100,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        textAlignVertical: 'top',
        backgroundColor: '#f5f5f5'//['#f5f5f5', 'rgba(f, f, f, 0.7)']
    },
    inputScreenBtnContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        height: 40,
    },
    imageContainer: {
        alignItems: 'center',
    },
    imagesContainer:{
        //flex: 1,
        backgroundColor:'red'
    },
    editContainer:{
        justifyContent:'space-between',
    },
    image: {
        height: 200,
        width: 200,
    },
    textInputandImagesContainer:{
        flex:1,
        flexDirection:'row',
    },
    imagesRollContainer:{
        flex: 1,
        backgroundColor:'red'
    }
};
